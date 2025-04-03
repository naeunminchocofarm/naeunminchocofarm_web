import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Chart as ChartJs, registerables } from "chart.js";
import sunshineApi from "../apis/sunshine_api";
import { useLocation } from "react-router-dom";

ChartJs.register(...registerables);
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SunshineChart = () => {
  const [sunshines, setSunshines] = useState([]);
  const [useShowOption, setUseShowOption] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/home"){
      setUseShowOption(false);
    } else {
      setUseShowOption(true);
    }

    const fetchSunshineData = async () => {
      try {
        const response = await sunshineApi.getAll();
        if (response.data.length > 0) {
          // 데이터를 measuredAt(측정 시간)을 기준으로 정렬
          const sortedSunshines = response.data.sort((a, b) => new Date(b.measuredAt) - new Date(a.measuredAt));
          setSunshines(sortedSunshines);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSunshineData();
    const intervalId = setInterval(fetchSunshineData, 600000); // 10분마다 갱신
    return () => clearInterval(intervalId);
  }, [location.pathname]);

  // X축 레이블 0~24시
  const labels = Array.from({ length: 25 }, (_, i) => `${i}시`);

  // 현재 시간
  const currentHour = new Date().getHours();

  // Y축 데이터: 각 시간대별 일조량 데이터 (LDR 값)
  const dataValues = Array.from({ length: 25 }, (_, h) => {
    // 해당 시간에 대한 데이터를 찾아서 LDR 값을 반환, 없으면 null
    const data = sunshines.find((s) => new Date(s.measuredAt).getHours() === h);
    return data ? data.ldrValue : null;
  });

  // 마지막 데이터 이후는 null로 처리하여 표시
  const updatedDataValues = dataValues.map((value, index) => {
    // 현재 시간 이후는 null로 처리
    return index <= currentHour ? value : null; 
  });

  // 차트 데이터 설정
  const sunshineData = {
    labels,  // 0~24시
    datasets: [
      {
        label: "일조량 (LDR 값)",
        data: updatedDataValues,
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        tension: 0.4,
        borderWidth: 1, 
      },
    ],
  };


  // 차트 옵션 설정
  const optionsShow = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1100,
        ticks: {
          // 100 단위로 눈금 표시
          stepSize: 100, 
        },

      },
    },
  };

  const optionHide ={
    responsive: false,
    //true: 16:9 유지
    //false: 반응형
    maintainAspectRatio: false,
    //포인트 X
    pointRadius: 0,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };


  return (
    <div className={"w-full"} >
      <Line 
        data={sunshineData} 
        options={useShowOption ? optionsShow : optionHide} 
      />
    </div>
  );
};

export default SunshineChart;
