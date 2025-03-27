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

const HumidityChart = ({ humidities, width = 400, height = 300, responsive = true }) => {
  // X축 시간 레이블
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
  
  // 가상 습도 데이터
  const data = {
    labels,
    datasets: [
      {
        label: "습도 (%)",
        data: humidities.map((x) => x.value),
        borderColor: "black",
        backgroundColor: "black",
        // 선의 곡률
        tension: 0.4, 
      },
    ],
  };

  const options = {
    // 반응형 여부 설정
    responsive, 
    // 기본 비율 유지 여부 (false로 설정하면 크기 조절 가능)
    maintainAspectRatio: false, 
    //범례
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      //y축 설정
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: responsive ? "100%" : width, height: responsive ? "100%" : height }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default HumidityChart;
