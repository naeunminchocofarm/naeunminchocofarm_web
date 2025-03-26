import React from "react";

const TestC = () => {
  return (
    <>
      {/* title은 페이지마다 들어가서 변수처리할거임 */}
      <div className="title">
        <p>내팜</p>
        <p>심볼/유저</p>
      </div>

      <div className="">
        <div class="p-4 sm:ml-64">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestC;
