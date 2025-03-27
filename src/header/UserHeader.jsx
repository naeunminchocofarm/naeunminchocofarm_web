import React from "react";
import { BsChevronDown, BsClipboardData, BsFlower3, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserHeader = () => {
  function toggleMenu() {
    document.getElementById("dropdown-nav-list").classList.toggle("hidden");    
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('#dropdown-nav-list')) {
    var myDropdown = document.getElementById("dropdown-nav-list");
      if (myDropdown.classList.contains('hidden')) {
        myDropdown.classList.remove('hidden');
      }
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <aside
          id="sidebar-multi-level-sidebar"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-white">
            <ul className="space-y-2 font-semibold">
              <li className="font-extrabold">
                <Link to="/home">나은민초코팜 logo</Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <BsClipboardData /> My Farm
                </Link>
              </li>
              {/* 작물추가용 메뉴 */}
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300 "
                  id="dropdown-nav"
                  onClick={(e)=>{toggleMenu(e);}}
                >
                  <BsFlower3 />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    작물1
                  </span>
                  <BsChevronDown />
                </button>
                <ul
                  id="dropdown-nav-list"
                  className="py-2 space-y-2 transition duration-75 "
                >
                  {/* 나중에 map 변수 돌려야하는 영역 지금은 몇개만 */}
                  <li className="nav-sub">
                    <Link
                      to="/temp"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group"
                    >
                      온도
                    </Link>
                  </li>
                  <li className="nav-sub">
                    <Link
                      to="/hume"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group"
                    >
                      습도
                    </Link>
                  </li>
                  <li className="nav-sub">
                    <Link
                      to="/examples/chart"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group"
                    >
                      조도량
                    </Link>
                  </li>
                  {/* 나중에 map 변수 돌려야하는 영역 지금은 몇개만 */}
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300 "
                  id="dropdown-nav-sub" data-dropdown-toggle="dropdown"
                >
                  <BsFlower3 />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    신규작물추가
                  </span>
                  <BsPlusLg />
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  icon
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </header>
    </>
  );
};

export default UserHeader;
