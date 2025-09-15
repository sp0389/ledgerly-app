import BarChart from "../../components/Chart.tsx";
import Card from "../../components/Card.tsx";
import Layout from "../../components/Layout.tsx";
import { useState, useEffect } from "react";
import {
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
          <div className="flex-1 grid grid-cols-4 gap-4">
            <Card title={"Income"} amount={income} />
            <Card title={"Expenses"} amount={expense} />
            <Card title={"Balance"} amount={balance} />
            <div className="col-span-3">
              <BarChart />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;