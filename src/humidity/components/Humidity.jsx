import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const Humidity = () => {
  //X축 시간 레이블
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
  //가상 습도 데이터
  const data = {
    labels,
    datasets: [
      {
        label: '습도 (%)',
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 50) + 50),
        borderColor: 'black',
        backgroundColor: 'black',
        //선의 곡률
        tension: 0.4,
      },
    ],
  };

  const options = {
    //범례 표시
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    //y축 설정
    scales: {
      y: {
        //0부터 시작
        beginAtZero: true,
        //최대값
        max: 100,
      },
    },
  };

  return (
    <div>
      <h2>Humidity Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Humidity;
