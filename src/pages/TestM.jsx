import React from "react";
import TestC from "./TestC";

const TestM = () => {
  // function toggleMenu(menuId) {
  //   const menu = document.getElementById(menuId);
  //   const icon = document.getElementById(menuId + "Icon");

  //   // Toggle menu visibility
  //   menu.classList.toggle("hidden");

  //   // Rotate icon
  //   if (menu.classList.contains("hidden")) {
  //     icon.style.transform = "rotate(0deg)";
  //   } else {
  //     icon.style.transform = "rotate(180deg)";
  //   }
  // }
  return (
    <>
      <div class="h-screen w-full bg-[#eeeeee] dark:bg-[#1E2028] ">
        <div className="border-r shadow-xl">
          {/* 사이드 시작 > router와함께 */}
          <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                  <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        icon
                        <span class="ms-3">My Farm</span>
                      </a>
                  </li>
                  <li>
                      <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" >
                      icon
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">작물1</span>
                            icon
                      </button>
                      <ul id="dropdown-example" class=" py-2 space-y-2">
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">작물 기본 설정</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">온도</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">습도</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">일조량</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">이산화탄소량</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">토양정보</a>
                            </li>
                            <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">우리밭cctv</a>
                            </li>
                      </ul>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      icon
                        <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                      </a>
                  </li>
                </ul>
            </div>
          </aside>
          {/* 사이드 종료 */}
          <TestC/>
        </div>
      </div>
    </>
  );
};

export default TestM;
