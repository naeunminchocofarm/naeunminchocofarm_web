import React, { useEffect, useState } from 'react'
import CurrentHumidity from "./CurrentHumidity";

const Humidifier = () => {
  const [autoHumidifier, setAutoHumidifier] = useState(false);
  
  useEffect(() => {
    //습도에 따른 가습기 상태 업데이트
    //ON : 현재습도 60% 미만
    //OFF: 현재습도 80% 초과
    if(CurrentHumidity < 60){
      setAutoHumidifier(true);
    } else if (CurrentHumidity > 80){
      setAutoHumidifier(false);
    }
  }, [CurrentHumidity]);

  return (
    <>
      <div
        onClick={() => setAutoHumidifier(prev => !prev)}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: autoHumidifier ? '#4CAF50' : '#ccc',
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
            left: autoHumidifier ? '33px' : '3px',
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
        자동 급수 시스템: {autoHumidifier ? '작동 중' : '중지'}
      </div>
    </>
  )
}

export default Humidifier