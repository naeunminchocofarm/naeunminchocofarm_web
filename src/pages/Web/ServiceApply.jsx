import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../members/apis/axiosInstance";

// 공통 스타일
const labelStyle = "font-semibold w-36 shrink-0 text-sm";
const rowStyle = "flex items-start gap-4 py-2 border-b";

const ServiceApplyDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/api/service/admin/detail/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.error("상세 조회 실패:", err));
  }, [id]);

  if (!detail) return <p className="p-4">로딩 중...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* 안내 */}
      <section className="text-sm text-gray-500">
        서비스 신청 상세 정보입니다.
      </section>

      {/* 카드형 상세 정보 */}
      <div className="bg-white shadow-md rounded-xl p-6 text-sm space-y-2">
        <div className={rowStyle}>
          <span className={labelStyle}>신청 ID</span>
          <span>{detail.id}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>회원명</span>
          <span>{detail.member?.name} / {detail.member?.email}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>신청자 유형</span>
          <span>{detail.type}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>운영 여부</span>
          <span>{detail.isOperating === "yes" ? "예" : "아니오"}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>실무자 연락처</span>
          <span>{detail.contactTell}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>신청일</span>
          <span>{detail.applicationDate?.slice(0, 10)}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>신청 상태</span>
          <span>{detail.serviceStatus?.status}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>메모</span>
          <span>{detail.memo || "(없음)"}</span>
        </div>
        <div className={rowStyle}>
          <span className={labelStyle}>상담 내용</span>
          <span className="whitespace-pre-line">{detail.content}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceApplyDetail;
