import React from 'react'
import { Outlet } from 'react-router-dom'
import WebHeader from '../header/WebHeader'

const WebLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-18 flex justify-center items-start">
        <WebHeader />
        <Outlet/>
      </div>
    </>
  )
}

export default WebLayout