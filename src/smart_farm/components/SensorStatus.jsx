function SensorStatus({status}) {
  const type = status?.['type'];
  return (
    <>
      {
        type == 'air_temp_humid' ? <AirTempHumidSensorStatus status={status} />
        : type == 'adc' ? <AdcSensorStatus status={status} />
        : type == 'pir' ? <PirSensorStatus status={status} />
        : null
      }
    </>
  );
}

function AirTempHumidSensorStatus({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>현재 기온: {status?.['air_temp']}'C</p>
      <p>현재 습도: {status?.['humidity']}%</p>
    </>
  );
}

function AdcSensorStatus({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>현재 조도: {status?.['ldr']}</p>
      <p>현재 토양습도: {status?.['soil_moisture']}</p>
    </>
  );
}

function PirSensorStatus({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>움직임: {status?.['motion'] == 'detected' ? '감지됨!!!!!!' : ''}</p>
    </>
  );
}

export default SensorStatus;