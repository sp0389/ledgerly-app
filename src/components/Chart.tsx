import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps { }

const Chart: React.FC<ChartProps> = () => {

  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  const getApiDataForChart = async () => {
    //TODO: API Call
  }

  useEffect(() => {
    getApiDataForChart();
  }, [incomeData, expenseData]);

  const chartOptions = {
    chart: {
      type: "line" as "line",
    },
    series: [
      {
        name: "Income",
        //TODO: update with actual API call for data.
        data: [5480, 5520, 5450, 5600, 5500, 5480, 5550, 5520, 5500, 5530, 5490, 5600],
      },
      {
        name: "Expense",
        data: [4120, 4300, 4150, 4380, 4220, 4270, 4200, 4350, 4180, 4300, 4250, 4400]
      }
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
        "Nov",
        "Dec"
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