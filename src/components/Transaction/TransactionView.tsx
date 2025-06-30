import { type Transaction } from "../../types/transaction";
import { useState, useEffect } from "react";
import { getTransactions } from "../../services/financeService";
import Header from "../Header";

const TransactionView: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactionData = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTransactionData();
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
              <th>Amount</th>
              <th>Date</th>
              <th>Description</th>
              <th>Transaciton Type</th>
              <th>Category Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.Id}>
                <td>{t.Id}</td>
                <td>{t.Amount}</td>
                <td>{t.Date.toLocaleDateString()}</td>
                <td>{t.Description}</td>
                <td>{t.TransactionType}</td>
                <td>{t.BudgetCategory?.CategoryType}</td>
                <td>
                  <button
                    className="btn btn-circle btn-text btn-sm"
                    aria-label="Action button"
                  >
                    <span className="icon-[tabler--pencil] size-5"></span>
                  </button>
                  <button
                    className="btn btn-circle btn-text btn-sm"
                    aria-label="Action button"
                  >
                    <span className="icon-[tabler--trash] size-5"></span>
                  </button>
                  <button
                    className="btn btn-circle btn-text btn-sm"
                    aria-label="Action button"
                  >
                    <span className="icon-[tabler--dots-vertical] size-5"></span>
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
