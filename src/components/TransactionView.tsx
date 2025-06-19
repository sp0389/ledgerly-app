import { type Transaction } from "../types/transaction";

interface TransactionViewProps {
  transaction: Transaction[];
}

const TransactionView: React.FC<TransactionViewProps> = ( {transaction} ) => {
  
  //TODO: Move to parent

  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [error, setError] = useState<string>("");

  // const getTransactionData = async () => {
  //   try {
  //     const data = await getTransactions();
  //     setTransactions(data);
  //   } catch (error: any) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getTransactionData();
  // }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="table-striped table">
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
            <tr>
              {transaction.map((t) => (
                <>
                  <td key={t.Id}>{t.Id}</td>
                  <td key={t.Amount}>{t.Amount}</td>
                  <td key={t.Date.toLocaleDateString()}>
                    {t.Date.toLocaleDateString()}
                  </td>
                  <td key={t.Date.toLocaleDateString()}>
                    {t.Date.toLocaleDateString()}
                  </td>
                  <td key={t.TransactionType}>{t.TransactionType}</td>
                  {t.BudgetCategory.map((bc) => (
                    <td key={bc.CategoryType}>{bc.CategoryType}</td>
                  ))}
                </>
              ))}
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionView;
