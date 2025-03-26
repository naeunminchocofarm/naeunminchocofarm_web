import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
Chart.register(...registerables);

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const Humidity = () => {
  //가상 현재 습도 데이터
  const [currentHumidity, setCurrentHumidity] = useState(60);
  //가상 토양 습도 데이터
  const [soilHumidity, setSoilHumidity] = useState(60);
  //자동 급수 시스템
  const [waterSystem, setWaterSystem] = useState(false);
  //수동 급수 시스템























  
  const [waterSystemBtn, setWaterSystemBtn] = useState(waterSystem);

  //습도에 따른 급수 시스템 상태 업데이트
  //ON : 현재습도 60%이하 또는 토양습도 60% 이하
  //OFF: 현재습도 70%이상 토양습도 70% 이하
  useEffect(() => {
    if(currentHumidity < 60 || soilHumidity < 60){
      setWaterSystem(true);
    }
    else if(currentHumidity > 70 || soilHumidity > 70){
      setWaterSystem(false)
    }
  }, [currentHumidity, soilHumidity])

  
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
    <>
      {/* 현재 습도 */}
      <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px'}}>
        현재 습도: {currentHumidity}%
      </div>
      
      {/* 현재 토양 습도 */}
      <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px'}}>
        현재 토양 습도: {soilHumidity}%
      </div>
      
      {/* 자동 급수 시스템 상태 표시 */}
      <div style={{fontSize: '2rem', fontWeight: 'bold'}}>
        급수 시스템: {waterSystem ? '작동 중' : '중지'}
      </div>

      {/* 수동 급수 시스템 */}
      <div>
        <input/>

      </div>
      
      {/* 하루 습도 그래프 */}
      <div>
        <h2>Humidity Chart</h2>
        <Line data={data} options={options} />
      </div>
    
    </>
  );
};

export default Humidity;
