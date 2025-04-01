import React from "react";
import { BsBellFill, BsChevronRight, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CurrentDate from "../common_components/Dayjs";

const UserTitle = () => {
  return (
    <>
      <div className="title-area">
        <div className="lg:flex lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mt-1 sm:mt-0 sm:space-x-6">
              <div className="mt-2 mb-2 flex items-center text-sm text-gray-500">
                HOME <BsChevronRight /> 1뎁스메뉴 <BsChevronRight /> 2뎁스메뉴
                {/* 각각의 변수처리 DEPT가 있을때마다 변경됨 1DEPTS는 작물1 작물2임 */}
              </div>
              <h2 className="text-2xl/7 font-black text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                HOME
              </h2>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                현재시각 : <CurrentDate />
              </div>
            </div>
          </div>
          <div className="flex lg:mt-0 lg:ml-4">
            <span className="sm:block">
              <button type="button" className="p-2 text-lg">
                <BsBellFill />
              </button>
            </span>
            <Link to="/mypage" className="p-2 text-lg inlinkblock">
              <BsPersonFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTitle;
