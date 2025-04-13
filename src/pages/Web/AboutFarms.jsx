import React from 'react'

const AboutFarms = () => {
  return (
    <>
      <section className="hero-section bg-green-600 text-white p-10">
        <h1 className="text-4xl font-semibold">스마트팜 기술</h1>
        <p className="mt-4 text-lg">최첨단 기술로 스마트한 농업을 만들어가고 있습니다.</p>
      </section>
      
      <section className="key-features p-10">
        <h2 className="text-3xl font-semibold">핵심 기능</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>자동화된 관리</h3>
            <p>스마트 센서와 제어 시스템을 통해 농업을 자동화합니다.</p>
          </div>
          <div className="feature">
            <h3>실시간 모니터링</h3>
            <p>각 구역의 상태를 실시간으로 모니터링하고 분석합니다.</p>
          </div>
          <div className="feature">
            <h3>데이터 기반 최적화</h3>
            <p>데이터 분석을 통해 농업 생산성을 최적화합니다.</p>
          </div>
        </div>
      </section>
      
      <section className="technology p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold">스마트팜 기술</h2>
        <div className="technology-details">
          <img src="smart-farm-tech.jpg" alt="Smart Farm Technology" className="w-full h-64 object-cover" />
          <p className="mt-4 text-lg">최첨단 IoT와 AI 기술을 활용하여 농업을 혁신합니다.</p>
        </div>
      </section>
    </>
  )
}

export default AboutFarms