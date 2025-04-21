import React, { useEffect, useState } from "react";
import SignupFlow from "../components/SignupFlow";
import SignupStep1 from "../components/SignupStep1";
import SignupStep2 from "../components/SignupStep2";
import SignupStep3 from "../components/SignupStep3";
import { useNavigate } from "react-router-dom";
import memberApi from "../apis/member_api";

const Signup = () => {
  const nav = useNavigate();
  const steps = ["약관동의", "본인인증", "회원정보입력", "가입완료"];
  const [currentStep, setCurrentStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [memberData, setMemberData] = useState({
    loginId: "",
    password: "",
    name: "",
    email: "",
    tell: "",
    privacyPolicy: false,
    confirmPw: "",
  });

  const signupData = async (memberData) => {
    try {
      const response = await memberApi.signUp(memberData);
      console.log("회원가입 성공:", response);
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  useEffect(() => {
    if (memberData.privacyPolicy) {
      signupData();
    }
  }, []);

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  const nextStep = () => {
    if (currentStep === 0 && !memberData.privacyPolicy) {
      alert("약관에 동의해야 다음 단계로 넘어갈 수 있습니다.");
      return;
    }
    if (currentStep === 1 && !isVerified) {
      alert("이메일 인증을 완료해야 다음 단계로 넘어갈 수 있습니다.");
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const loginContianer =
  "w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-gradient-to-r from-[#faf8f2] via-[#f4fef4] to-[#e6f6e6]";
  const buttonStyle =
    "bg-green-500 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer transition";
  const disabledButtonStyle =
    "bg-gray-300 text-gray-800 px-6 py-2 rounded-lg cursor-not-allowed opacity-50 transition";
  return (
    <div className={loginContianer}>
      <div className="flex flex-col bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full overflow-hidden">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          나은민초코팜 회원가입
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          회원가입을 통해 나만의 스마트팜을 관리하세요.
        </p>

        <SignupFlow steps={steps} currentStep={currentStep} />

        {/* 약관동의 */}
        {currentStep === 0 && (
          <SignupStep1
            memberData={memberData}
            setMemberData={setMemberData}
            nextStep={nextStep}
            buttonStyle={buttonStyle}
          />
        )}

        {/* 본인인증 */}
        {currentStep === 1 && (
          <SignupStep2
            memberData={memberData}
            setMemberData={setMemberData}
            nextStep={nextStep}
            buttonStyle={buttonStyle}
            disabledButtonStyle={disabledButtonStyle}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        )}

        {/* 회원정보입력 */}
        {currentStep === 2 && (
          <SignupStep3
            memberData={memberData}
            setMemberData={setMemberData}
            signupData={signupData}
            prevStep={prevStep}
            nextStep={nextStep}
            buttonStyle={buttonStyle}
            disabledButtonStyle={disabledButtonStyle}
          />
        )}

        {/* 가입완료 */}
        {currentStep === 3 && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">
              {memberData.loginId}님 가입이 완료되었습니다
            </h2>
            <p className="text-sm text-gray-600">
              로그인 후 서비스를 이용해주세요.
            </p>
            <button
              className={buttonStyle}
              onClick={() => {
                nav("/web/login");
              }}
            >
              로그인 하러가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
