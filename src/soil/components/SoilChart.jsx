import React, { useEffect, useState } from "react";
import { Chart as ChartJs, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import soil_humidityApi from "../apis/soil_humidity_api";

ChartJs.register(ArcElement, Tooltip);

const SoilChart = () => {
  const [soil, setSoil] = useState([]);
  const [soilChart, setSoilChart] = useState({});
  const [gaugeText, setGaugeText] = useState(""); // 텍스트 상태 추가

  // 습도 데이터 가져오기
  const fetchHmidityData = async () => {
    try {
      const response = await soil_humidityApi.getAll();
      if (response.data.length > 0) {
        const sortedSoilHumidity = response.data.sort(
          (a, b) => new Date(b.measuredAt) - new Date(a.measuredAt)
        );
        setSoil(sortedSoilHumidity);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기 및 주기적으로 새로고침
  useEffect(() => {
    fetchHmidityData();
    const intervalId = setInterval(fetchHmidityData, 600000); // 10분마다 갱신
    return () => clearInterval(intervalId);
  }, []);

  // soil 데이터 업데이트 시 차트 및 텍스트 업데이트
  useEffect(() => {
    if (soil.length > 0) {
      const nowSoil = soil[0];
      const recentSoilValue = nowSoil.soilMoistureValue;

      let gaugeText = `${recentSoilValue}`;
      let backgroundColor = "#eeeeee";

      // 습도 값에 따른 텍스트와 색상 설정
      if (recentSoilValue <= 300) {
        gaugeText = `물 부족: ${recentSoilValue}`;
        backgroundColor = "#C47F42";
      } else if (recentSoilValue > 300 && recentSoilValue <= 700) {
        gaugeText = `적정토양: ${recentSoilValue}`;
        backgroundColor = "#567A4F";
      } else if (recentSoilValue > 700 && recentSoilValue <= 950) {
        gaugeText = `과 수분: ${recentSoilValue}`;
        backgroundColor = "#3C5A68";
      }

      // 텍스트 상태 업데이트
      setGaugeText(gaugeText);

      // 차트 데이터 설정
      const updatedChartData = {
        labels: ["Soil Moisture", "Gray Area"],
        datasets: [
          {
            label: "Soil Moisture",
            data: [recentSoilValue, 950 - recentSoilValue],
            backgroundColor: [backgroundColor, "gray"],
            cutout: "90%",
            circumference: 180,
            rotation: 270,
          },
        ],
      };

      setSoilChart({
        data: updatedChartData,
      });
    }
  }, [soil]);

  const gaugeChartText = {
    id: "customText",
    afterDatasetsDraw(chart) {
      const { ctx, chartArea } = chart;
      ctx.save();

      const centerX = chartArea.width / 2;
      const centerY = chartArea.height / 1.2;

      ctx.font = "bold 28px Paperlogy";
      ctx.fillStyle = "#333";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(gaugeText.split(": ")[1], centerX, centerY - 10); // 값 부분만 표시

      ctx.font = "16px Paperlogy";
      ctx.fillStyle = "#666";
      ctx.fillText("Soil Moisture", centerX, centerY + 20); // 아래쪽에 추가
    },
  };

  const options = {
    aspectRatio: 1.5,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <>
      <div className="w-full">
        {soilChart.data && (
          <Doughnut
            data={soilChart.data}
            options={options}
            plugins={[gaugeChartText]} // 커스텀 플러그인 추가
          />
        )}
      </div>
    </>
  );
};

export default SoilChart;
