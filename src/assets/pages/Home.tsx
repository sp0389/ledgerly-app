import BarChart from "../../components/Chart.tsx";
import TransactionBalanceCard from "../../components/Transaction/TransactionBalanceCard.tsx";
import Layout from "../../components/Layout.tsx";
import LastFiveTransactionsCard from "../../components/Transaction/LastFiveTransactionsCard.tsx";
import { type Transaction } from "../../types/transaction";
import { useState, useEffect } from "react";
import {
  getLastFiveTransactions,
  getExpenseTransactionBalance,
  getIncomeTransactionBalance,
  getTotalTransactionBalance,
} from "../../services/transactionService.ts";
import { isUserLoggedIn } from "../../services/authService.ts";
import { useNavigate } from "react-router";

const Home = () => {
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [lastFiveTransactions, setLastFiveTransactions] = useState<Transaction[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const checkUserLoginStatus = async () => {
    const loggedIn = await isUserLoggedIn();
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      navigate("/login");
    }
  }

  const fetchBalancesFromApi = async () => {
    try {
      setLastFiveTransactions(await getLastFiveTransactions());
      setIncome(await getIncomeTransactionBalance());
      setExpense(await getExpenseTransactionBalance());
      setBalance(await getTotalTransactionBalance());

    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBalancesFromApi();
    checkUserLoginStatus();
  }, []);

  return (
    <>
      <Layout>
        <div className="max-w-5xl mx-auto p-6">
          <div className="flex gap-4">
            <div className="flex-1 grid grid-cols-3 gap-4">
              <TransactionBalanceCard title={"Income"} amount={income} />
              <TransactionBalanceCard title={"Expenses"} amount={expense} />
              <TransactionBalanceCard title={"Balance"} amount={balance} />
              <div className="col-span-3">
                <BarChart />
              </div>
            </div>
            <LastFiveTransactionsCard transactions={lastFiveTransactions}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;