import BarChart from "../../components/Chart.tsx";
import Card from "../../components/Card.tsx";
import Layout from "../../components/Layout.tsx";
import { useState, useEffect } from "react";
import { getExpenseTransactionBalance, getIncomeTransactionBalance } from "../../services/transactionService.ts";

const Home = () => {

  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  const fetchIncomeFromApi = async () => {
    try {
      setIncome(await getIncomeTransactionBalance());
      setExpense(await getExpenseTransactionBalance());

    } catch(error: any) {
      console.log(error.messsage);
    }
  }

  useEffect(() =>{
    fetchIncomeFromApi();
  });
  
  return (
    <>
      <Layout>
        <div className="flex-1 grid grid-cols-4 gap-4">
          <Card title={"Income"} amount={income} />
          <Card title={"Expenses"} amount={expense} />
          <div className="col-span-3">
            <BarChart />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
