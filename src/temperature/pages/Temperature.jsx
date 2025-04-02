import React from "react";
import Card from "../../common_components/Card";
import RecentTemp from "../components/RecentTemp";
import { TempChart } from "../components/TempChart";
import ToggleButton from "../../common_components/ToggleButton";

const Temperature = ({ tempData, optionsNo }) => {
  // //심은지 몇일째인지 받아오는 코드가 있어야함 > 얘는 나중에 new할때 불러옴
  return (
    <>
      <div className="content-area flex flex-row gap-4">
        <div className="temp-area w-2/3">
          <Card>
            <div>
              <p>
                현재온도 <RecentTemp />
              </p>
              <p>
                작물에게 온도가 <span>조금 고온</span> 이에요 온도가
                <span>1</span>도 더 증하면 자동으로 <span>온열전구</span>가
                켜져요
              </p>
            </div>
            <TempChart data={tempData} options={optionsNo} />
          </Card>
        </div>
        <div className="setting-area w-1/3">
          <Card>
            <div className="flex flex-row justify-between light-area">
              <p>온열전구</p>
              <ToggleButton />
            </div>
          </Card>
          <Card>
            <div className="flex flex-row temp-value-area">
              <p>온열전구 온도설정</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Temperature;
