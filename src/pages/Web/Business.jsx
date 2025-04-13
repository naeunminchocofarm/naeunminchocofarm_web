import React from 'react'

const Business = () => {
  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">비즈니스</h1>
      
      {/* 이미지 섹션 */}
      <div className="mb-6">
        <img src="your-image-url-here.jpg" alt="비즈니스 이미지" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <p className="text-lg text-gray-700">
        스마트팜 비즈니스는 농업의 효율성을 개선하고, 지속 가능한 환경을 만들기 위해 다양한 기술 기반의
        솔루션을 제공합니다. 주요 서비스로는 농업 자동화 시스템 구축, IoT 센서 및 장비 공급, 데이터 분석
        서비스 등이 있습니다.
      </p>
      <h2 className="text-2xl font-semibold mt-6">주요 서비스</h2>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>스마트팜 구축 및 자동화 시스템</li>
        <li>스마트 센서 및 모니터링 시스템</li>
        <li>데이터 분석 및 예측 서비스</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6">비즈니스 모델</h2>
      <p className="text-lg text-gray-700">
        우리의 비즈니스 모델은 농업 생산성을 극대화하는 솔루션을 제공하며, 스마트팜 구축 후에도 지속적으로
        유지보수 및 업그레이드를 지원합니다.
      </p>
    </div>
    </>
  )
}

export default Business