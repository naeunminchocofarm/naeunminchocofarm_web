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

const SunshineChart = ({ sunshines, responsive = true, width = 400, height = 300 }) => {
  // X축 시간 레이블
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);

  // 일조량 데이터
  const sunshineData = {
    labels,
    datasets: [
      {
        label: "일조량(kWh)",
        data: sunshines.map((x) => x.value),
        borderColor: "black",
        backgroundColor: "black",
        // 선의 곡률
        tension: 0.4, 
      },
    ],
  };

  const options = {
    //반응형 여부
    responsive, 
    // 기본 비율 유지 여부 (false로 설정하면 크기 조절 가능)
    maintainAspectRatio: true, 
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="w-full" style={{ width: responsive ? "100%" : width, height: responsive ? "100%" : height }}>
      <Line data={sunshineData} opti
      ons={options} />
    </div>
  );
};

export default SunshineChart;
