import React from "react";
import { Link } from "react-router-dom";
import visualFarmer from '@/assets/images/main/visual-farmer.png';
import iconSec2_1 from '@/assets/images/main/ico-m-sec2-1.png';
import iconSec2_2 from '@/assets/images/main/ico-m-sec2-2.png';
import iconSec2_3 from '@/assets/images/main/ico-m-sec2-3.png';
import iconSec4_1 from '@/assets/images/main/ico-m-sec4-1.png';
import iconSec4_2 from '@/assets/images/main/ico-m-sec4-2.png';

// 공통 스타일 클래스 변수 정의
const sectionPadding = "py-16";
const sectionContainer = "max-w-7xl mx-auto px-6";
const boxStyle = "p-6 bg-white rounded-xl shadow text-center";
const applyCard = "bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition flex items-center justify-between";
const applyTitle = "text-lg font-bold text-green-800 mb-2";
const applyText = "text-gray-700 text-sm";
const applyImage = "w-30 h-auto ml-4";
const iconStyle = "w-50 h-50 mx-auto mb-3";
const titleStyle = "font-bold text-gray-800 mb-2";
const descStyle = "text-sm text-gray-600";
const buttonPrimary = "bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700";
const buttonOutline = "bg-white text-green-600 border border-green-500 px-6 py-2 rounded-full shadow hover:bg-green-50";


const WebMain = () => {
  return (
    <div className="w-full">
      <section className="w-full py-24 bg-green-100 overflow-hidden md:block w-2/3 h-full bg-no-repeat bg-cover" style={{
            backgroundImage: `url(${visualFarmer})`,
            backgroundPosition: 'right center',
          }}>
        {/* 본문 내용 */}
        <div className={`${sectionContainer} grid md:grid-cols-2 gap-8 items-center relative z-10`}>
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-4 leading-tight">
              스마트팜으로<br />
              미래 농업을 만나다
            </h3>
            <p className="text-gray-700 mb-6">
              전자구매부터 전자동 제어까지,<br />
              농업 혁신을 위한 원스톱 솔루션!
            </p>
            <div className="space-x-3">
              <Link to="/web/aboutFarms" className={buttonPrimary}>서비스 소개</Link>
              <Link to="/web/serviceApply" className={buttonOutline}>스마트팜 신청</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionPadding} id="about">
        <div className={`${sectionContainer} text-center`}>
          <h3 className="text-2xl font-bold text-green-700 mb-4">스마트팜이란?</h3>
          <p className="text-gray-600 mb-6">
            IT 기술을 활용하여 자동화, 원격 관리, 데이터 분석을 통해 농업의 생산성을 극대화하는 시스템입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className={boxStyle}>
              <img src={iconSec2_1} alt="icon1" className={iconStyle} />
              <h4 className={titleStyle}>ICT 기반 농업 시스템</h4>
              <p className={descStyle}>농업의 생산성을 극대화하고 자원을 효율적으로 관리</p>
            </div>
            <div className={boxStyle}>
              <img src={iconSec2_2} alt="icon2" className={iconStyle} />
              <h4 className={titleStyle}>자동화된 농업 관리</h4>
              <p className={descStyle}>환경 모니터링, 병해충 감지, 실시간 제어</p>
            </div>
            <div className={boxStyle}>
              <img src={iconSec2_3} alt="icon3" className={iconStyle} />
              <h4 className={titleStyle}>농업의 디지털 전환</h4>
              <p className={descStyle}>노동력 절감, 생산성 증가, 자원 낭비 최소화</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - 사업 소개 */}
      <section id="business" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            스마트 농업의 미래, 데이터로 식물을 키우다!
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            IoT 기기와 빅데이터 기술을 활용해 식물의 성장 데이터를 실시간으로 수집하고 분석합니다. <br/>각 식물에 최적화된 환경을 자동으로 제공하고,
            예측 모델을 통해 농업 생산성을 높이며 지속 가능한 농업 환경을 만들어갑니다.
          </p>
        </div>
      </section>

      <section className={sectionPadding} id="apply">
        <div className={sectionContainer}>
          <h3 className="text-xl font-bold text-green-800 mb-6 text-center">
            지금 바로 스마트팜 신청하기
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 스마트팜 설치 신청 */}
            <Link to="/web/serviceApply" className={applyCard}>
              <div>
                <h4 className={applyTitle}>스마트팜 설치 신청</h4>
                <p className={applyText}>온실, 자동화 설비 등 현장 맞춤형 설치 신청</p>
              </div>
              <img src={iconSec4_1} alt="설치 아이콘" className={applyImage} />
            </Link>

            {/* 도입 컨설팅 신청 */}
            <Link to href="/web/serviceApply" className={applyCard}>
              <div>
                <h4 className={applyTitle}>도입 컨설팅 신청</h4>
                <p className={applyText}>스마트팜 시스템 구축을 위한 전문가 상담</p>
              </div>
              <img src={iconSec4_2} alt="컨설팅 아이콘" className={applyImage} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WebMain;