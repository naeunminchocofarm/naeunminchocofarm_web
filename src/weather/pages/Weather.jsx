import React, { useEffect } from 'react'
import { FiSun } from 'react-icons/fi'

const Weather = () => {
    
    function callJsonApi(url, saveFilePath) {  // Text API 호출 함수
        fetch(url,no-cors)  // fetch를 통해 API 호출
            .then(response => response.json())  // 응답을 JSON으로 변환
            .then(data => {
            console.log(data);  // 데이터 출력
            console.log(saveFilePath);
            // saveFilePath를 사용하여 데이터를 저장하거나 추가적인 처리를 수행할 수 있습니다.
            })
            .catch(error => {
            console.error('API 호출 중 오류가 발생했습니다:', error);
            // 오류 처리를 수행할 수 있습니다.
            });
        }
      
    // 사용 예시
      
      
    return (
        <div className="weather">
            <div className="flex justify-between items-end mb-3">
            <div className="weatherTemp">
                <p className='flex items-end text-6xl font-black'>20</p>
            </div>
            <div><></></div>
            <div className="weatherIcon text-6xl"><FiSun /></div>
            </div>
            <div className=" items-center justify-between">
            <p className="text-md font-bold text-slate-500">울산 남구</p>
            <p className='menubar text-sm font-mideum text-slate-300'>MAR.29 </p>               
            </div>
        </div>
    )
}
export default Weather