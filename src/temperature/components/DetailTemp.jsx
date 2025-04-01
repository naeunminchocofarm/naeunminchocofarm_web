import React from "react";

const DetailTemp = ({ tempData, options }) => {

  return (
    <>
      <div className="w-2/5 ">
        <div className="w-full ">
          <TempChart data={tempData} options={options} />;
        </div>
      </div>
    </>
  );
};

export default DetailTemp;
