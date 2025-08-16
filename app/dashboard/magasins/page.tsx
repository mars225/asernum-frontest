'use client';

import { useState } from 'react';
import { Search, Plus, ArrowUpRight, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const stores = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: 'Angré Djibi 1',
    code: 'M0001',
    location: 'Abidjan, Cocody',
    isActive: i === 0,
}));

export default function MagasinsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Magasins</h1>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Nom du magasin, code magasin, Commune"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-sm w-full sm:w-80 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                    </div>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm min-w-32">
                        <option>Commune</option>
                    </select>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <Plus className="h-4 w-4" />
                        <span>Ajouter un magasin</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {stores.map((store) => (
                    <Link
                        key={store.id}
                        href={`/dashboard/magasins/${store.id}`}
                        className={cn(
                            "relative p-4 rounded-xl border-2 transition-all cursor-pointer group hover:shadow-md block",
                            store.isActive
                                ? "bg-gradient-to-br from-red-500 to-red-600 text-white border-red-600"
                                : "bg-white border-gray-200 hover:border-gray-300"
                        )}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <Store className={cn(
                                "h-8 w-8",
                                store.isActive ? "text-white" : "text-gray-400"
                            )} />
                            <ArrowUpRight className={cn(
                                "h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                                store.isActive ? "text-white" : "text-gray-400"
                            )} />
                        </div>
                        <div className="space-y-1">
                            <h3 className={cn(
                                "font-semibold",
                                store.isActive ? "text-white" : "text-gray-900"
                            )}>
                                {store.name}
                            </h3>
                            <p className={cn(
                                "text-sm",
                                store.isActive ? "text-white/80" : "text-gray-600"
                            )}>
                                {store.code} - {store.location}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}