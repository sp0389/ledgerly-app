import { TransactionType, type Transaction } from "../../types/transaction";
import { useState, useEffect } from "react";
import { getTransactions } from "../../services/financeService";
import Header from "../Header";

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

  useEffect(() => {
    fetchTransactionsFromApi();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <Header
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
                <td>{t.transactionType === TransactionType.Income ? "Income" : "Expense"}</td>
                <td>
                <button className="btn btn-text btn-sm" aria-label="Action button">
                  <span className="icon-[tabler--pencil] size-4"></span>
                </button>
                <button className="btn btn-text btn-sm" aria-label="Action button">
                  <span className="icon-[tabler--trash] size-4"></span>
                </button>
                <button className="btn btn-text btn-sm" aria-label="Action button">
                  <span className="icon-[tabler--dots-vertical] size-4"></span>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionView;