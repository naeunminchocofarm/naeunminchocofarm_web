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
import { insertNowTemp, insertTempHour } from "../apis/exdata";
import TestM from "../../pages/TestM";

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
  // //심은지 몇일째인지 받아오는 코드가 있어야함 > 얘는 나중에 new할때 불러옴
  const [day, setDay] = useState("");

  // 시간별 온도
  const [temperature, setTemperature] = useState([]);

  // 현재 온도
  const [nowTemp, setNowTemp] = useState(0);

  //불켜짐 여부
  const [tempLight, setTempLight] = useState(false);

  useEffect(() => {
    // insertNowTemp()
    //   .then((res) => {
    //     console.log(res.data);
    //     setNowTemp(res.data);
    //     //마지막 데이터를 불러와야함
    //   })
    //   .catch((error) => console.log(error));

    insertTempHour()
      .then((res) => {
        setTemperature(res.data);
        console.log([res.data]);
        console.log("temp"+temperature);
      })
      .catch((error) => console.log(error));

    const onTempLight = () => {
      if (nowTemp <= 8) {
        console.log("불켜짐");
        setTempLight(true);
      } else if (nowTemp >= 10) {
        console.log("불꺼짐");
        setTempLight(false);
      }
    };
  }, [temperature]);

  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
  const data = {
    //labels을 보여줄건데 가로축의 기준이
    // 1. 1일 시간기준 24시간기준
    // 2. 심은 날을 기준으로해서 1~40일차까지\
    labels,
    datasets: [
      {
        label: "평균온도 (°C)",
        data: temperature, // 시간별 가상데이터 분리
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        fill: true, // 하단채움
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgb(125, 197, 57)", // Point color
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} °C`,
          // Show temperature with °C symbol
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "일 시간별 온도" } },
      y: { title: { display: true, text: "온도 (°C)" } },
    },
  };

  return (
    <>
      <div className="content-area">
        <div className="temp-area">
          <p>온도</p>
          <div>현재온도 {nowTemp}</div>
          <Line options={options} data={data} />
        </div>
        <div className="setting-area">
          <div className="light-area">
            <p>온열전구</p>
            <input
              type="checkbox"
              name="tempLight"
              checked={tempLight}
              onChange={() => {
                setTempLight(!tempLight);
              }}
            />
            {tempLight ? "켜짐" : "꺼짐"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Temperature;
