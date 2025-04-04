import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Chart as ChartJs, registerables } from "chart.js";
import humidityApi from '../apis/humidity_api';
import { useLocation } from "react-router-dom";

ChartJs.register(...registerables);
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HumidityChart = () => {
  const [humidity, setHumidity] = useState([]);
  const [useShowOption, setUseShowOption] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === "/home"){
      setUseShowOption(false); 
    } else {
      setUseShowOption(true);
    }

    const fetchHumidityData = async () => {
      try {
        const response = await humidityApi.getAll();
        // console.log(response.data)
        if (response.data.length > 0) {
          const sortedHumidity = response.data.sort((a, b) => new Date(b.measuredAt) - new Date(a.measuredAt));
          setHumidity(sortedHumidity);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchHumidityData();
    const intervalId = setInterval(fetchHumidityData, 600000); // 10분마다 갱신
    return () => clearInterval(intervalId);
  }, [location.pathname]);

  // X축 시간 레이블
  const labels = Array.from({ length: 25 }, (_, i) => `${i + 1}시`);

  //현재시간
  const currentHour = new Date().getHours();

  // Y축 데이터: 각 시간대별 습도 데이터
  const dataValues = Array.from({ length:25 }, (_, h) => {
    const data = humidity.find(s => new Date(s.measuredAt).getHours() === h);
    return data ? data.humidityPercentage : null;
  });

  //마지막 데이터 이후는 null로 처리
  const updatedDataValues = dataValues.map((value, index) => {
    return index <= currentHour ? value : null;
  });
  
  // 습도 차트 데이터 설정
  const humidityData = {
    labels,
    datasets: [
      {
        label: "습도 (%)",
        data: updatedDataValues,
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        // 선의 곡률
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
        max: 100,
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
        data={humidityData} 
        options={useShowOption ? optionsShow : optionHide} 
      />
    </div>
  );
};

export default HumidityChart;
