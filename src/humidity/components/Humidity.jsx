import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import humidityApi from "../apis/humidity_api";
import CurrentHumidity from "./CurrentHumidity";
import Card from "../../common_components/Card";
import HumidityChart from "./HumidityChart";

Chart.register(...registerables);

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const Humidity = () => {
  const [humidities, setHumidities] = useState([]);

  useEffect(bindHumidities, []);

  function bindHumidities() {
// <<<<<<< Updated upstream
//     humidityApi.getAll()
//     .then(res => {
//       //api 응답 데이터
//       console.log(res.data)
//       setHumidities(res.data)
//       //최신 데이터 반영(가장 최근 값)
//       if(data.length > 0){
//         //배열의 마지막 값이 최신 값
//         const latestHumidity = data[data.length - 1]
//         setCurrentHumidity(latestHumidity.value);
//         //토양습도 아직 따로 받아오지 않아서 임시로
//         setSoilHumidity(latestHumidity.value)
//       }
//     })
//     .catch(err => console.error(err));
// =======

    humidityApi
      .getAll()
      .then((res) => setHumidities(res.data))
      .catch((err) => console.error(err));
// >>>>>>> Stashed changes
  }

  //가상 현재 습도 데이터
  const [currentHumidity, setCurrentHumidity] = useState(60);
  //가상 토양 습도 데이터
  const [soilHumidity, setSoilHumidity] = useState(60);
  //자동 급수 시스템
  const [autoWaterSystem, setAutoWaterSystem] = useState(false);
  //수동 급수 시스템

  const [manualWaterSystem, setManualWaterSystem] = useState(false);

  //습도에 따른 급수 시스템 상태 업데이트
  //ON : 현재습도 60%이하 또는 토양습도 60% 이하
  //OFF: 현재습도 70%이상 토양습도 70% 이하

  
  return (
    <>

      <Card className="flex items-center">
          <div>
            <CurrentHumidity currentHumidity={currentHumidity} />
          </div>
          <div className="">
            <HumidityChart humidities={humidities}/>
          </div>
      </Card>

      {/* <Card>
        <p>Hello, World!</p>
      </Card> */}

      <Card>
        <soilHumidity  />
      </Card>

      {/* 현재 토양 습도 */}
      <div
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "10px" }}
      >
        현재 토양 습도: {soilHumidity}%
      </div>

       {/* 자동 급수 시스템 ON/OFF 토글 */}
        <div
        onClick={() => setAutoWaterSystem(prev => !prev)}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: autoWaterSystem ? '#4CAF50' : '#ccc',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* 토글 내부 원 */}
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: autoWaterSystem ? '33px' : '3px',
            width: '24px',
            height: '24px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          }}
        />
      </div>

      {/* 자동 급수 시스템 상태 표시 */}
      <div style={{fontSize: '2rem', fontWeight: 'bold'}}>
        자동 급수 시스템: {autoWaterSystem ? '작동 중' : '중지'}
      </div>

      {/* 수동 급수 시스템 토글*/}
      <div
        onClick={() => setManualWaterSystem(prev => !prev)}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: manualWaterSystem ? '#4CAF50' : '#ccc',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* 토글 내부 원 */}
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: manualWaterSystem ? '33px' : '3px',
            width: '24px',
            height: '24px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          }}
        />
      </div>

      <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '10px' }}>
        수동 급수 시스템: {manualWaterSystem ? '작동 중' : '중지'}
      </div>

      {/* 하루 습도 그래프 */}
        <HumidityChart humidities={humidities}/>
    </>
  );
};

export default Humidity;
