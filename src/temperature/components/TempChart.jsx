import React, { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { insertTempHour, insertNowTemp } from "../apis/tempData";

Chart.register(...registerables);
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export const TempChart = () => {
  const [temperature, setTemperature] = useState([]);
  const [nowTemp, setNowTemp] = useState(0);
  const [useShowOption, setUseShowOption] = useState(true);

  useEffect(() => {
    setUseShowOption(true);
    insertTempHour()
      .then((res) => {
        setTemperature(res.data);
      })
      .catch((error) => console.log(error));

    insertNowTemp()
      .then((res) => {
        setNowTemp(res.data[0].temperatureC);
        console.log(res.data[0].temperatureC);
      })
      .catch((error) => console.log(error));
  }, [nowTemp]);

  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);

  const options1 = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "일 시간별 온도" } },
      y: { title: { display: true, text: "온도 (°C)" } },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} °C`,
          // Show temperature with °C symbol
        },
      },
    },
  };

  const options2 = {
    responsive: true,
    scales: {
      x: { display: false }, // X축 숨김
      y: { display: false }, // Y축 숨김
    },
    plugins: {
      legend: { display: false }, // 범례 숨김
    },
  };

  const tempData = {
    labels,
    datasets: [
      {
        label: "평균온도 (°C)",
        data: temperature.map((time, i) => {
          return time.temperatureC;
        }),
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        fill: true, // 하단채움
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "rgb(125, 197, 57)", // Point color
      },
    ],
  };

  useEffect(() => {
    // 페이지 로딩 시에 특정 조건에 맞게 options 선택
    const useShowOption = true; // 여기서 조건을 변경해 주면 됩니다.
    if (useShowOption) {
      setUseShowOption(options2); // 조건에 맞으면 options2를 사용
    } else {
      setUseShowOption(options1); // 기본적으로 options1을 사용
    }
  }, []);

  return (
    <>
      <Line options={useShowOption ? options1 : options2} data={tempData} />
    </>
  );
};
