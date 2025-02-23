import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = (results) => {
  const result = Object.entries(results["result"]).map(([emotion, value]) => ({
    value,
    name: emotion.charAt(0).toUpperCase() + emotion.slice(1), // Capitalize emotion
  }));

  // Define custom colors for each emotion
  const emotionColors = {
    Anger: "#FF4C4C",     // Red
    Disgust: "#8BC34A",   // Green
    Fear: "#9C27B0",      // Purple
    Joy: "#FFEB3B",       // Yellow
    Sadness: "#2196F3",   // Blue
    Surprise: "#FF9800",  // Orange
  };

  const option = {
    title: {
      text: "Mental Health Analysis",
      left: "center",
      textStyle: {
        color: "white",
        padding: [5, 5, 5, 5],
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
        padding: [5, 5, 5, 5],
      },
    },
    color: result.map((item) => emotionColors[item.name] || "#CCCCCC"), // Assign colors
    series: [
      {
        name: "Status",
        type: "pie",
        radius: "50%",
        center: ["50%", "60%"],
        data: result,
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
