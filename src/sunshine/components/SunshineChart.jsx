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
  // 1시간 단위 데이터만 필터링 (각 시간대 첫 번째 데이터만 유지)
  const filteredSunshines = sunshines.reduce((acc, current) => {
    const hour = new Date(current.measuredAt).getHours();
    if (!acc.some((item) => new Date(item.measuredAt).getHours() === hour)) {
      acc.push(current);
    }
    return acc;
  }, []);

  // X축 시간 레이블
  const labels = filteredSunshines.map((s) => new Date(s.measuredAt).getHours() + "시");
  //Array.from({ length: 24 }, (_, i) => `${i + 1}시`);

  // 일조량 데이터
  const sunshineData = {
    labels,
    datasets: [
      {
        label: "일조량(kWh)",
        data: sunshines.map((x) => x.sunshineValue),
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