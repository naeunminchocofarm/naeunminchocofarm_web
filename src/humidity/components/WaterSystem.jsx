import { useState } from "react";

const WaterSystem = () => {
  const [autoWaterSystem, setAutoWaterSystem] = useState(false);
  const [manualWaterSystem, setManualWaterSystem] = useState(false);

  return (
    <div>
      {/* 자동 급수 시스템 ON/OFF 토글 */}
      <div
        onClick={() => setAutoWaterSystem(prev => !prev)}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: autoWaterSystem ? '#4CAF50' : '#ccc',
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
            left: autoWaterSystem ? '33px' : '3px',
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
        자동 급수 시스템: {autoWaterSystem ? '작동 중' : '중지'}
      </div>

      {/* 수동 급수 시스템 토글*/}
      <div
        onClick={() => setManualWaterSystem(prev => !prev)}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '30px',
          backgroundColor: manualWaterSystem ? '#4CAF50' : '#ccc',
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
            left: manualWaterSystem ? '33px' : '3px',
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
        수동 급수 시스템: {manualWaterSystem ? '작동 중' : '중지'}
      </div>
    </div>
  );
};

export default WaterSystem;