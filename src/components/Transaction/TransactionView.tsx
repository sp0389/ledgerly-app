import { useState, useEffect } from "react";
import { type PagedTransactions } from "../../types/transaction";
import {
  deleteTransaction,
  getPagedTransactions,
} from "../../services/transactionService";
import Header from "../Header";
import Modal from "../Modal";
import Pagination from "../Pagination";

const TransactionView: React.FC = () => {
  const [pagedTransactions, setPagedTransactions] = useState<PagedTransactions | null>(null);

  const fetchTransactionsFromApi = async (
    page: number = 1,
  ) => {
    try {
      const data = await getPagedTransactions(page);
      setPagedTransactions(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleTransactionDelete = async (id: number) => {
    try {
      await deleteTransaction(id);
      if (pagedTransactions) {
        fetchTransactionsFromApi(pagedTransactions.page);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTransactionsFromApi();
  }, []);

  const totalPages = pagedTransactions
    ? Math.ceil(pagedTransactions.totalCount / pagedTransactions.pageSize)
    : 1;

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
              <th>Transaction Type</th>
              <th>Budget Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagedTransactions?.transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.amount}</td>
                <td>{new Date(t.date).toLocaleDateString()}</td>
                <td>{t.description}</td>
                <td>{t.transactionType}</td>
                <td>{t.budgetCategory?.title ?? "No Category"}</td>
                <td className="flex gap-2">
                  <button className="btn btn-text btn-sm" aria-label="Edit">
                    <span className="icon-[tabler--pencil] size-4"></span>
                  </button>
                  <Modal
                    title="Delete"
                    body="Are you sure you want to delete this record?"
                    onConfirm={() => handleTransactionDelete(Number(t.id))}
                  />
                  <button className="btn btn-text btn-sm" aria-label="More">
                    <span className="icon-[tabler--dots-vertical] size-4"></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pagedTransactions && (
          <div className="mt-6">
            <Pagination
              currentPage={pagedTransactions.page}
              totalPages={totalPages}
              onPageChange={(page) =>
                fetchTransactionsFromApi(page)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionView;