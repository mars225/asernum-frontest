'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Calendar, RefreshCw, Download, Edit, BarChart3, MoreHorizontal, Users, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DonutChart } from '../../../components/DonutChart';
import { cn } from '@/lib/utils';

const transactions = Array.from({ length: 10 }, (_, i) => ({
    id: `10836745693${i}`,
    type: 'Paiement course',
    amount: '+2500 FCFA',
    client: '+225 07 63 32 32 32',
    date: '20/01/2025, 10:20',
}));

const cashiers = [
    { id: 1, name: 'OwenJaphet01', code: '1 2 3 4', pin: '••••', date: '20/01/2025, 10:20', status: 'Actif' },
    { id: 2, name: 'OwenJaphet01', code: '••••', pin: '••••', date: '20/01/2025, 10:20', status: 'Actif' },
    { id: 3, name: 'OwenJaphet01', code: '••••', pin: '••••', date: '20/01/2025, 10:20', status: 'Actif' },
    { id: 4, name: 'OwenJaphet01', code: '••••', pin: '••••', date: '20/01/2025, 10:20', status: 'Actif' },
    { id: 5, name: 'OwenJaphet01', code: '••••', pin: '••••', date: '20/01/2025, 10:20', status: 'Actif' },
    { id: 6, name: 'OwenJaphet01', code: '••••', pin: '••••', date: '20/01/2025, 10:20', status: 'Bloqué' },
];

const historyData = [
    { zone: 'Zone 4, Abidjan', date: 'Depuis le 25/03/2025', active: true },
    { zone: 'Angré 8e Tranche', date: 'Du 18/04/2024 au 30/08/2025', active: false },
    { zone: 'II Plateaux Latrille', date: 'Du 18/04/2024 au 30/08/2025', active: false },
];

const recentTransactionsHistory = [
    { type: 'Paiement course', amount: '+2500 FCFA' },
    { type: 'Paiement course', amount: '+2500 FCFA' },
    { type: 'Paiement course', amount: '+2500 FCFA' },
    { type: 'Paiement course', amount: '+2500 FCFA' },
];

export default function MagasinDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'transactions' | 'caissiers'>('transactions');
    const [selectedCashier, setSelectedCashier] = useState<string | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-600 mb-6">
                <span>Magasins</span>
                <span className="mx-2">›</span>
                <span className="text-gray-900">Details</span>
            </div>

            {/* Header */}
            <div className="flex items-center mb-8">
                <button
                    onClick={() => router.back()}
                    className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">Détails Magasin</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-white p-6 rounded-lg mb-8">
                {/* Main content */}
                <div className="lg:col-span-3 ">
                    {/* Store info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-white">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Nom du magasin</label>
                            <p className="font-semibold text-gray-900">Angré Djibi 1</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Manager</label>
                            <p className="font-semibold text-gray-900">Emmanuel GUIEBI</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Nombre de Caissiers</label>
                            <p className="font-semibold text-gray-900">07</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Localisation</label>
                            <p className="font-semibold text-gray-900">Abidjan, Cocody</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Responsable Caisse</label>
                            <p className="font-semibold text-gray-900">Ismael DIOMANDE</p>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Nombre de Transaction</label>
                            <p className="font-semibold text-gray-900">1253</p>
                        </div>
                    </div>
                </div>
                                    {/* Sidebar */}
                    <div className="lg:col-span-1">
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
                                <div className="flex items-center text-sm">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                    <span className="text-gray-600">Rendu monnaie</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-gray-600">Paiement course</span>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab('transactions')}
                        className={cn(
                            'py-2 px-1 border-b-2 font-medium text-sm transition-colors',
                            activeTab === 'transactions'
                                ? 'border-red-500 text-red-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        )}
                    >
                        Transactions
                    </button>
                    <button
                        onClick={() => setActiveTab('caissiers')}
                        className={cn(
                            'py-2 px-1 border-b-2 font-medium text-sm transition-colors',
                            activeTab === 'caissiers'
                                ? 'border-red-500 text-red-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        )}
                    >
                        Caissiers
                    </button>
                </nav>
            </div>

            {/* Tab content */}
            {activeTab === 'transactions' && (
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Transactions</h2>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Tape pour la recherche d'une ID d'achat..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-sm w-full sm:w-80"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-4 py-2 text-sm bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200">
                                    Tout
                                </button>
                                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                                    Rendu monnaie
                                </button>
                                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                                    Paiement course
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input type="date" className="px-3 py-2 text-sm border border-gray-300 rounded-lg" defaultValue="2024-08-12" />
                                <span className="text-gray-500">-</span>
                                <input type="date" className="px-3 py-2 text-sm border border-gray-300 rounded-lg" defaultValue="2024-08-12" />
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <RefreshCw className="h-4 w-4" />
                            </button>
                            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                                <Download className="h-4 w-4" />
                                <span>Exporter</span>
                            </button>
                        </div>
                    </div>

                    {/* Transactions table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">ID Transaction</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Type de transaction</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Montant</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Client</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction) => (
                                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-sm text-gray-900">{transaction.id}</td>
                                        <td className="py-3 px-4 text-sm text-gray-900">{transaction.type}</td>
                                        <td className="py-3 px-4 text-sm">
                                            <span className="font-medium text-green-600">{transaction.amount}</span>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-900">{transaction.client}</td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{transaction.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'caissiers' && (
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Caissiers</h2>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Tape nom d'utilisateur ou clé d'accès..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-sm w-full sm:w-80"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-4 py-2 text-sm bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200">
                                    Tout
                                </button>
                                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                                    Actif
                                </button>
                                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                                    Bloqué
                                </button>
                            </div>
                            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm">
                                <option>Défaut - Par</option>
                            </select>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <RefreshCw className="h-4 w-4" />
                            </button>
                            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                Ajouter un caissier
                            </button>
                        </div>
                    </div>

                    {/* Caissiers table */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Utilisateur</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Clé d'accès</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Date de création</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Statut</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cashiers.map((cashier) => (
                                    <tr key={cashier.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-sm text-gray-900">{cashier.name}</td>
                                        <td className="py-3 px-4 text-sm text-gray-900 flex items-center">
                                            {cashier.code}
                                            {cashier.id === 1 && <span className="ml-2 w-2 h-2 bg-red-400 rounded-full"></span>}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-gray-600">{cashier.date}</td>
                                        <td className="py-3 px-4">
                                            <span className={cn(
                                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                cashier.status === 'Actif'
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-gray-100 text-gray-800"
                                            )}>
                                                {cashier.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center space-x-2">
                                                <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedCashier(cashier.name)}
                                                    className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600"
                                                >
                                                    <BarChart3 className="h-4 w-4" />
                                                </button>
                                                <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </button>
                                                <button className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600">
                                                    <Users className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {/* Cashier History Sidebar */}
            {selectedCashier && (
                <div className="fixed inset-0 backdrop-blur-none z-50 flex justify-end">
                    <div className="bg-white w-96 h-full overflow-y-auto">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">{selectedCashier}</h2>
                                <button
                                    onClick={() => setSelectedCashier(null)}
                                    className="p-1 hover:bg-gray-100 rounded"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-900 mb-4">Historique magasin</h3>
                                <div className="space-y-4">
                                    {historyData.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                                                item.active ? "bg-red-500" : "bg-red-400"
                                            )} />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">{item.zone}</p>
                                                <p className="text-xs text-gray-600">{item.date}</p>
                                                <button className="mt-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                    Voir l'activité
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-900 mb-4">Dernières transactions</h3>
                                <div className="space-y-3">
                                    {recentTransactionsHistory.map((transaction, index) => (
                                        <div key={index} className="flex items-center justify-between py-2">
                                            <span className="text-sm text-gray-900">{transaction.type}</span>
                                            <span className="text-sm font-medium text-green-600">{transaction.amount}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-4 w-full text-center text-sm text-gray-500 hover:text-gray-700 py-2">
                                    Toutes les transactions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}