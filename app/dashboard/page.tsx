'use client';

import { ArrowUpRight, Store, ShoppingCart, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DonutChart } from '../components/DonutChart';
import { TransactionsTable } from '../components/TransactionsTable';
import { useState } from 'react';

const topStores = [
  { name: 'Angré Djibi 1', location: 'Abidjan, Cocody', isActive: true },
  { name: 'Angré Djibi 1', location: 'Abidjan, Cocody', isActive: false },
  { name: 'Angré Djibi 1', location: 'Abidjan, Cocody', isActive: false },
  { name: 'Angré Djibi 1', location: 'Abidjan, Cocody', isActive: false },
];


const recentTransactions = [
  {
    id: 1,
    type: 'Paiement course',
    store: 'Angré Djibi 1',
    amount: '+220 FCFA',
    client: '+225 07 08 06 05 04',
    date: '20/01/2025, 10:20'
  },
  {
    id: 2,
    type: 'Rendu monnaie',
    store: 'Angré Djibi 1',
    amount: '-220 FCFA',
    client: '+225 07 08 06 05 04',
    date: '20/01/2025, 10:20'
  },
  {
    id: 3,
    type: 'Rendu monnaie',
    store: 'Angré Djibi 1',
    amount: '-220 FCFA',
    client: '+225 07 08 06 05 04',
    date: '20/01/2025, 10:20'
  },
  {
    id: 4,
    type: 'Paiement course',
    store: 'Angré Djibi 1',
    amount: '+220 FCFA',
    client: '+225 07 08 06 05 04',
    date: '20/01/2025, 10:20'
  },
  {
    id: 5,
    type: 'Rendu monnaie',
    store: 'Angré Djibi 1',
    amount: '-220 FCFA',
    client: '+225 07 08 06 05 04',
    date: '20/01/2025, 10:20'
  },
];

export default function Dashboard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Solde global */}
        <div className="lg:col-span-1">
          <div
            onClick={toggleBalanceVisibility}
            className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white relative overflow-hidden h-full cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            <div className="relative">
              <h3 className="text-lg font-medium opacity-90 mb-1">Solde global</h3>
              <p className="text-xs opacity-75 mb-6">
                {isBalanceVisible ? "Touchez pour masquer le solde" : "Touchez pour afficher le solde"}
              </p>
              <div className="space-y-1">
                {isBalanceVisible ? (
                  <>
                    <div className="text-3xl font-bold">9 231 000</div>
                    <div className="text-xl font-semibold">FCFA</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl font-bold">• • • • • • •</div>
                    <div className="text-xl font-semibold">FCFA</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Les magasins qui transactent le plus */}
        <div className="lg:col-span-2 bg-red-50  rounded-xl p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Les magasins qui transactent le plus</h2>
            <button className="text-red-600 hover:text-red-700 text-sm font-medium border border-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition-colors">
              Tous les magasins →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topStores.map((store, index) => (
              <div key={index} className={cn(
                "relative p-4 rounded-xl border-2 transition-all cursor-pointer group",
                index === 0
                  ? "bg-gradient-to-br from-red-500 to-red-600 text-white border-red-600"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
              )}>
                <div className="flex items-center justify-between mb-3">
                  <Store className={cn(
                    "h-8 w-8",
                    index === 0 ? "text-white" : "text-gray-400"
                  )} />
                  <ArrowUpRight className={cn(
                    "h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                    index === 0 ? "text-white" : "text-gray-400"
                  )} />
                </div>
                <div className="space-y-1">
                  <h3 className={cn(
                    "font-semibold",
                    index === 0 ? "text-white" : "text-gray-900"
                  )}>{store.name}</h3>
                  <p className={cn(
                    "text-sm",
                    index === 0 ? "text-white/80" : "text-gray-600"
                  )}>M0001 - {store.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions récentes */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Transactions récentes</h2>
            <button className="text-red-600 hover:text-red-700 text-sm font-medium border border-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition-colors">
              Toutes les transactions →
            </button>
          </div>
          <TransactionsTable transactions={recentTransactions} />
        </div>

        {/* Statistiques */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Statistiques</h2>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
              <option>30 derniers jours</option>
              <option>7 derniers jours</option>
              <option>Aujourd'hui</option>
            </select>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <DonutChart
              data={[
                { name: 'Rendu monnaie', value: 60, color: '#ef4444' },
                { name: 'Paiement course', value: 40, color: '#10b981' }
              ]}
              centerValue="9364"
              centerLabel="Transactions"
            />
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Rendu monnaie</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Paiement course</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}