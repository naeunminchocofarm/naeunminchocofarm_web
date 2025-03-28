import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { BiPlus } from "react-icons/bi";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const HomeComp = () =>{
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [10, 20, 15, 25, 30, 22], // 데이터 값만 적용
            borderColor: "rgb(79, 192, 75)",
            borderWidth: 1, // 라인 두께
            pointRadius: 0, // 점 숨기기
            tension: 0.4, // Smooth curve
          },
        ],
      };
    
      const options = {
        responsive: true,
        scales: {
          x: { display: false }, // X축 숨김
          y: { display: false }, // Y축 숨김
        },
        plugins: {
          legend: { display: false }, // 범례 숨김
        },
      };
    return(
      <div className="FarmBasic">
        <div className="FarmBasicTop mb-3 flex justify-between items-center ">
        <p className='flex text-sm font-extrabold text-slate-400'>이산화탄소</p>
        <p className='text-xs font-light text-slate-400'>자세히 보기 +</p>
        </div>
        <div className="FarmBasicCont">
        <div className="flex justify-between items-end">
            <p className="co2Set text-5xl text-center font-black">
            120
            </p>
            <div className='w-2/5 '>
                <div className="w-full ">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
export default HomeComp;