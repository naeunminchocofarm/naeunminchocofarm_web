import SensorData from "./SensorData";

function FarmSensorMonitor({farmStatus, dataName}) {
  if (!farmStatus) {
    return <p>스마트팜 정보를 불러오지 못했습니다</p>;
  }

  const farmBoxCss = "";
  const controllerBoxCss = "grid gap-1 grid-cols-[repeat(auto-fill,minmax(200px,auto))]";
  const controllerCardCss = "border rounded-lg p-4 mt-3 shadow-md border-gray-200 font-bold text-2xl";

  return (
    <>
      <div className={farmBoxCss}>
        <div className={controllerBoxCss}>
          {
            farmStatus.controllers?.map((x, i) => 
              <div key={i} className={controllerCardCss}>
                <ControllerSensorMonitor status={x} dataName={dataName} />
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

function ControllerSensorMonitor({status, dataName}) {
  const list = status?.sensor_datas?.filter(x => x.name === dataName) ?? [];
  return (
    <div>
      {
        list.map(({name, value}, i) =>
          <SensorData key={i} name={name} value={value} />
        )
      }
    </div>
  );
}

export {
  FarmSensorMonitor
};