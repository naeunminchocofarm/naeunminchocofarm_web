import { useEffect, useState } from "react";
import { subscribeFarmStatus } from "../setting_manager";
import RadioPannel from "../components/RadioPannel";
import SensorData from "./SensorData";

function FarmMonitor({farmUuid, categories, categoryGroupName, defaultCategoryValue, ControllerMonitor}){
  const [dataName, setDataName] = useState(defaultCategoryValue);
  const [status, setStatus] = useState(undefined);

  useEffect(init, [farmUuid]);
  
  function init() {
    const unsubscribeStatus = subscribeFarmStatus(farmUuid, status => setStatus(status));

    return () => {
      unsubscribeStatus();
    }
  }

  if (!status) {
    return <p>현재 스마트팜의 상태를 불러오지 못함!!!!</p>;
  }

  const farmBoxCss = "";
  const controllerBoxCss = "grid gap-1 grid-cols-[repeat(auto-fill,minmax(200px,auto))]";
  const controllerCardCss = "border rounded-lg p-4 mt-3 shadow-md border-gray-200 font-bold text-2xl";

  return (
    <>
      <RadioPannel name={categoryGroupName} fields={categories} value={dataName} onChange={setDataName} /> 
      <div className={farmBoxCss}>
        <div className={controllerBoxCss}>
          {
            status.controllers?.map((x, i) => 
              <div key={i} className={controllerCardCss}>
                <ControllerMonitor status={x} dataName={dataName} />
              </div>
            )
          }
          <div className={controllerCardCss}>임시 구역</div>
          <div className={controllerCardCss}>임시 구역</div>
          <div className={controllerCardCss}>임시완 구역</div>
        </div>
      </div>
    </>
  );
}

function FarmSensorMonitorV2({farmStatus, dataName}) {
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
          <div className={controllerCardCss}>임시 구역1</div>
          <div className={controllerCardCss}>임시 구역2</div>
          {
            farmStatus.controllers?.map((x, i) => 
              <div key={i} className={controllerCardCss}>
                <ControllerSensorMonitorV2 status={x} dataName={dataName} />
              </div>
            )
          }
          <div className={controllerCardCss}>임시 구역3</div>
          <div className={controllerCardCss}>임시 구역4</div>
          <div className={controllerCardCss}>임시 구역5</div>
          <div className={controllerCardCss}>임시 구역6</div>
          <div className={controllerCardCss}>임시완 구역7</div>
          <div className={controllerCardCss}>임시 구역8</div>
          <div className={controllerCardCss}>임시 구역9</div>
        </div>
      </div>
    </>
  );
}

function FarmSensorMonitor({farmUuid}) {
  const categories = [
    {label: '토양습도', value: 'soil_moisture'},
    {label: '기온', value: 'air_temp'},
    {label: '습도', value: 'humidity'},
    {label: '조도', value: 'ldr'},
    {label: '움직임감지', value: 'motion'}
  ]

  return (
    <FarmMonitor 
      farmUuid={farmUuid}
      categories={categories}
      categoryGroupName={"sensorDataName"}
      defaultCategoryValue={"soil_moisture"}
      ControllerMonitor={ControllerSensorMonitor}
    />
  );
}

function FarmActuatorMonitor({farmUuid}) {
  const categories = [
    {label: '에어컨시스템', value: 'cooler_led_power'},
    {label: '야간조명시스템', value: 'night_light_power'},
    {label: '접근경고시스템', value: 'motion_buzzer_power'},
    {label: '급수시스템', value: 'water_power'}
  ];

  return (
    <FarmMonitor 
      farmUuid={farmUuid}
      categories={categories}
      categoryGroupName={"actuatorDataName"}
      defaultCategoryValue={"cooler_led_power"}
      ControllerMonitor={ControllerActuatorMonitor}
    />
  );
}

function ControllerMonitor({datas}) {
  return (
    <ul>
      {
        datas?.map((x, i) =>
          <li key={i}>
            {x.value}
          </li>
        )
      }
    </ul>
  );
}

function ControllerActuatorMonitor({status, dataName = undefined}) {
  let list = status?.actuator_datas ?? [];
  if (dataName) {
    list = list.filter(x => x.name === dataName);
  }
  return (
    <ControllerMonitor datas={list} />
  );
}

function ControllerSensorMonitor({status, dataName = undefined}) {
  let list = status?.sensor_datas ?? [];
  if (dataName) {
    list = list.filter(x => x.name === dataName);
  }
  return (
    <ControllerMonitor datas={list} />
  );
}

function ControllerSensorMonitorV2({status, dataName}) {
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
  FarmActuatorMonitor,
  FarmSensorMonitor,
  FarmSensorMonitorV2
};