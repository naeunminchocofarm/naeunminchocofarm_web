import React from "react";

const WebMain = () => {
  return (
    <div className="w-full">
      {/* SECTION 1 - Hero */}
      <section className="bg-green-100 py-16 relative">
        <img
          src="/assets/image/main/visual-fammer.png"
          alt="스마트팜 비주얼"
          className="absolute right-0 top-0 h-full object-cover opacity-20 md:opacity-100 md:static md:object-contain md:max-w-md"
        />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4 leading-tight">
              스마트팜으로<br />
              미래 농업을 만나다
            </h2>
            <p className="text-gray-700 mb-6">
              전자구매부터 전자동 제어까지,<br />
              농업 혁신을 위한 원스톱 솔루션!
            </p>
            <div className="space-x-3">
              <a href="/web/aboutFarms">
                <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700">
                  서비스 소개
                </button>
              </a>
              <a href="/web/serviceApply">
                <button className="bg-white text-green-600 border border-green-500 px-6 py-2 rounded-full shadow hover:bg-green-50">
                  스마트팜 신청
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - 스마트팜 소개 */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-8">스마트팜이란?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <img
                src="/assets/image/main/ico-m-sec2-1.png"
                alt="아이콘1"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">정보통신기술(ICT) 기반의 농업 시스템</h4>
              <p className="text-sm text-gray-600">농업의 생산성을 극대화하고 자원을 효율적으로 관리</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <img
                src="/assets/image/main/ico-m-sec2-2.png"
                alt="아이콘2"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">자동화된 농업 관리</h4>
              <p className="text-sm text-gray-600">환경 모니터링, 자동 관개, 병해충 감지, 실시간 제어</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <img
                src="/assets/image/main/ico-m-sec2-3.png"
                alt="아이콘3"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="font-bold mb-2">농업의 디지털 전환</h4>
              <p className="text-sm text-gray-600">노동력 절감, 생산성 향상, 자원 낭비 최소화</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - 사업 소개 */}
      <section id="business" className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            스마트 농업의 미래, 데이터로 식물을 키우다!
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            IoT 기기와 빅데이터 기술을 활용해 식물의 성장 데이터를 실시간으로 수집하고 분석합니다. 각 식물에 최적화된 환경을 자동으로 제공하고,
            예측 모델을 통해 농업 생산성을 높이며 지속 가능한 농업 환경을 만들어갑니다.
          </p>
        </div>
      </section>

      {/* SECTION 4 - 신청 배너 */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-green-800 mb-6 text-center">지금 바로 스마트팜 신청하기</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/web/serviceApply" className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-bold text-green-800 mb-2">스마트팜 설치 신청</h4>
              <p className="text-gray-700 text-sm">온실, 자동화 설비 등 현장 맞춤형 설치 신청</p>
            </a>
            <a href="/web/serviceApply" className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-bold text-green-800 mb-2">도입 컨설팅 신청</h4>
              <p className="text-gray-700 text-sm">스마트팜 시스템 구축을 위한 전문가 상담</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebMain;