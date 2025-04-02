import React from "react";

const DetailTemp = ({ tempData, optionsShow }) => {

  return (
    <>
      <div className="w-2/5 ">
        <div className="w-full ">
          <TempChart data={tempData} options={optionsShow} />;
        </div>
      </div>
    </>
  );
};

export default DetailTemp;
