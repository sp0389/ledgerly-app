import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getMonthlyExpenseTransactionAmounts, getMonthlyIncomeTransactionAmounts } from "../services/transactionService";

interface ChartProps {}

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
      text: "Income vs Expense Breakdown",
      colors: "var(--color-base-content)",
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
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart;