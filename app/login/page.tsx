// app/login/page.tsx
"use client";

import Link from "next/link";
import AuthLayout from "../components/AuthLayout";
import { useRouter } from "next/navigation"; // Ajout du hook

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici tu peux ajouter la logique de vérification si besoin
        router.push("/otp"); // Redirection vers la page OTP
    };

    return (
        <AuthLayout>
            <div className="bg-white p-6 rounded-xl shadow-lg w-[320px] h-[400px]">
                <h2 className="text-lg font-semibold ">Connexion</h2>
                <p className="text-sm text-gray-800 mb-4">
                    Saisissez vos identifiants pour vous connecter
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full rounded-lg border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <p className="text-sm text-right text-red-600 hover:underline cursor-pointer">
                        <Link href="/forgot-password">
                            Mot de passe oublié ?
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-full font-medium hover:bg-red-700 transition mt-8"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
}
