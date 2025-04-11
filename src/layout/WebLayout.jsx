import React from 'react'
import { Outlet } from 'react-router-dom'
import WebHeader from '../header/WebHeader'
import WebFooter from '../header/WebFooter'

const WebLayout = () => {
  return (
    <>
      <div className="min-h-screen pt-18 flex flex-col">
        <WebHeader />
        <Outlet/>
        <WebFooter />
      </div>
    </>
  )
}

export default WebLayout