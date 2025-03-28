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
import SoilHumidity from "./SoilHumidity";
import WaterSystem from "./WaterSystem";

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
      {/* Card에는 className 주면 안됨! 따로 감쌀 태그 만들어서 flex 주기!*/}
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

      {/* 현재토양습도 */}
      <Card>
        <SoilHumidity soilHumidity={soilHumidity}/>
      </Card>

      {/* 급수 시스템 */}
      <Card>
        <WaterSystem/>
      </Card>

      {/* 하루 습도 그래프 */}
      <Card>
        <HumidityChart humidities={humidities}/>
      </Card>
    </>
  );
};

export default Humidity;
