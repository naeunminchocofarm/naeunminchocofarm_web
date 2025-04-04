import React from "react";
import Card from "../../common_components/Card";
import RecentTemp from "../components/RecentTemp";
import { TempOptionChart } from "../components/TempChart";

const Temperature = ({ nowTemp }) => {
  return (
    <>
      <div className="content-area flex flex-row gap-4">
        <div className="temp-area w-2/3">
          <Card>
            <div>
              <div>
                현재온도 <RecentTemp nowTemp={nowTemp}/>
              </div>
              <div>
                작물에게 온도가 <span>조금 고온</span> 이에요 온도가
                <span>1</span>도 더 증하면 자동으로 <span>온열전구</span>가
                켜져요
              </div>
            </div>
            <div>
                <TempOptionChart/>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Temperature;
