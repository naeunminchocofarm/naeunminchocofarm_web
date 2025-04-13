import React, { useState } from "react";
import SignUpInput from "../../common_components/SignUpInput";

const SignupStep2 = ({ buttonStyle, disabledButtonStyle, isVerified, setIsVerified, nextStep }) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [sentCode, setSentCode] = useState("");

  const sendVerificationCode = () => {
    setSentCode("0912");
    alert("인증번호가 이메일로 전송되었습니다.");
  };

  const verifyCode = () => {
    if (verificationCode === sentCode) {
      setIsVerified(true);
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">본인인증</h2>
      <SignUpInput
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button onClick={sendVerificationCode} className={buttonStyle}>
        인증번호 전송
      </button>
      {sentCode && (
        <div>
          <SignUpInput
            type="text"
            placeholder="인증번호 입력"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-4"
          />
          <button onClick={verifyCode} className={buttonStyle}>
            인증완료
          </button>
        </div>
      )}
      <div className="flex justify-end mt-2">
        <button
          onClick={nextStep}
          disabled={!isVerified}
          className={!isVerified ? disabledButtonStyle : buttonStyle}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SignupStep2;
