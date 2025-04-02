import React, { useState, useEffect } from "react";
import Card from "../../common_components/Card";
import CurrentSunshine from "./CurrentSunshine";
import sunshineApi from "../apis/sunshine_api";
import Awning from "./Awning";
import SunshineChart from "./SunshineChart";

const Sunshine = () => {
  const [sunshines, setSunshines] = useState([]);
  const [currentSunshine, setCurrentSunshine] = useState(0);

  const fetchSunshineData = async () => {
    try {
      const response = await sunshineApi.getAll();
      if (response.data.length > 0) {
        // 데이터를 measuredAt(측정 시간)을 기준으로 정렬
        const sortedSunshines = response.data.sort((a, b) => new Date(b.measuredAt) - new Date(a.measuredAt));
        setSunshines(sortedSunshines);
        // 가장 최신 LDR 값
        setCurrentSunshine(sortedSunshines[0].ldrValue);
        // LDR 값 확인용
        // console.log(sortedSunshines);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSunshineData();
    const intervalId = setInterval(fetchSunshineData, 600000); // 10분마다 갱신
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      
      {/* 상세페이지 */}

      <CurrentSunshine currentSunshine={currentSunshine}/>
      <Card>
        <SunshineChart sunshines={sunshines} />
      </Card>

      <Card>
        <Awning currentSunshine={currentSunshine} setCurrentSunshine={setCurrentSunshine}/>
      </Card>

      
    </>
  );
};

export default Sunshine;
