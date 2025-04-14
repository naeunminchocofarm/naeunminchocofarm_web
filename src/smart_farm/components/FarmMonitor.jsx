function FarmMonitor({status}){
  return (
    <>
      {/* <p>type: {status?.['type']}</p> */}
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <h2 className="text-xl font-bold mt-5">컨트롤러들</h2>
      <ul>
      {
        status?.['controllers'].map((x, i) => <li key={i}>
          <ControllerMonitor status={x} />
        </li>)
      }
      </ul>
    </>
  );
}

function ControllerMonitor({status}) {
  return (
    <>
      {/* <p>type: {status?.['type']}</p> */}
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <h2 className="text-lg font-bold mt-2">센서들</h2>
      <ul>
        {
          status?.['sensors'].map((x, i) => <li key={i}>
            <SensorMonitor status={x} />
          </li>)
        }
      </ul>
      <h2 className="text-lg font-bold mt-2">액추에이터들</h2>
      <ul>
        {
          status?.['actuators'].map((x, i) => <li key={i}>
            <ActuatorMonitor status={x} />
          </li>)
        }
      </ul>
    </>
  );
}

function SensorMonitor({status}) {
  const type = status?.['type'];
  return (
    <>
      {
        type == 'air_temp_humid' ? <AirTempHumidSensorMonitor status={status} />
        : type == 'adc' ? <AdcSensorMonitor status={status} />
        : type == 'pir' ? <PirSensorMonitor status={status} />
        : null
      }
    </>
  );
}

function AirTempHumidSensorMonitor({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>현재 기온: {status?.['air_temp']}'C</p>
      <p>현재 습도: {status?.['humidity']}%</p>
    </>
  );
}

function AdcSensorMonitor({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>현재 조도: {status?.['ldr']}</p>
      <p>현재 토양습도: {status?.['soil_moisture']}</p>
    </>
  );
}

function PirSensorMonitor({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>움직임: {status?.['motion'] == 'detected' ? '감지됨!!!!!!' : ''}</p>
    </>
  );
}

function ActuatorMonitor({status}) {
  return (
    <>
      {
        status?.['type'] == 'led' ? <LedActuatorMonitor status={status} />
        : null
      }
    </>
  );
}

function LedActuatorMonitor({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>led: {status?.['power'] == 'on' ? '켜짐!!!!!!!!' : '꺼짐'}</p>
    </>
  );
}

export default FarmMonitor;