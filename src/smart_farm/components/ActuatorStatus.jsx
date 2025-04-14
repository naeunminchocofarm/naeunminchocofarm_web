function ActuatorStatus({status}) {
  return (
    <>
      {
        status?.['type'] == 'led' ? <LedActuatorStatus status={status} />
        : null
      }
    </>
  );
}

function LedActuatorStatus({status}) {
  return (
    <>
      {/* <p>uuid: {status?.['uuid']}</p> */}
      <p>led: {status?.['power'] == 'on' ? '켜짐!!!!!!!!' : '꺼짐'}</p>
    </>
  );
}

export default ActuatorStatus;