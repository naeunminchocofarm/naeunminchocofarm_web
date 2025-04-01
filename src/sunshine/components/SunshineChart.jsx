import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Chart as ChartJs, registerables } from "chart.js";

ChartJs.register(...registerables);
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SunshineChart = ({ sunshines, responsive = true, width = 400, height = 300 }) => {
  // X축 레이블 0~24시
  const labels = Array.from({ length: 25 }, (_, i) => `${i}시`); 

  // 현재 시간
  const currentHour = new Date().getHours();

  // Y축 데이터: 각 시간대별 일조량 데이터 (LDR 값)
  const dataValues = Array.from({ length: 24 }, (_, h) => {
    // 해당 시간에 대한 데이터를 찾아서 LDR 값을 반환, 없으면 0
    const data = sunshines.find((s) => new Date(s.measuredAt).getHours() === h);
    return data ? data.ldrValue : 0; 
  });

  // 마지막 데이터 이후는 0으로 처리하여 표시
  const updatedDataValues = dataValues.map((value, index) => {
    return index <= currentHour ? value : 0; // 현재 시간 이후는 0으로 처리
  });

  // 차트 데이터 설정
  const sunshineData = {
    labels,  // 0~24시
    datasets: [
      {
        label: "일조량 (LDR 값)",
        data: updatedDataValues,
        borderColor: "rgba(7, 99, 34, 0.5)",
        backgroundColor: "rgba(7, 99, 34, 0.5)",
        tension: 0.4,
      },
    ],
  };

  // 차트 옵션 설정
  const options = {
    responsive,
    maintainAspectRatio: !responsive,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...updatedDataValues, 100),
      },
    },
  };

  return (
    <div className="w-full" style={{ width: responsive ? "100%" : width, height: responsive ? "100%" : height }}>
      <Line data={sunshineData} options={options} />
    </div>
  );
};

export default SunshineChart;
