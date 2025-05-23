import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/contents/img-login.png";
import { login } from "../../redux/store";

const Login = () => {
  const nav = useNavigate();

  const [loginData, setLoginData] = useState({
    loginId: "",
    password: "",
  });

  const changeLoginInfo = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  //로그인 요청 함수
  const loginCheck = () => {
    login(loginData)
    .then(loginInfo => {
      nav("/web/home");
    })
    .catch(err => {
      if (err.status === 401) {
        alert("로그인 실패");
      }

      console.error(err);
    });
  };

  const loginContianer =  "w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-gradient-to-r from-[#faf8f2] via-[#f4fef4] to-[#e6f6e6]";
  const loginWhiteBox =   "flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl max-w-4xl w-full overflow-hidden";
  const loginInput = "w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
  return (
    <>
      <div className={loginContianer}>
        <div className={loginWhiteBox}>
          <div className="w-full md:w-1/2 p-10">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              스마트한 농장의 시작,
              <br />
              나은민초코팜
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              로그인하고 나만의 스마트팜을 관리해보세요.
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-700">아이디</label>
                <input
                  type="text"
                  name="loginId"
                  value={loginData.loginId}
                  className={loginInput}
                  placeholder="아이디를 입력하세요"
                  onChange={changeLoginInfo}
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="비밀번호를 입력하세요"
                  onChange={changeLoginInfo}
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
                  type="button"
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  onClick={loginCheck}
                >
                  로그인
                </button>
                <Link
                  to="/web/signup"
                  className="w-full text-center border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-50 transition"
                >
                  회원가입
                </Link>
              </div>
            </form>
          </div>

          <div className="hidden md:block w-1/2 bg-cover bg-center" >
            <img src={loginImg} alt="스마트팜로그인" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
