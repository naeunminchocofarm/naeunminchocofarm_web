import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">개인정보처리방침</h1>
      <p className="text-sm text-gray-500 mb-8">최종 업데이트: 2025년 4월 13일</p>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. 개요</h2>
        <p>
          본 개인정보처리방침은 귀하가 서비스를 이용할 때 당사가 귀하의 정보를
          수집, 사용 및 공개하는 방식과 귀하의 개인정보 보호 권리 및 관련
          법률에 대해 설명합니다.
        </p>
        <p>
          당사는 귀하의 개인정보를 서비스 제공 및 개선을 위해 사용합니다.
          서비스를 이용함으로써 귀하는 본 개인정보처리방침에 따라 정보 수집 및
          사용에 동의하게 됩니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. 정의</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>계정:</strong> 귀하가 서비스를 이용하기 위해 생성한 고유 계정
          </li>
          <li>
            <strong>기기:</strong> 컴퓨터, 휴대폰, 태블릿 등 서비스 이용이 가능한 장치
          </li>
          <li>
            <strong>개인정보:</strong> 식별되었거나 식별 가능한 개인과 관련된 모든 정보
          </li>
          <li>
            <strong>쿠키:</strong> 웹사이트 이용 기록 등을 저장하는 작은 파일
          </li>
          <li>
            <strong>서비스 제공자:</strong> 회사를 대신해 서비스를 제공하는 제3자
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. 수집하는 정보</h2>
        <p>서비스 이용 시 다음과 같은 정보를 수집할 수 있습니다:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>이메일 주소, 이름, 전화번호</li>
          <li>주소, 우편번호, 도시</li>
          <li>서비스 사용 데이터 (IP, 브라우저 정보, 방문 시간 등)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. 정보 사용 목적</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>서비스 제공 및 유지</li>
          <li>회원 계정 관리</li>
          <li>고객지원 및 문의 응대</li>
          <li>보안 및 사기 방지</li>
          <li>개인 맞춤형 서비스 제공</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. 쿠키 및 추적 기술</h2>
        <p>
          당사는 쿠키와 유사한 기술을 사용하여 귀하의 서비스 사용 활동을 추적하고
          정보를 저장합니다. 쿠키 수락 여부는 브라우저 설정을 통해 조정할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">6. 제3자 공유</h2>
        <p>
          당사는 서비스 제공자와 일부 개인정보를 공유할 수 있습니다. 단, 이는
          서비스 제공 및 분석 목적에 한정됩니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">7. 연락처</h2>
        <p>
          본 개인정보처리방침에 대해 질문이 있으시면 이메일(
          <a href="mailto:support@naeunminchocofarm.com" className="text-blue-600 underline">
            support@naeunminchocofarm.com
          </a>
          )로 문의해 주세요.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
