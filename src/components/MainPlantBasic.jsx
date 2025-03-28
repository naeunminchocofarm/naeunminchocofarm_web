import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const MainPlantBasic = () => {
    const [day, setDay] = useState(3);
    // 임시로 3일차차
    //const [plantStatus,setPlantStatus] = useState();
    
    function plantStatus() {
        if (day >= 0 & day < 3) {
             "발육기"     
        }else if(day>=3 & day<15){
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                          성장기
                        </span>
        }else if(day>=15 & day<30){
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-green-600/20 ring-inset">
            배아기
          </span>
        }else{
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-600/20 ring-inset">
                          죽기
                        </span>
        }
    }
    return(
        <>
            <div className='plantBasicInfo'>
              <div className="plantInfo">
                <div className="profile flex">
                  <div className="profileCont flex flex-col justify-between">
                    <div className="plantob">
                      <h3 className='pb-2 text-4xl font-black'>상추</h3>
                      <p>
                      {plantStatus()}
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                      +{day}일차
                    </span>
                      </p>
                    </div>

                    <p className='flex text-xs font-mideum text-slate-400'><FaLocationDot clasdName='mr-1'/>울산광역시 남구 삼산동nh빌딩</p>
                  </div>
                </div>
              </div>
              <div className="plantOtherInfo">

              </div>
            </div>
        </>
    )
}
export default MainPlantBasic