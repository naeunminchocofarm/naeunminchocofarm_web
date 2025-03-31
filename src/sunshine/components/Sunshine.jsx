import React, { useState, useEffect } from 'react'; 
import Card from '../../common_components/Card';
import CurrentSunshine from './CurrentSunshine';
import SunshineChart from './SunshineChart';
import Awning from './Awning';
import sunshineApi from '../../api/sunshineApi'; 

const Sunshine = () => {
  const [sunshines, setSunshines] = useState([]);
  // 현재 일조량 데이터
  const [currentSunshine, setCurrentSunshine] = useState(0);

   // API에서 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchSunshineData = async () => {
      try {
        const response = await sunshineApi.getAll();
        console.log(response.data);
        setSunshines(response.data);

        // 현재 일조량 업데이트
        if (response.data.length > 0) {
          setCurrentSunshine(response.data[response.data.length - 1].sunshineValue);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSunshineData();
    const intervalId = setInterval(fetchSunshineData, 600000); // 10분마다 데이터 갱신
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      <Card>
        <div className="flex items-center">
          <CurrentSunshine currentSunshine={currentSunshine} />
          <SunshineChart sunshines={sunshines} />
        </div>
      </Card>

      {/* 어닝 시스템 */}
      <Card>
        <Awning />
      </Card>

      {/* 하루 일조량 그래프 */}
      <Card>
        <SunshineChart sunshines={sunshines}/>
      </Card>
    </>
  );
};

export default Sunshine;