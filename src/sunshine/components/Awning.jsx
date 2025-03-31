import React, { useEffect, useState } from 'react';
import sunshineApi from '../apis/sunshine_api';

const Awning = ({setCurrentSunshine}) => {
  // 어닝 작동 여부
  const [autoAwning, setAutoAwning] = useState(false);
  const [manualAwning, setManualAwning] = useState(false);

  useEffect(() => {
    const sunshineData = async () => {
      try {
        const response = await sunshineApi.getAll();
        if (response.data.length > 0) {
          const latestSunshine = response.data[response.data.length - 1].sunshineValue;
          setCurrentSunshine(latestSunshine);

          // 일조량이 일정 수준 이상이면 자동 어닝 작동
          setAutoAwning(latestSunshine > 500); // 500 임시 값
        }
      } catch (error) {
        console.error(error);
      }
    };

    sunshineData();
    const intervalId = setInterval(sunshineData, 600000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      {/* 자동 어닝 시스템 */}
      <div onClick={() => setAutoAwning(prev => !prev)} 
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: autoAwning ? '#4CAF50' : '#ccc',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: autoAwning ? '33px' : '3px',
            width: '24px',
            height: '24px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          }}
        />
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        자동 어닝 시스템: {autoAwning ? '작동 중' : '중지'}
      </div>

      {/* 수동 어닝 시스템 */}
      <div onClick={() => setManualAwning(prev => !prev)} 
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: manualAwning ? '#4CAF50' : '#ccc',
          borderRadius: '15px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: manualAwning ? '33px' : '3px',
            width: '24px',
            height: '24px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          }}
        />
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '10px' }}>
        수동 어닝 시스템: {manualAwning ? '작동 중' : '중지'}
      </div>
    </div>
  );
};

export default Awning;
