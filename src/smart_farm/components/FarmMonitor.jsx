import SensorData from "./SensorData";

export default function FarmSensorMonitor({status, dataName}) {
  const controllerBoxCss = "grid gap-1 grid-cols-[repeat(auto-fill,minmax(200px,auto))]";
  const controllerCardCss = "border rounded-lg p-4 mt-3 shadow-md border-gray-200 font-bold text-2xl bg-white";

  const controllers = status.controllers?.map(c => {
    return {
      name: c.name ?? "이름 없음",
      sensorValue: c.sensor_datas?.find(x => x.name === dataName)?.value
    }
  }) ?? [];

  return (
    <>
      <div className={controllerBoxCss}>
        {
          controllers?.map(({name, sensorValue}, i) => 
            <div key={i} className={controllerCardCss}>
              <div className="font-bold text-lg mb-1">{name}</div>
              <div className="flex justify-center items-center text-gray-600">
                <div className="w-[25%]">
                  <SensorData name={dataName} value={sensorValue} />
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}