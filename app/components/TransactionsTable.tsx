import { MoreVertical } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Transaction {
  id: number;
  type: string;
  store: string;
  amount: string;
  client: string;
  date: string;
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Type de transaction</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Magasin</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Montant</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Client</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700 text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-900">{transaction.type}</td>
                <td className="py-3 px-4 text-sm text-gray-900">{transaction.store}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={cn(
                    "font-medium",
                    transaction.amount.startsWith('+') ? "text-green-600" : "text-red-600"
                  )}>
                    {transaction.amount}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">{transaction.client}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{transaction.date}</td>
                <td className="py-3 px-4">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}