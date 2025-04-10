import React from "react";
import WebHeader from "../../header/WebHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-80vh flex items-center justify-center bg-gradient-to-r from-[#faf8f2] via-[#f4fef4] to-[#e6f6e6]">
        <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-4xl w-full overflow-hidden">
          {/* 왼쪽: 로그인 폼 */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              스마트한 농장의 시작,
              <br />
              나은민초코팜
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              로그인하고 나만의 스마트팜을 관리해보세요.
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">아이디</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="아이디를 입력하세요"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">비밀번호</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-green-500" />
                  <span>로그인 상태 유지</span>
                </label>
                <a href="#" className="text-green-500 hover:underline">
                  비밀번호 찾기
                </a>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  로그인
                </button>
                <Link
                  to="/signup"
                  className="w-full text-center border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-50 transition"
                >
                  회원가입
                </Link>
              </div>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              로그인 시{" "}
              <a href="#" className="underline text-green-500">
                이용약관
              </a>{" "}
              및{" "}
              <a href="#" className="underline text-green-500">
                개인정보 처리방침
              </a>
              에 동의하는 것으로 간주됩니다.
            </p>
          </div>

          {/* 오른쪽: 배경 이미지 */}
          <div className="hidden md:block w-1/2 bg-[url('/login-graphic.png')] bg-cover bg-center" />
        </div>
      </div>
    </>
  );
};

export default Login;
