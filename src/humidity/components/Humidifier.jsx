import React, { useEffect, useState } from 'react'
import CurrentHumidity from "./CurrentHumidity";
import ToggleButton from '../../common_components/ToggleButton';

const Humidifier = ({currentHumidity}) => {
  // 가습기 작동 여부
  const [autoHumidifier, setAutoHumidifier] = useState(false);
  const [manualHumiditier, setManualHumiditier] = useState(false);


  useEffect(() => {
    //습도에 따른 가습기 상태 업데이트
    //ON : 현재습도 60% 미만
    //OFF: 현재습도 80% 초과
    if(currentHumidity < 60){
      setAutoHumidifier(true);
    } else if (CurrentHumidity > 80){
      setAutoHumidifier(false);
    }
  }, [currentHumidity]);

  return (
    <div>
      <ToggleButton 
        value={manualHumiditier} 
        // onChange={}
      />

    </div>
  )
}

export default Humidifier