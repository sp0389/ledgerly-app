import { type Transaction } from "../../types/transaction";
import { useState, useEffect } from "react";
import {
  deleteTransaction,
  getTransactions,
} from "../../services/transactionService";
import Header from "../Header";
import Modal from "../Modal";

const TransactionView: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactionsFromApi = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleTransactionDelete = async (id: number) => {
    try {
      await deleteTransaction(id);
      fetchTransactionsFromApi();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTransactionsFromApi();
  }, []);

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="w-full overflow-x-auto">
        <Header
          icon={<span className="icon-[tabler--history]"></span>}
          label="Transactions"
          description="Keep track of every transaction you have recorded."
        />
        <table className="table-striped table border-base-content/25 w-full overflow-x-auto border">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
              <th>Transaciton Type</th>
              <th>Budget Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.amount}</td>
                <td>{t.date.toString()}</td>
                <td>{t.description}</td>
                <td>
                  {t.transactionType}
                </td>
                <td>
                  {t.budgetCategory?.categoryType === undefined
                    ? "No Category"
                    : t.budgetCategory.title}
                </td>
                <td>
                  <button
                    className="btn btn-text btn-sm"
                    aria-label="Action button"
                  >
                    <span className="icon-[tabler--pencil] size-4"></span>
                  </button>
                  <Modal
                    title="Delete"
                    body="Are you sure you want to delete this record?"
                    onConfirm={() => handleTransactionDelete(Number(t.id))}
                  />
                  <button
                    className="btn btn-text btn-sm"
                    aria-label="Action button"
                  >
                    <span className="icon-[tabler--dots-vertical] size-4"></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionView;