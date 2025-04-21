import React from 'react';
import subVisual from "../../assets/images/layouts/s-visual01.png";
import companyImg from "../../assets/images/contents/company.png";

const Company = () => {
  return (
    <>
      <div className="w-full">
        {/* Sub Visual */}
        <div
          className="w-full h-60 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${subVisual})` }}
        >
          <h1 className="text-3xl font-bold text-white">COMPANY</h1>
        </div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 py-4 px-6 max-w-6xl mx-auto">
          HOME &gt; COMPANY &gt; 나은민초코팜소개
        </div>

        {/* Main Content */}
        <div className="min-h-[calc(100vh-432px)] max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start gap-8">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img src={companyImg} alt="회사 이미지" className="w-full rounded-lg shadow" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <p className="text-green-600 font-semibold text-sm mb-2">Growing Smarter, Powered by Data</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              스마트 농업의 미래, 데이터로 식물을 키우다!
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
              IoT 기기와 빅데이터 기술을 활용해 식물의 성장 데이터를 실시간으로 수집하고 분석합니다.
              온도, 습도, 조도, 이산화탄소, 토양 상태 등을 지속적으로 모니터링하여 각 식물에 최적화된 환경을
              자동으로 제공하고, 빅데이터 분석을 통해 예측 모델을 만들어 농업 생산성을 극대화합니다.
              이를 통해 농업 종사자들은 <strong className="text-green-700 font-semibold">실시간으로 상황을 점검</strong>하고
              <strong className="text-green-700 font-semibold">효율적인 농업 관리</strong>가 가능하며,
              자동화된 시스템은 자원 낭비를 줄이고 지속 가능한 농업 환경을 조성하기 위한 관리 프로그램을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
