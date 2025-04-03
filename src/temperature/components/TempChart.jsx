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
import { useLocation } from "react-router-dom";
import { insertTempHour } from "../apis/tempData";

Chart.register(...registerables);
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export const TempChart = () => {
  const [temperatureAvg, setTemperatureAvg] = useState([]);
  const [useShowOption, setUseShowOption] = useState(true);
  const location = useLocation();

  const fetchTempHourData = () => {
    insertTempHour()
      .then((res) => {
        setTemperatureAvg(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTempHourData();
  }, []);

  //홈일때만 false 다른 그래프들도 그럴거니깐 추가
  useEffect(() => {
    if (location.pathname === "/home") {
      setUseShowOption(false);
    } else {
      setUseShowOption(true);
    }
  }, [location.pathname]);

  const labels = Array.from({ length: 25 }, (_, i) => `${i + 1}시`);

  const optionsShow = {
    responsive: true,
    maintainAspectRatio: 40,
    scales: {
      x: { title: { display: true, text: "일 시간별 온도" } },
      y: { title: { display: true, text: "온도 (°C)" }, min: 0, max: 40 },
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
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
    },
  };

  const tempValues = Array.from({ length: 25 }, (_, h) => {
    const data = temperatureAvg.find(
      (s) => new Date(s.measuredAt).getHours() === h
    );
    return data ? data.temperatureC : 0;
  });
  const pointRControll = location.pathname === "/home" ? 0 : 1;
  const fillControll = location.pathname === "/home" ? false : true;
  const currentHour = new Date().getHours();
  const updatedTemperatureDatas = tempValues.map((value, i) => {
    return i <= currentHour ? value : 0;
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
      <div className="w-full h-1/3 aspect-w-4 aspect-h-3">
        <Line
          options={useShowOption ? optionsShow : optionsHide}
          data={tempData}
        />
      </div>
    </>
  );
};
