 // src/Components/DoughnutChart.js

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample fallback data (can be overridden via props)
const defaultData = {
  labels: ["Equity", "Debt", "Gold"],
  datasets: [
    {
      label: "Portfolio",
      data: [55, 30, 15],
      backgroundColor: ["#00C49F", "#0088FE", "#FFBB28"],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = ({ data = defaultData }) => {
  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
