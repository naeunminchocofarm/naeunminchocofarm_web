import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminApi from "../../apis/admin_api";
import AdminFarmSection from "./AdminFarmSection";

const AdminFarmDetail = () => {
  // URL 파라미터에서 id 값을 가져옴 (문자열로 들어옴)
  const params = useParams();
  const id = parseInt(params.id, 10); // 숫자로 변환

  const [farm, setFarm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || isNaN(id)) {
      console.error("잘못된 farm ID입니다.");
      setLoading(false);
      return;
    }

    // API 호출
    adminApi
      .getFarmById(id)
      .then((res) => {
        setFarm(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("스마트팜 조회 실패:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6">로딩 중...</div>;
  if (!farm) return <div className="p-6">스마트팜 정보를 불러올 수 없습니다.</div>;

  return (
    <div className="p-6 space-y-10">
      {/* 회원 정보 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">회원 정보</h2>
        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-md">
          <div>아이디: {farm.member?.loginId}</div>
          <div>이름: {farm.member?.name}</div>
          <div>이메일: {farm.member?.email}</div>
          <div>전화번호: {farm.member?.tell}</div>
        </div>
      </section>

      {/* 스마트팜 정보 */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">스마트팜 정보</h2>
        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-md">
          <div>스마트팜 이름: {farm.farmName}</div>
          <div>주소: {farm.farmAddr}</div>
          <div>이용 시작일: 
            {farm.useDate ? farm.useDate.slice(0, 10) : "-"}
          </div>
          <div>상태: {farm.status || "-"}</div>
        </div>
      </section>

      {/* 구역 정보 */}
      <AdminFarmSection farmId={parseInt(id)} />
    </div>
  );
};

export default AdminFarmDetail;
