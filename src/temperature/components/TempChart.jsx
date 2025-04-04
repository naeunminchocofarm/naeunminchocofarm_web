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
import { insertTempHour } from "../apis/tempData";

Chart.register(...registerables);
ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const useTemperatureData = () => {
  const [temperatureAvg, setTemperatureAvg] = useState([]);

  useEffect(() => {
    insertTempHour()
      .then((res) => {
        setTemperatureAvg(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    const intervalId = setInterval(temperatureAvg, 600000); // 10분마다 갱신
    return () => clearInterval(intervalId);
  }, []);

  return temperatureAvg;
};

// 공통 데이터 변환 함수
const getTempData = (temperatureAvg) => {
  const labels = Array.from({ length: 25 }, (_, i) => `${i + 1}시`);
  const tempValues = Array.from({ length: 25 }, (_, h) => {
    const data = temperatureAvg.find(
      (s) => new Date(s.measuredAt).getHours() === h
    );
    return data ? data.temperatureC : null;
  });

  const currentHour = new Date().getHours();
  const updatedTemperatureDatas = tempValues.map((value, i) =>
    i <= currentHour ? value : null
  );

  return {
    labels,
    datasets: [
      {
        label: "평균온도 (°C)",
        data: updatedTemperatureDatas,
        pointStyle: "rectRot",
        borderColor: "rgb(79, 192, 75)",
        backgroundColor: "rgba(7, 255, 19, 0.2)",
        fill: false,
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };
};

// 옵션이 있는 차트
const TempOptionChart = () => {
  const temperatureAvg = useTemperatureData();

  const optionsShow = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 4 / 3,
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

  return (
    <div className="w-full ">
      <Line
        aspect={4 / 3}
        options={optionsShow}
        data={getTempData(temperatureAvg)}
      />
    </div>
  );
};

// 옵션이 없는 차트
const TempNoOptionChart = () => {
  const temperatureAvg = useTemperatureData();

  const optionsHide = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 4 / 3,
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
    <div className="w-full h-1/3 aspect-w-4 aspect-h-3">
      <Line
        aspect={4 / 3}
        options={optionsHide}
        data={getTempData(temperatureAvg)}
      />
    </div>
  );
};

export { TempOptionChart, TempNoOptionChart };