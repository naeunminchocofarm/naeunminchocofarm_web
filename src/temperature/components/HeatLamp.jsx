import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "../../common_components/ToggleButton";
import NcfSubscriber from "../../websocket/ncf_subscriber";
import {
  subscribePaths,
  webSocketPaths,
} from "../../websocket/wobsocket_paths";

const HeatLamp = ({ nowTemp }) => {
  //만들어둔 소켁클라이언트 변수
  const heatSocketClient = useRef(undefined);
  //힛팅램프 작동여부
  const [autoHeating, setAutoHeating] = useState(false);

  useEffect(() => {
    //온도가 8도 이하로 떨어지면 작동
    if (nowTemp < 8) {
      setAutoHeating(true);
    } else {
      setAutoHeating(false);
    }
  }, [nowTemp]);

  useEffect(() => {
    const subscriber = new NcfSubscriber(
      webSocketPaths.production,
      subscribePaths.heatLamp
    );
    subscriber.connect();
    heatSocketClient.current = subscriber;
  }, []);

  function handleChangeManualHeatingLamp(value) {
    setAutoHeating(value);
    heatSocketClient.current.send(value ? "heat-lamp-on" : "heat-lamp-off");
    console.log(value);
  }

  return (
    <>
      <ToggleButton
        value={autoHeating}
        onChange={handleChangeManualHeatingLamp}
      />
    </>
  );
};

export default HeatLamp;
