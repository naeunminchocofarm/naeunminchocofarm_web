import React from 'react'
import RecentSoil from './RecentSoil'
import SoilChart from './SoilChart';

const HomeSoil = ({title, nowSoil, soilData, options}) => {
  const FarmBasicTop = ` mb-3 flex justify-between items-center`;
  const FarmBasicTopTitle = ` flex text-sm font-extrabold text-slate-400`;
  const FarmBasicTopMore = `text-xs font-light text-slate-400`;

  return (
    <>
      <div className={FarmBasicTop}>
        <p className={FarmBasicTopTitle}>{title}</p>
        <p className={FarmBasicTopMore}>자세히 보기 +</p>
      </div>
      {/* <RecentSoil nowSoil = {nowSoil}/> */}
      <SoilChart data={soilData} options={options}/>
      <RecentSoil nowSoil={nowSoil}/>
    </>
  )
}

export default HomeSoil