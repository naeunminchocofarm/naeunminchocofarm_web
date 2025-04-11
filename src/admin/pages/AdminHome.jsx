import React from "react";
import {
  Bar,
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const stats = {
    users: 128,
    applications: 87,
    farms: 43,
  };

  const cropBarData = {
    labels: ["상추", "방울토마토", "고추", "오이", "토마토", "기타"],
    datasets: [
      {
        label: "등록 수",
        data: [23, 19, 14, 12, 10, 6],
        backgroundColor: "#4ade80", // 초록색
      },
    ],
  };

  const applicationLineData = {
    labels: ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7"],
    datasets: [
      {
        label: "신청자 수",
        data: [3, 6, 5, 2, 8, 7, 9],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">전체 회원 수</h3>
          <p className="text-2xl font-bold text-green-600">{stats.users}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">스마트팜 신청 수</h3>
          <p className="text-2xl font-bold text-green-600">{stats.applications}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">운영 중인 농장 수</h3>
          <p className="text-2xl font-bold text-green-600">{stats.farms}</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[50%] bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">작물 등록 순위</h2>
          <Bar data={cropBarData} options={{ responsive: true }} />
        </div>

        <div className="w-[50%] bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">최근 7일 신청자 추이</h2>
          <Line data={applicationLineData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
