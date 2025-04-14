import React from "react";
import SignUpInput from "../../common_components/SignUpInput";

const SignupStep3 = ({
  memberData,
  setMemberData,
  prevStep,
  nextStep,
  buttonStyle,
  signupData,
}) => {
  const SignupInsert = () => {
    const { loginId, encryptedLoginPw, confirmPw, name, tell } = memberData;

    // 각 필드 유효성 검사
    if (!loginId.trim()) return alert("아이디를 입력해주세요.");
    if (
      encryptedLoginPw.length < 8 ||
      !/^[A-Za-z\d!@#$%^&*]+$/.test(encryptedLoginPw) ||
      !/[!@#$%^&*]/.test(encryptedLoginPw)
    )
      return alert(
        "비밀번호는 8자 이상이고 허용된 특수문자를 포함해야 합니다."
      );
    if (encryptedLoginPw !== confirmPw) return alert("비밀번호가 일치하지 않습니다.");
    if (!name.trim()) return alert("이름을 입력해주세요.");
    if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(tell))
      return alert("전화번호 형식이 올바르지 않습니다.");

    alert("회원가입이 완료되었습니다!");

    const newMemberData = {
      ...memberData,
      privacyPolicy: true,
    };
    signupData(newMemberData);
    nextStep();
  };

  const InputChange = (e) => {
    setMemberData((memberData) => ({
      ...memberData,
      [e.target.name]: e.target.value,
    }));
  };

  const devCheck = () => {
    console.log(memberData);
  };

  return (
    <div className="space-y-4">
      <SignUpInput
        label="아이디"
        name="loginId"
        type="text"
        value={memberData.loginId}
        onChange={InputChange}
        validate={(val) => val.trim() !== "" || "아이디를 입력해주세요"}
      />
      <SignUpInput
        label="비밀번호"
        name="encryptedLoginPw"
        type="password"
        value={memberData.encryptedLoginPw}
        onChange={InputChange}
        validate={(val) =>
          val.length >= 8 &&
          /^[A-Za-z\d!@#$%^&*]+$/.test(val) &&
          /[!@#$%^&*]/.test(val)
            ? ""
            : "8자 이상, 허용된 특수문자 포함해야 합니다."
        }
      />
      <SignUpInput
        label="비밀번호 확인"
        name="confirmPw"
        type="password"
        value={memberData.confirmPw}
        onChange={InputChange}
        validate={(val) =>
          val === memberData.password || "비밀번호가 일치하지 않습니다."
        }
      />
      <SignUpInput
        label="이름"
        name="name"
        type="text"
        value={memberData.name}
        onChange={InputChange}
        validate={(val) => val.trim() !== "" || "이름을 입력해주세요"}
      />
      <SignUpInput
        label="전화번호"
        name="tell"
        type="text"
        value={memberData.tell}
        onChange={InputChange}
        validate={(val) =>
          /^01[016789]-?\d{3,4}-?\d{4}$/.test(val) ||
          "전화번호 형식이 올바르지 않습니다"
        }
      />

      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className={buttonStyle}>
          이전
        </button>
        <button onClick={devCheck}>콘솔확인용</button>
        <button onClick={SignupInsert} className={buttonStyle}>
          회원가입 완료
        </button>
      </div>
    </div>
  );
};

export default SignupStep3;
