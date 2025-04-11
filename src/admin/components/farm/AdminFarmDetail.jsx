import React from "react";

const FarmDetail = () => {
  const user = {
    name: "홍길동",
    status: "정상",
    phone: "010-1234-5678",
    username: "gildong",
    email: "gildong@example.com",
  };

  const farm = {
    name: "그린팜",
    location: "경기도 파주",
    createdAt: "2024-01-15",
  };

  const zones = [
    {
      id: 1,
      name: "1번 구역",
      location: "북동쪽",
      createdAt: "2024-01-16",
      sensors: {
        temp: 24.5,
        hume: 68,
        sunshine: 720,
      },
    },
    {
      id: 2,
      name: "2번 구역",
      location: "남서쪽",
      createdAt: "2024-02-01",
      sensors: {
        temp: 25.3,
        hume: 70,
        sunshine: 800,
      },
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* 담당 회원 정보 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">회원 정보</h2>
        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-md">
          <div>상태: <span className="font-semibold">{user.status}</span></div>
          <div>이름: {user.name}</div>
          <div>아이디: {user.username}</div>
          <div>이메일: {user.email}</div>
          <div>전화번호: {user.phone}</div>
        </div>
      </section>

      {/* 스마트팜 정보 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">스마트팜 정보</h2>
        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-md">
          <div>팜 이름: {farm.name}</div>
          <div>위치: {farm.location}</div>
          <div>등록일: {farm.createdAt}</div>
        </div>
      </section>

      {/* 구역 정보 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">구역 정보</h2>
        {zones.map((zone) => (
          <div key={zone.id} className="border rounded-md p-4 space-y-2 bg-white shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{zone.name}</h3>
              <span className="text-sm text-gray-500">등록일: {zone.createdAt}</span>
            </div>
            <p className="text-sm text-gray-600">위치: {zone.location}</p>

            {/* 센서 데이터 */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-2 bg-gray-50 p-3 rounded-md">
              <div>온도: <span className="font-semibold">{zone.sensors.temp}°C</span></div>
              <div>습도: <span className="font-semibold">{zone.sensors.hume}%</span></div>
              <div>조도: <span className="font-semibold">{zone.sensors.sunshine}lx</span></div>
            </div>

            {/* 차트 자리 */}
            <div className="bg-gray-100 rounded-md h-32 mt-2 flex items-center justify-center text-gray-500 text-sm">
              [ 차트 영역 – 센서 데이터 시각화 예정 ]
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FarmDetail;
