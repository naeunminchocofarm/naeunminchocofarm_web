import React from 'react'
import Sunshine from '../components/Sunshine'
import SunshineChart from '../components/SunshineChart'
import Card from '../../common_components/Card'
import Awning from '../components/Awning'

const SunshinePage = () => {
  return (
    <>
      <div className="content-area flex flex-row gap-4">
        <div className="temp-area w-2/3">
          <Card>
            <div>
              <p>
                현재조도 <Sunshine />
              </p>
              <p>
                일조량이 <span>{Sunshine < 400 ? "낮음" : "적정"}</span> 상태입니다.
                {Sunshine < 400 && (
                  <> <span>자동 시스템</span>이 작동중입니다.</>
                )}
              </p>
            </div>
            <SunshineChart />
          </Card>
        </div>
        <div className="setting-area w-1/3">
          <Card>
            <div className="flex flex-row justify-between light-area">
              <p>어닝</p>
                <Awning />
            </div>
          </Card>
          <Card>
            <div className="flex flex-row temp-value-area">
              <p>조도값 설정</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default SunshinePage