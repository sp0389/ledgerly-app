import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getMonthlyExpenseTransactionAmounts, getMonthlyIncomeTransactionAmounts } from "../services/transactionService";

interface ChartProps { }

const Chart: React.FC<ChartProps> = () => {
  const [incomeData, setIncomeData] = useState<number[]>([]);
  const [expenseData, setExpenseData] = useState<number[]>([]);

  const getApiDataForChart = async () => {
    try {
      const incomeData = await getMonthlyIncomeTransactionAmounts();
      setIncomeData(incomeData);
      const expenseData = await getMonthlyExpenseTransactionAmounts();
      setExpenseData(expenseData);
    }
    catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiDataForChart();
  }, []);

  const chartOptions = {
    chart: {
      type: "bar" as "bar",
    },
    title: {
      text: "",
      style: {
        color: "var(--color-base-content)",
      },
    },
    legend: {
      labels: {
        colors: "var(--color-base-content)",
      },
    },
    series: [
      {
        name: "Income",
        data: incomeData,
      },
      {
        name: "Expense",
        data: expenseData,
      },
    ],
    colors: ["var(--color-primary)", "var(--color-base-100)"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "var(--color-base-content)",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        align: "left" as "left",
        minWidth: 0,
        maxWidth: 140,
        style: {
          colors: "var(--color-base-content)",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
  };

  return (
    <div>
      <div className="col-span-3">
        <div className="fade-in rounded-2xl bg-base-200/60 p-6 shadow-xl ring-1 ring-primary/20">
          <h3 className="text-xl font-bold text-primary mb-4">Income vs Expense</h3>
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;