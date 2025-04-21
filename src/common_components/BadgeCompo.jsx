import React from "react";

const badgeMap = {
  상담대기: "pending",
  운영대기: "pending",
  상담중: "info",
  설치중: "info",
  상담완료: "success",
  설치완료: "success",
  운영중: "success",
  상담취소: "danger",
  운영종료: "danger",
  경고: "danger",
  주의: "warning",
  성공: "success",
};

const badgeStyles = {
  pending: "bg-yellow-100 text-yellow-700",
  info: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  danger: "bg-red-100 text-red-700",
  warning: "bg-orange-100 text-orange-700",
  default: "bg-gray-200 text-gray-800",
};

const BadgeCompo = ({ label }) => {
  const type = badgeMap[label] || "default";
  const badgeStyle = `inline-block text-xs px-2 py-0.5 rounded ${badgeStyles[type]}`;

  return <span className={badgeStyle}>{label}</span>;
};

export default BadgeCompo;