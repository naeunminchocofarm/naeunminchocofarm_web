import React from 'react'
import CurrentHumidity from './CurrentHumidity';
import { HumidityOptionChart } from './HumidityChart';

const HomeHumidity = ({currentHumidity}) => {
  const FarmBasicContNow = "co2Set text-4xl text-center font-black";
  const FarmBasicContUnit = `text-sm`;
  return (
    <>
      <div className={FarmBasicContNow}>
        <CurrentHumidity currentHumidity={currentHumidity}/>
        <span className={FarmBasicContUnit}>%</span>
      </div>
      <div className="w-2/5 ">
        <div className="w-full ">
          <HumidityOptionChart />
        </div>
      </div>
    </>
  )
}

export default HomeHumidity