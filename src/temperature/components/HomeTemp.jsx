import React from "react";
import RecentTemp from "./RecentTemp";
import { TempNoOptionChart } from "./TempChart";

const HomeTemp = ({ nowTemp }) => {
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
          <TempNoOptionChart />
        </div>
      </div>
    </>
  );
};

export default HomeTemp;
