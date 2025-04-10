import React from "react";
import WebHeader from "../../header/WebHeader";

const WebMain = () => {
  return (
    <>
      <div className="text-gray-800 w-full">
        
        {/* Hero Section */}
        <section className="bg-green-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
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
              <button className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700">
                서비스 소개
              </button>
              <button className="bg-white text-green-600 border border-green-500 px-6 py-2 rounded-full shadow hover:bg-green-50">
                스마트팜 신청
              </button>
            </div>
          </div>
          <img
            src="/smartfarm-image.png" // 실제 이미지 경로로 교체하세요
            alt="스마트팜 설명"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* 주요 기능 안내 */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">스마트팜이란?</h3>
          <p className="text-gray-600 mb-6">
            IT 기술을 활용하여 자동화, 원격 관리, 데이터 분석을 통해 농업의 생산성을 극대화하는 시스템입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-green-50 rounded-xl shadow">
              <h4 className="font-bold text-green-700 mb-2">자동 제어</h4>
              <p className="text-sm">온도, 습도, 조도 등을 실시간으로 제어</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow">
              <h4 className="font-bold text-green-700 mb-2">실시간 모니터링</h4>
              <p className="text-sm">센서를 통한 상태 확인 및 보고</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow">
              <h4 className="font-bold text-green-700 mb-2">데이터 기반 분석</h4>
              <p className="text-sm">데이터 축적을 통한 생산성 향상</p>
            </div>
          </div>
        </div>
      </section>

      {/* 사업소개 섹션 */}
      <section id="business" className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">사업소개</h3>
          <p className="text-gray-700">
            전국 각지에 스마트팜 구축 및 관리 서비스를 제공하고 있습니다.
          </p>
        </div>
      </section>

      {/* 스마트팜 신청 배너 */}
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-green-800 mb-6 text-center">지금 바로 스마트팜 신청하기</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-bold text-green-800 mb-2">스마트팜 설치 신청</h4>
              <p className="text-gray-700 text-sm">온실, 자동화 설비 등 현장 맞춤형 설치 신청</p>
            </div>
            <div className="bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-bold text-green-800 mb-2">도입 컨설팅 신청</h4>
              <p className="text-gray-700 text-sm">스마트팜 시스템 구축을 위한 전문가 상담</p>
            </div>
          </div>
        </div>
      </section>

        <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
          &copy; 나은민초코팜
        </footer>
      </div>
    </>
  );
};

export default WebMain;
