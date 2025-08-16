// app/otp/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { useRouter } from "next/navigation"; // Ajout du hook

export default function OTPPage() {
  const [seconds, setSeconds] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const router = useRouter(); // Initialisation du hook

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const handleResend = () => {
    setSeconds(120);
    setCanResend(false);
    // Ajoute ici la logique d'envoi du code OTP
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique de vérification du code OTP
    router.push("/reset-password"); // Redirection vers la page de reset
  };

  const handleOtpChange = (value: string, idx: number) => {
    if (!/^\d?$/.test(value)) return; // n'accepte que les chiffres
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    if (value && idx < 3) {
      inputsRef[idx + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[idx] === "") {
        if (idx > 0) {
          inputsRef[idx - 1].current?.focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
      }
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      inputsRef[idx - 1].current?.focus();
    }
    if (e.key === "ArrowRight" && idx < 3) {
      inputsRef[idx + 1].current?.focus();
    }
  };

  // Format mm:ss
  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <AuthLayout>
      <div className="bg-white p-6 rounded-xl shadow-lg w-[320px] h-[400px] relative">
        <h2 className="text-lg font-bold ">Code OTP</h2>
        <p className="text-sm text-gray-800 mb-8">
          Veuillez saisir le code OTP reçu par message sur votre adresse email
        </p>
        <form className="flex justify-between space-x-2 mt-8">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={inputsRef[i]}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, i)}
              onKeyDown={(e) => handleOtpKeyDown(e, i)}
              className="w-12 h-12 border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ))}
        </form>
        <div className="text-sm text-center mb-4">
          Pas encore reçu ?{" "}
          {canResend ? (
            <button
              type="button"
              className="text-red-600 hover:underline font-medium"
              onClick={handleResend}
            >
              Renvoyer
            </button>
          ) : (
            <span className="text-gray-500">{formatTime(seconds)}</span>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full font-medium hover:bg-red-700 transition mt-30"
          >
            Valider
          </button>
          
        </form>
      </div>
    </AuthLayout>
  );
}
