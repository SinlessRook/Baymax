import React from "react";
import ReactECharts from "echarts-for-react";
// import { color } from "framer-motion";

const PieChart = () => {
  const option = {
    title: {
      text: "Mental Health Analysis",
      left: "center",
      textStyle: {
        color: "white", 
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        color: "white", 
      },
    },
    series: [
      {
        name: "Status",
        type: "pie",
        radius: "50%",
        data: [
          { value: 40, name: "Happy" },
          { value: 20, name: "Stressed" },
          { value: 15, name: "Anxious" },
          { value: 10, name: "Calm" },
          { value: 15, name: "Sad" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
};

export default PieChart;
