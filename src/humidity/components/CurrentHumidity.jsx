import React, { useEffect, useState } from 'react'
import humidityApi from '../apis/humidity_api';

const CurrentHumidity = () => {
  const [humidity, sethimidity] = useState([]);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  
  const fetchHumidityData = async () => {
    try {
      const reponse = await humidityApi.getAll();
      if (reponse.data.length > 0) {
        const sortedHumidity = reponse.data.sort((a, b) => new Date(b.measureAt) - new Date(a.measureAt));
        sethimidity(sortedHumidity);
        setCurrentHumidity(sortedHumidity[0].humidityPercentage);
        // humidityPercentage값 확인용
        // console.log(sortedHumidity);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHumidityData();
    const intervalId = setInterval(fetchHumidityData, 600000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {currentHumidity}
    </>
  )
}

export default CurrentHumidity