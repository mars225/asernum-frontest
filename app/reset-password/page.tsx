'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '../components/AuthLayout';

export default function ResetPasswordPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simulation simple
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirection vers le dashboard
    router.push('/dashboard');
  };

  return (
    <AuthLayout>
      <div className="bg-white p-6 rounded-xl shadow-lg w-[320px] h-[400px]">
        <h2 className="text-lg font-semibold">Nouveau mot de passe</h2>
        <p className="text-sm text-gray-800 mb-8">
          Défini ton nouveau mot de passe pour terminer
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nouveau mot de passe</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Confirmer le mot de passe</label>
            <input
              type="password"
              className="w-full rounded-lg border px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full font-medium hover:bg-red-700 transition mt-10"
          >
            Valider
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}