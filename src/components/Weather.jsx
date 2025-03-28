import React from 'react'
import { FiSun } from 'react-icons/fi'

const Weather = () => {
    return (
        <div className="weather">
            <div className="flex justify-between items-end mb-3">
            <div className="weatherTemp">
                <p className='flex items-end text-6xl font-black'>26º</p>
            </div>
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