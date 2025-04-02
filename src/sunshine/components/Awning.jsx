import React, { useEffect, useRef, useState } from 'react';
import NcfSubscriber from '../../websocket/ncf_subscriber';
import { subscribePaths, webSocketPaths } from '../../websocket/wobsocket_paths';

const Awning = ({ currentSunshine }) => {
  const socketClient = useRef(undefined);

  // 어닝 작동 여부
  const [autoAwning, setAutoAwning] = useState(false);
  const [manualAwning, setManualAwning] = useState(false);

  useEffect(() => {
    // 일조량이 400 미만 경우 자동 어닝 작동
    if (currentSunshine < 400) {
      setAutoAwning(true);
    } else {
      setAutoAwning(false);
    }
  }, [currentSunshine]);

  useEffect(() => {
    const subscriber = new NcfSubscriber(webSocketPaths.eun, subscribePaths.awning);
    subscriber.connect();
    socketClient.current = subscriber;
  }, [])

  return (
    <div>
      {/* 자동 어닝 시스템 */}
      <div
        onClick={() => setAutoAwning((prev) => !prev)}
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
      <div
        onClick={() => {
          setManualAwning((prev) => !prev);
          if (manualAwning) {
            socketClient.current.send('awning-off')
          } else {
            socketClient.current.send('awning-on')
          } 
        }}
        
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
