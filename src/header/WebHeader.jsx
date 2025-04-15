import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BsMenuButton } from "react-icons/bs";
import { jwtDecode } from "jwt-decode";
import { logoutReducer } from "../redux/authSlice";
import { webMenu } from "../routes/MenuByLayout";

const WebHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const isLogin = !!token;
  var roleName = null;

  const logout = () => {
    dispatch(logoutReducer());
    nav("/web/home");
  };

  useEffect(() => {
    console.log("🔁 WebHeader 리렌더링");
    console.log("Redux 토큰 상태:", token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("디코딩 결과:", decoded);
        roleName = decoded.roleName;
      } catch (e) {
        console.error("JWT 디코드 실패:", e);
      }
    }
  }, [token]);

  const headerCss = "bg-white shadow-sm fixed top-0 left-0 right-0 z-50";

  return (
    <header className={headerCss}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-600">
          <NavLink to="/web">나은민초코팜</NavLink>
        </h1>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex space-x-6">
          {webMenu.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-semibold"
                  : "hover:text-green-600"
              }
            >
              {title}
            </NavLink>
          ))}
        </nav>

        {/* PC 로그인/회원가입 or 로그인 상태 */}
        <div className="hidden md:flex items-center space-x-3">
          {isLogin ? (
            <>
              {roleName === "FAMMER" && (
                <NavLink to="/user/home" className="text-sm text-green-600">
                  마이팜
                </NavLink>
              )}
              {roleName === "ADMIN" && (
                <NavLink to="/admin" className="text-sm text-green-600">
                  관리자페이지 바로가기
                </NavLink>
              )}
              <NavLink to="/mypage" className="text-sm text-green-600">
                마이페이지
              </NavLink>
              <button
                onClick={logout}
                className="text-sm text-red-500 hover:underline"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <NavLink to="/web/login">
                <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
                  로그인
                </button>
              </NavLink>
              <NavLink
                to="/web/signUp"
                className="text-gray-500 hover:text-green-600 text-sm"
              >
                회원가입
              </NavLink>
            </>
          )}
        </div>

        {/* 모바일 토글 */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <BsMenuButton />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {webMenu.map(({ path, title }) => (
            <NavLink
              key={path}
              to={path}
              className="block hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              {title}
            </NavLink>
          ))}

          {isLogin ? (
            <>
              {roleName === "FAMMER" && (
                <NavLink to="/user/home" onClick={() => setIsOpen(false)}>
                  마이팜
                </NavLink>
              )}
              {roleName === "ADMIN" && (
                <NavLink to="/admin" onClick={() => setIsOpen(false)}>
                  관리자페이지
                </NavLink>
              )}
              <NavLink to="/mypage" onClick={() => setIsOpen(false)}>
                마이페이지
              </NavLink>
              <button onClick={logout} className="text-red-500">
                로그아웃
              </button>
            </>
          ) : (
            <>
              <NavLink to="/web/login" onClick={() => setIsOpen(false)}>
                로그인
              </NavLink>
              <NavLink to="/web/signUp" onClick={() => setIsOpen(false)}>
                회원가입
              </NavLink>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default WebHeader;
