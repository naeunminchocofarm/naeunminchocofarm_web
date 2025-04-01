//가상이산화탄소 영역
const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}시`);
const data = {
  labels,
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

//두타입의 옵션 사전생성 홈용 베이스용
const options = {
  // 반응형 여부 설정
  responsive: true,
  maintainAspectRatio: false,
  //범례
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    //y축 설정
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};
const noOptions = {
  responsive: true,
  scales: {
    x: { display: false }, // X축 숨김
    y: { display: false }, // Y축 숨김
  },
  plugins: {
    legend: { display: false }, // 범례 숨김
  },
};
