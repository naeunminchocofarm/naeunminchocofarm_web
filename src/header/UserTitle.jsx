import React from "react";
import { BsBellFill, BsChevronRight, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CurrentDate from "../common_components/Dayjs";

const UserTitle = ({ pageTitle }) => {
  return (
    <>
      <div className="title-area mb-4">
        <div className="lg:flex lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mt-1 sm:mt-0 sm:space-x-6">
              <div className="mt-2 mb-2 flex items-center text-sm text-gray-500">
                HOME <BsChevronRight /> {pageTitle}
              </div>
              <h2 className="text-2xl/7 font-black text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {pageTitle}
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
