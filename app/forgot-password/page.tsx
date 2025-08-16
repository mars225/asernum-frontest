// app/forgot-password/page.tsx
"use client";

import AuthLayout from "../components/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="bg-white p-6 rounded-xl shadow-lg w-[320px] h-[400px]">
        <h2 className="text-lg font-semibold">Mot de passe oublié</h2>
        <p className="text-sm text-gray-800 mb-4">
          Veuillez entrer votre adresse email pour réinitialiser votre mot de passe.
        </p>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full font-medium hover:bg-red-700 transition mt-20"
          >
            Confirmer
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
