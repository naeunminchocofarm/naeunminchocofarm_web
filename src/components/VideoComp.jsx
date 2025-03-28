import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoComp = () => {
  const [isMovig, setIsMoving] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="compTitle">
          <div className="FarmBasicTop mb-3 flex justify-between items-center ">
            <p className="flex text-sm font-extrabold text-slate-400">
              실시간 CCTV
            </p>
            <Link to="" className="text-xs font-light text-slate-400">
              자세히 보기 +
            </Link>
          </div>
        </div>
        <div className="compCont">
          {/* 생각해보니.... 카메라가 1개니깐 움직임 감지되면 상태변경 */}
          <div className="compCcty compCctyOne">
            <p className="flex justify-between compCctyTitle pb-4">
              1번 CCTV
              {isMovig ? (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset">
                  움직임감지
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-600/20 ring-inset">
                  움직임 없음
                </span>
              )}
            </p>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default VideoComp;
