'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', active: 'bg-red-600 text-white' },
  { name: 'Magasins', href: '/dashboard/magasins', active: 'bg-red-600 text-white' },
  { name: 'Transactions', href: '#', active: 'bg-red-600 text-white' },
  { name: 'Clients', href: '#', active: 'bg-red-600 text-white' },
  { name: 'Gestions', href: '#', active: 'bg-red-600 text-white' },
  { name: 'Statistiques', href: '#', active: 'bg-red-600 text-white' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-red-600">Auchan</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* User menu */}
          <div className="flex items-center">
            <div className="ml-3 relative">
              <button className="flex items-center text-sm rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}