import React from "react";

const SignupStep1 = ({ userData, setUserData, nextStep, buttonStyle }) => {
  const agreeChange = (e) => {
    setUserData({
      ...userData,
      privacyPolicy: e.target.checked,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">이용 약관에 동의해주세요.</h2>
      <div className="h-40 border p-4 overflow-y-scroll bg-gray-50 rounded">여기에 이용 약관 내용...</div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="agree"
          checked={userData.privacyPolicy}
          onChange={agreeChange}
        />
        <label htmlFor="agree" className="text-sm">이용약관에 동의합니다.</label>
      </div>
      <div className="flex justify-end">
        <button onClick={nextStep} className={buttonStyle}>
          다음
        </button>
      </div>
    </div>
  );
};

export default SignupStep1;
