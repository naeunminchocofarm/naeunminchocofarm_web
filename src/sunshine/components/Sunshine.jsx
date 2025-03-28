import React, { useState } from 'react';
import Card from '../../common_components/Card';
import CurrentSunshine from './CurrentSunshine';
import SunshineChart from './SunshineChart';
import Awning from './Awning';

const Sunshine = () => {
  const [sunshines, setSunshines] = useState([]);
  // 현재 일조량 데이터
  const [currentSunshine, setCurrentSunshine] = useState(0);
  
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
        <SunshineChart sunshines={sunshines} />
      </Card>
    </>
  );
};

export default Sunshine;
