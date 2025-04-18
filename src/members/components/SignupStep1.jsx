import React from "react";
import { Link } from "react-router-dom";

const SignupStep1 = ({ memberData, setMemberData, nextStep, buttonStyle }) => {
  const agreeChange = (e) => {
    setMemberData({
      ...memberData,
      privacyPolicy: e.target.checked,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">이용 약관에 동의해주세요.</h2>
      <div className="h-40 border p-4 overflow-y-scroll bg-gray-50 rounded">
      개인정보처리방침
      최종 업데이트: 2025년 4월 13일

      1. 개요
      본 개인정보처리방침은 귀하가 서비스를 이용할 때 당사가 귀하의 정보를 수집, 사용 및 공개하는 방식과 귀하의 개인정보 보호 권리 및 관련 법률에 대해 설명합니다.

      당사는 귀하의 개인정보를 서비스 제공 및 개선을 위해 사용합니다. 서비스를 이용함으로써 귀하는 본 개인정보처리방침에 따라 정보 수집 및 사용에 동의하게 됩니다.

      2. 정의
      계정: 귀하가 서비스를 이용하기 위해 생성한 고유 계정
      기기: 컴퓨터, 휴대폰, 태블릿 등 서비스 이용이 가능한 장치
      개인정보: 식별되었거나 식별 가능한 개인과 관련된 모든 정보
      쿠키: 웹사이트 이용 기록 등을 저장하는 작은 파일
      서비스 제공자: 회사를 대신해 서비스를 제공하는 제3자
      3. 수집하는 정보
      서비스 이용 시 다음과 같은 정보를 수집할 수 있습니다:

      이메일 주소, 이름, 전화번호
      주소, 우편번호, 도시
      서비스 사용 데이터 (IP, 브라우저 정보, 방문 시간 등)
      4. 정보 사용 목적
      서비스 제공 및 유지
      회원 계정 관리
      고객지원 및 문의 응대
      보안 및 사기 방지
      개인 맞춤형 서비스 제공
      5. 쿠키 및 추적 기술
      당사는 쿠키와 유사한 기술을 사용하여 귀하의 서비스 사용 활동을 추적하고 정보를 저장합니다. 쿠키 수락 여부는 브라우저 설정을 통해 조정할 수 있습니다.

      6. 제3자 공유
      당사는 서비스 제공자와 일부 개인정보를 공유할 수 있습니다. 단, 이는 서비스 제공 및 분석 목적에 한정됩니다.

      7. 연락처
      본 개인정보처리방침에 대해 질문이 있으시면 이메일(support@naeunminchocofarm.com)로 문의해 주세요.
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="agree"
          checked={memberData.privacyPolicy}
          onChange={agreeChange}
        />
        <label htmlFor="agree" className="text-sm">이용약관에 동의합니다. <Link to="/web/privacy" className="your-style-class"> [개인정보처리방침] </Link></label>
      </div>
      <div className="flex justify-end">
        <button onClick={()=>{
          console.log(memberData.privacyPolicy);
          nextStep()}} className={buttonStyle}>
          다음
        </button>
      </div>
    </div>
  );
};

export default SignupStep1;
