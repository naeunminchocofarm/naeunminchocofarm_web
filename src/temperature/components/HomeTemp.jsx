import React from "react";
import RecentTemp from "./RecentTemp";
import { TempChart } from "./TempChart";

const HomeTemp = ({ temperature, nowTemp, tempData, optionsHide }) => {
  const FarmBasicContNow = `co2Set text-4xl text-center font-black`;
  const FarmBasicContUnit = `text-sm`;
  return (
    <>
      <div className={FarmBasicContNow}>
        <RecentTemp nowTemp={nowTemp} />{" "}
        <span className={FarmBasicContUnit}>&#8451;</span>
      </div>
      <div className="w-2/5 ">
        <div className="w-full ">
          <TempChart
            temperature={temperature}
            data={tempData}
            options={optionsHide}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTemp;
