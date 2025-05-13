import React from "react";
import { BsBellFill, BsChevronRight, BsPersonFill } from "react-icons/bs";
import CurrentDate from "../common_components/Dayjs";

const UserTitle = ({ pageTitle }) => {
  return (
    <div className="flex justify-between items-center mb-6 pb-2 border-b">

      <div>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          HOME <BsChevronRight className="mx-1" /> {pageTitle}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{pageTitle}</h3>
        <p className="text-sm text-gray-500 mt-1">
          총 운영 상태 및 데이터를 한눈에 확인하세요
        </p>
      </div>
      <div className="flex items-center space-x-3 text-sm text-gray-500">
        <span>마지막 갱신: <CurrentDate format="YYYY.MM.DD HH:mm" /></span>
      </div>
    </div>
  );
};

export default UserTitle;
