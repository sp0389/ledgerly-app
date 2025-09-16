import React from "react";
import { type Transaction } from "../../types/transaction";

interface LastTransactionsCardProps {
  transactions: Transaction[];
}

const LastFiveTransactionsCard: React.FC<LastTransactionsCardProps> = ({ transactions }) => (
  <div className="fade-in rounded-2xl bg-base-200/60 p-6 shadow-xl ring-1 ring-primary/20 w-80">
    <h3 className="text-xl font-bold text-primary mb-4">History</h3>
    <ul className="space-y-3">
      {transactions.length === 0 ? (
        <li className="text-base-content/60">No transactions found.</li>
      ) : (
        transactions.map(t => (
          <li key={t.id} className="flex flex-col border-b border-base-content/10 pb-2">
            <span className="font-semibold text-base-content">{t.title}</span>
            <span
              className={`text-sm ${t.transactionType === "Expense"
                  ? "text-red-400"
                  : "text-green-400"
                }`}
            >
              {t.transactionType === "Expense" ? "-" : "+"}${Math.abs(t.amount)}
            </span>
            <span className="text-xs text-base-content/60">{new Date(t.date).toLocaleDateString()}</span>
          </li>
        ))
      )}
    </ul>
  </div>
);

export default LastFiveTransactionsCard;