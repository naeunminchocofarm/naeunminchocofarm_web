import React from 'react'
import CurrentHumidity from '../components/CurrentHumidity'
import { HumidityChart } from '../components/HumidityChart'
import Humidifier from '../components/Humidifier'
import Card from '../../common_components/Card'

const HumidityPage = () => {
  return (
    <>
      <div className="content-area flex flex-row gap-4">
        <div className="temp-area w-2/3">
          <Card>
            <div>
              <p>
                현재습도 <CurrentHumidity />
              </p>
              <p>
                현재습도가 <span>{CurrentHumidity < 60 ? "낮음" : "적정" }</span> 상태입니다.
                {CurrentHumidity < 60 && (
                  <> <span>자동 시스템이</span>이 작동중입니다.</>
                )}
              </p>
            </div>
            <HumidityChart/>
          </Card>
        </div>
        <div className="setting-area w-1/3">
          <Card>
            <div className="flex flex-row justify-between light-area">
              <p>습도 시스템</p>
              <Humidifier />
            </div>
          </Card>
          <Card>
            <div className="flex flex-row temp-value-area">
              <p>습도값 설정</p>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HumidityPage