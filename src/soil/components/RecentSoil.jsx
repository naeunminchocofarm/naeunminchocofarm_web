import React, { useEffect, useState } from "react";
import soil_humidityApi from "../apis/soil_humidity_api";

const RecentSoil = () => {
  const [nowSoil, setNowSoil] = useState(0);
  console.log(nowSoil);
  
  const fetchSoilData = async () => {
    try {
      const response = await soil_humidityApi.getAll();
      if (response.data.length > 0) {
        const sortedSoil = response.data.sort(
          (a, b) => new Date(b.measuredAt) - new Date(a.measuredAt)
        );
        setNowSoil(sortedSoil[0].soil_moisture);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSoilData();
    const intervalId = setInterval(fetchSoilData, 600000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>{nowSoil}</div>;
};

export default RecentSoil;
