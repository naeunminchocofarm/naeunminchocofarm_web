import React from "react";
import RecentTemp from "./RecentTemp";
import { TempChart } from "./TempChart";

const HomeTemp = ({ tempData, optionsHide }) => {
  const FarmBasicContNow = `co2Set text-4xl text-center font-black`;

  return (
    <>
      <p className={FarmBasicContNow}>
        <RecentTemp />
      </p>
      <div className="w-2/5 ">
        <div className="w-full ">
          <TempChart data={tempData} options={optionsHide} />
        </div>
      </div>
    </>
  );
};

export default HomeTemp;
