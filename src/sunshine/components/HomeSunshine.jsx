import React from "react";
import Sunshine from "./Sunshine";
import { SunshineNoOptionChart } from "./SunshineChart";

const HomeSunshine = ({ currentSunshine }) => {
  const FarmBasicContNow = "co2Set text-4xl text-center font-black";
  const FarmBasicContUnit = `text-sm`;

  return (
    <>
      <div className={FarmBasicContNow}>
        <Sunshine currentSunshine={currentSunshine} />
        <span className={FarmBasicContUnit}>단위</span>
      </div>
      <div className="w-2/5 ">
        <div className="w-full ">
          <SunshineNoOptionChart />
        </div>
      </div>
    </>
  );
};

export default HomeSunshine;
