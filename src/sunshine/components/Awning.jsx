import React, { useEffect, useRef, useState } from 'react';
import NcfSubscriber from '../../websocket/ncf_subscriber';
import { subscribePaths, webSocketPaths } from '../../websocket/wobsocket_paths';
import ToggleButton from '../../common_components/ToggleButton';

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
    const subscriber = new NcfSubscriber(webSocketPaths.production, subscribePaths.awning);
    subscriber.connect();
    socketClient.current = subscriber;
  }, [])

  function handleChangeManualAwning(value) {
    setManualAwning(value);
    socketClient.current.send(value ? 'awning-on' : 'awning-off');
    console.log(value);
  }

  return (
    <div>
      {/* 자동 어닝 시스템 */}
      <ToggleButton value={autoAwning} onChange={value => setAutoAwning(value)} />
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        자동 어닝 시스템: {autoAwning ? '작동 중' : '중지'}
      </div>

      {/* 수동 어닝 시스템 */}
      <ToggleButton value={manualAwning} onChange={handleChangeManualAwning} />
      <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '10px' }}>
        수동 어닝 시스템: {manualAwning ? '작동 중' : '중지'}
      </div>
    </div>
  );
};

export default Awning;