import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Temperature = () => {
  const data = {
    labelsMonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels2: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels3: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //labels의 밸류값은
    //1. 날짜별
    //2. 일자별
    //3. 시간별
    datasets: [
      {
        label: "최저온도 (°C)",
        data: [22, 24, 20, 26, 30, 28], // Y-axis data (Temperature values)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // Area under the line is filled
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      },
      {
        label: "최고온도 (°C)",
        data: [38, 36, 34, 36, 40, 38], // Y-axis data (Temperature values)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // Area under the line is filled
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      },
      {
        label: "평균온도 (°C)",
        data: [30, 30, 27, 41, 35, 32], // Y-axis data (Temperature values)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true, // Area under the line is filled
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "온도",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} °C`, // Show temperature with °C symbol
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
    },
  };

  // //심은지 몇일째인지 받아오는 코드가 있어야함
  // //최초 식물 셋팅할때 설정된 day를 기준으로 자를거니깐 받아만오기
  // const [day, setDay] = useState(0);
  // //온도 변화를 감지하고 출력하는 영역
  // const [temperature, setTemperature] = useState(0);

  // useEffect(() => {
  //   setTemperature();
  // }, [temperature]);

  // //온열전구 > 성장기간에따라 다름
  // const onTempLight = () => {
  //   if(day<=7){
  //     if (temperature <= 8) {
  //       return "켜져라";
  //     }
  //     //켜지는 기능이있으면 꺼져야하나
  //     if(temperature)
  //   }
  // };

  // //선풍기 > 성장기간에따라 다름
  // const onTempFan = () => {
  //   if (temperature >= 20) {
  //     return "켜져라";
  //   }
  // };

  return (
    <>
      <Line options={options} data={data} />;<p>온도보는곳</p>
      <p>온도 기준 섭씨임 화씨면 어캐받아와야하지</p>
      <div>
        발아 적온: 15~20℃ -1~7일차 생육 적온: 15~20℃ - 8~19일 결구 적온: 10~16℃
        - 20~30 선풍기 : 고온 시: 20℃ 이상에서는 발아율이 떨어진다 온열전구 :
        8도 보다 낮을때 저온 시: 8℃ 이하에서는 발아가 지연된다
      </div>
      - 일간 온도 그래프 컴포넌트
      {/* dayTemp 
          - 가로 축이 날짜
          - 세로 축이 온도 겨울~여름
          - 적정온도 란에 표시 해주기
        */}
      - 현재 온도 컴포넌트(실시간)
      {/* nowTemp 
          - 가로 축이 시간or 분 > 실시간은 추후
          - 세로 축이 온도 겨울~여름 (동일)
          - 적정온도 란에 표시 해주기 (동일)
        */}
      - 온열전구 킬 온도 하한 값 설정 컴포넌트
      {/* coldTemp 
          - 상단 적정온도란을 벗어났을때 온열전구를 켤지 말지 설정하는 영역
          - 1. 특정온도보다 낮아질때 auto로 켜지긴 하나
          - 버튼 클릭시 직접 끄거나 켤수 있도록 설정 되는 기능
        */}
      - 선풍기 끄고 키는 값 설정하는 컴포넌트
      {/* hotTemp 
          - 20도 이상일때 선풍기를 켤지 말지 설정하는 영역
          - 1. 특정온도보다 낮아질때 auto로 켜지긴 하나
          - 버튼 클릭시 직접 끄거나 켤수 있도록 설정 되는 기능
        */}
    </>
  );
};

export default Temperature;
