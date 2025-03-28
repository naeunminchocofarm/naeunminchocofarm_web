import React from "react";
import { Link } from "react-router-dom";

const SoilComp = () =>{
    return(
        <>
          <div className="flex flex-col">
            <div className="compTitle">
            <div className="FarmBasicTop mb-3 flex justify-between items-center ">
        <p className='flex text-sm font-extrabold text-slate-400'>토양정보 (가라로)</p>
        <Link to='/' className='text-xs font-light text-slate-400'>자세히 보기 +</Link>
        </div>
            </div>
            <div className="compCont">
                토양 온도 | 토양습도
            </div>
        </div>  
        </>
    );
}
export default SoilComp;