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
import { useLocation } from "react-router-dom";

Chart.register(...registerables);
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export const TempChart = () => {
  const [temperature, setTemperature] = useState([]);
  const [nowTemp, setNowTemp] = useState(0);
  const [useShowOption, setUseShowOption] = useState(true);
  const location = useLocation();

  useEffect(() => {
    insertTempHour()
      .then((res) => {
        setTemperature(res.data);
      })
      .catch((error) => console.log(error));

    insertNowTemp()
      .then((res) => {
        setNowTemp(res.data[0].temperatureC);
      })
      .catch((error) => console.log(error));
  }, [nowTemp]);

  //홈일때만 false 다른 그래프들도 그럴거니깐 추가
  useEffect(() => {
    if (location.pathname === "/home") {
      setUseShowOption(false);
    } else {
      setUseShowOption(true);
    }
  }, [location.pathname]);

  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);

  const optionsShow = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "일 시간별 온도" } },
      y: { title: { display: true, text: "온도 (°C)" } },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} °C`,
        },
      },
    },
  };

  const optionsHide = {
    responsive: true,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const tempValues = Array.from({ length: 24 }, (_, h) => {
    // 해당 시간에 대한 데이터를 찾아서 LDR 값을 반환, 없으면 0
    const data = temperature.find(
      (s) => new Date(s.measuredAt).getHours() === h
    );
    return data ? data.temperatureC : null;
  });
  const pointRControll = location.pathname === "/home" ? 0 : 1;
  const fillControll = location.pathname === "/home" ? false : true;
  const currentHour = new Date().getHours();
  const updatedTemperatureDatas = tempValues.map((value, i) => {
    return i <= currentHour ? value : null; // 현재 시간 이후는 0으로 처리
  });
  const tempData = {
    labels,
    datasets: [
      {
        label: "평균온도 (°C)",
        data: updatedTemperatureDatas,
        pointStyle: "rectRot",
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        fill: fillControll, // 하단채움
        tension: 0.4, // Smooth curve
        pointRadius: pointRControll,
        borderWidth: 1, // 라인 두께
      },
    ],
  };

  return (
    <>
      <Line
        options={useShowOption ? optionsShow : optionsHide}
        data={tempData}
      />
    </>
  );
};
