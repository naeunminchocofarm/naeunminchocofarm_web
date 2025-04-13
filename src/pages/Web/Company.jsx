import React from 'react';

const Company = () => {
  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">회사소개</h1>
      
      {/* 이미지 섹션 */}
      <div className="mb-6">
        <img src="your-image-url-here.jpg" alt="회사 이미지" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <p className="text-lg text-gray-700">
        스마트팜 회사는 최신 기술을 활용하여 농업의 혁신을 추구하는 기업입니다. 지속 가능한 농업 환경을 위해
        IoT, AI, Big Data를 기반으로 한 스마트팜 솔루션을 제공합니다.
      </p>
      <h2 className="text-2xl font-semibold mt-6">우리의 미션</h2>
      <p className="text-lg text-gray-700">
        우리의 미션은 농업의 효율성을 극대화하고, 환경을 보호하면서도 고품질의 농산물을 생산할 수 있도록
        스마트한 농업 시스템을 제공합니다.
      </p>
      <h2 className="text-2xl font-semibold mt-6">주요 기술</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>IoT 기반 스마트 센서</li>
        <li>AI 데이터 분석</li>
        <li>온실 자동화 시스템</li>
      </ul>
    </div>
    </>
  );
};

export default Company;
