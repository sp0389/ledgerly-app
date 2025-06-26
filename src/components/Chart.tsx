import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {}

const Chart: React.FC<ChartProps> = () => {
  const chartOptions = {
    chart: {
      type: "line" as "line",
    },
    series: [
      {
        name: "Series 1",
        //TODO: update with actual API call for data.
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
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