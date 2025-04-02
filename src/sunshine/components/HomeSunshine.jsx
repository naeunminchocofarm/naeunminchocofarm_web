import React from 'react'
import CurrentSunshine from './CurrentSunshine';
import SunshineChart from './SunshineChart';

const HomeSunshine = ({sunshines, currentSunshine}) => {
  const FarmBasicContNow = `co2Set text-4xl text-center font-black`;
  return (
    <>
      <p className={FarmBasicContNow}>
        <currentSunshine currentSunshine={currentSunshine}/>
      </p>
      <div className="w-2/5 ">
        <div className="w-full ">
          <CurrentSunshine sunshines={sunshines} />
        </div>
      </div>
    </>
  )
}

export default HomeSunshine