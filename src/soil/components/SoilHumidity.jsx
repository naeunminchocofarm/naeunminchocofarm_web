import { useEffect, useState } from "react";
import soil_humidityApi from "../apis/soil_humidity_api";

export default function SoilHumidity() {

//토양 습도 데이터
const [soilHumidity, setSoilHumidity] = useState([]);
const [currentSoilHumidity, setCurrentSoilHumidity] = useState(0);

const fetchHmidityData = async () => {
  try {
    const response = await soil_humidityApi.getAll();
    if (response.data.length > 0) {
      const sortedSoilHumidity = response.data.sort((a, b) => new Date(b.measuredAt) - new Date(a.measuredAt));
      setSoilHumidity(sortedSoilHumidity);
      setCurrentSoilHumidity(sortedSoilHumidity[0].ldrValue);
      // 토양 습도 확인용
      // console.log(sortedSoilHumidity);
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchHmidityData();
  const intervalId = setInterval(fetchHmidityData, 600000);
  return () => clearInterval(intervalId);
}, []);
  
  return(
    <>
      <div className="text-2xl font-bold text-center" >
        <p>현재 토양 습도</p>
        {soilHumidity}%
      </div>
    </>
  )

}