import React, { useEffect, useState } from "react";
import RecentTemp from "./RecentTemp";
import { TempChart } from "./TempChart";

const HomeTemp = ({ tempData, options2 }) => {
  const FarmBasicContNow = `co2Set text-4xl text-center font-black`;
  const FarmBasicContLine = `text-xs font-light text-slate-400`;

  return (
    <>
      <p className={FarmBasicContNow}>
        <RecentTemp />
      </p>
      <div className="w-2/5 ">
        <div className="w-full ">
          <TempChart data={tempData} options={options2} />
        </div>
      </div>
    </>
  );
};

export default HomeTemp;
