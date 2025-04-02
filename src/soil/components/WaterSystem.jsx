import { useEffect, useState } from "react";
import CurrentHumidity from "./CurrentHumidity";

const WaterSystem = () => {
  // 가습기 작동 여부
  const [autoWaterSystem, setAutoWaterSystem] = useState(false);

  useEffect(() => {
    //습도에 따른 급수 시스템 상태 업데이트
    //ON : 현재습도 60% 미만
    //OFF: 현재습도 70% 초과
    if (CurrentHumidity < 60) {
      setAutoWaterSystem(true); 
    } else if (CurrentHumidity > 70) {
      setAutoWaterSystem(false); 
    }
  }, [CurrentHumidity]);
    

  return (
    <>

      {/* 자동 급수 시스템 상태 표시 */}
      <div style={{fontSize: '2rem', fontWeight: 'bold'}}>
        자동 급수 시스템: {autoWaterSystem ? '작동 중' : '중지'}
      </div>

    </>
  );
};

export default WaterSystem;