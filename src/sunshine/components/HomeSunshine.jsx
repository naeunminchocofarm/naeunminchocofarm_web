import React from "react";
import Sunshine from "./Sunshine";
import SunshineChart from "./SunshineChart";

const HomeSunshine = ({ currentSunshine }) => {
  const FarmBasicContNow = "co2Set text-4xl text-center font-black";

  return (
    <>
      <p className={FarmBasicContNow}>
        <Sunshine currentSunshine={currentSunshine}/>
      </p>
      <div>
        <div>
          <SunshineChart />
        </div>
      </div>
    </>
  );
};

export default HomeSunshine;
