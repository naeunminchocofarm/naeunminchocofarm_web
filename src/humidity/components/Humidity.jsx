import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import humidityApi from '../apis/humidity_api';

Chart.register(...registerables);

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const Humidity = () => {
  const [humidities, setHumidities] = useState([]);

  useEffect(bindHumidities, []);

  function bindHumidities() {
    humidityApi.getAll()
    .then(res => setHumidities(res.data))
    .catch(err => console.error(err));
  }

  //X축 시간 레이블
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
  //가상 습도 데이터
  const data = {
    labels,
    datasets: [
      {
        label: '습도 (%)',
        data: humidities.map(x => x.value),
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
