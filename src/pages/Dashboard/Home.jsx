import React from 'react'
import {  BsBellFill, BsChevronRight, BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="homeContainer grid grid-row-3 gap-y-4">
        <div className="flex flex-row gap-4">
          <div className="bg-white basis-2/3">plantbasicinfoarea</div>
          <div className="bg-white basis-1/3">weather api</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className='bg-white basis-1/4'>언니카드들데려오기</div>
          <div className='bg-white basis-1/4'>2</div>
          <div className='bg-white basis-1/4'>3</div>
          <div className='bg-white basis-1/4'>4</div>
          {/* <Card/> 
          <Card/>
          <Card/>
          <Card/> */}
        </div>
        <div className="flex flex-row gap-4">
          <div className='bg-white basis-4/11'>1</div>
          <div className='bg-white basis-4/11'>2</div>
          <div className='bg-white basis-3/11'>4</div>
        </div>
      </div>
    </>
  )
}

export default Home