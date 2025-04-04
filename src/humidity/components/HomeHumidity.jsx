import React from 'react'
import CurrentHumidity from './CurrentHumidity';
import HumidityChart from './HumidityChart';

const HomeHumidity = ({currentHumidity}) => {
  const FarmBasicContNow = "co2Set text-4xl text-center font-black";
  return (
    <>
      <p className={FarmBasicContNow}>
        <CurrentHumidity currentHumidity={currentHumidity}/>
      </p>
      <div>
        <div>
          <HumidityChart />
        </div>
      </div>
    </>
  )
}

export default HomeHumidity