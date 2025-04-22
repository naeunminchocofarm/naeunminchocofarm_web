import React, { useState } from "react";
import SignUpInput from "../../common_components/SignUpInput";
import memberApi from "../apis/member_api";

const SignupStep2 = ({
  memberData,
  setMemberData,
  buttonStyle,
  disabledButtonStyle,
  isVerified,
  setIsVerified,
  nextStep,
}) => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [sentCode, setSentCode] = useState("");

  const sendVerificationCode = async () => {
    try {
      const res = await memberApi.checkEmail(email);
      if (res.data.duplicate) {
        alert("이미 사용 중인 이메일입니다. 다른 이메일을 입력해주세요.");
        return;
      }

      // 실제 서버에 인증 요청
      await memberApi.checkEmail(email); // <-- 이게 실제 요청!

      setSentCode("requested"); 
      alert("인증번호가 이메일로 전송되었습니다.");

    } catch (error) {
      if(error.response?.status === 409){
        alert("이미 사용종인 이메일입니다");

      }else{
        console.error("인증 요청 실패:", error);
      alert("이메일 인증 요청 중 오류가 발생했습니다.");
      }
    }
  };

  const addEmail = () => {
    setMemberData({
      ...memberData,
      email: email,
    });
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
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={isVerified}
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
          onClick={() => {
            addEmail();
            nextStep();
          }}
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
