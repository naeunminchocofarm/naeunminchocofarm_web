import React from 'react'
import UserHeader from '../header/UserHeader'
import UserTitle from '../header/UserTitle'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      {/* 라우터의 user영역들나중에 여기서 */}
      <UserHeader/>
      <div className='p-4 sm:ml-65 bg-gray-100 h-screen overflow-scroll'>
         {/* Outlert에서 받아온 변수로 title달라지게*/}
        <UserTitle/> 
        <Outlet/>
      </div>
    </>
  )
}

export default AppLayout