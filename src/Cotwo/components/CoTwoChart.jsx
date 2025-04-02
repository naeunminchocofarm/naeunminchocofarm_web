import React from "react";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const CoTwoChart = () => {
  //가상이산화탄소 영역
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
  const co2data = {
    labels,
    datasets: [
      {
        data: [
          10, 20, 15, 25, 30, 22, 10, 20, 15, 25, 30, 22, 10, 20, 15, 25, 30,
          22, 10, 20, 15, 25, 30, 22,
        ], // 데이터 값만 적용
        borderColor: "rgb(79, 192, 75)",
        borderWidth: 1, // 라인 두께
        pointRadius: 0, // 점 숨기기
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const noOptions = {
    responsive: true,
    scales: {
      x: { display: false }, // X축 숨김
      y: { display: false }, // Y축 숨김
    },
    plugins: {
      legend: { display: false }, // 범례 숨김
    },
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default CoTwoChart;
