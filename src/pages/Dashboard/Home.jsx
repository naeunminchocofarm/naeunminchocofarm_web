import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../common_components/Card'
import CurrentHumidity from '../../humidity/components/CurrentHumidity'
import Humidity from '../../humidity/components/Humidity'

const Home = () => {
  return (
    <>
      <div className="homeContainer grid grid-row-3 gap-y-4">
        <div className="flex flex-row gap-4">
          <Card className='basis-2/3'>
          plantbasicinfoarea
          </Card>
          <Card className='basis-1/3'>

          </Card>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card className='aaa'>
           
          </Card>
          <Card><CurrentHumidity/></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="flex flex-row gap-4">
        <Card className='basis-5/13'></Card>
        <Card className='basis-5/13'></Card>
        <Card className='basis-3/13'></Card>
        </div>
      </div>
    </>
  )
}

export default Home