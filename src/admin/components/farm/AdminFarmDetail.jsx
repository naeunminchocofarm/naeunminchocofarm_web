import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import adminApi from "../../apis/admin_api";
import AdminFarmSection from "./AdminFarmSection";

const AdminFarmDetail = () => {
  const params = useParams();
  const id = parseInt(params.id, 10);

  const [farm, setFarm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    if (!id || isNaN(id)) {
      console.error("잘못된 farm ID입니다.");
      setLoading(false);
      return;
    }

    adminApi
      .getFarmById(id)
      .then((res) => {
        setFarm(res.data);
        setEditedData({
          farmName: res.data.farmName,
          farmAddr: res.data.farmAddr,
          useDate: res.data.useDate ? res.data.useDate.slice(0, 10) : "",
          status: res.data.status || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("스마트팜 조회 실패:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const useDateFormatted =
      editedData.useDate === ""
        ? null
        : `${editedData.useDate}T00:00:00+09:00`;
  
    const dataToSend = {
      farmName: editedData.farmName,
      farmAddr: editedData.farmAddr,
      useDate: useDateFormatted,
      status: editedData.status,
  
      crop: farm.crop ?? "",
      uuid: farm.uuid ?? "",
      uuidId: farm.uuidId,
      member: {
        loginId: farm.member?.loginId ?? "",
      },
    };
  
    adminApi
      .updateFarm(id, dataToSend)
      .then(() => {
        setFarm(prev => ({
          ...prev,
          ...editedData,
        }));
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("수정 실패:", err);
        alert("수정에 실패했습니다.");
      });
  };
  

  const handleCancel = () => {
    setEditedData({
      farmName: farm.farmName,
      farmAddr: farm.farmAddr,
      useDate: farm.useDate ? farm.useDate.slice(0, 10) : "",
      status: farm.status || "",
    });
    setIsEditing(false);
  };

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
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">스마트팜 정보</h2>
          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              수정
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-md">
          <div>
            스마트팜 이름:{" "}
            {isEditing ? (
              <input
                type="text"
                name="farmName"
                value={editedData.farmName}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              farm.farmName
            )}
          </div>
          <div>
            주소:{" "}
            {isEditing ? (
              <input
                type="text"
                name="farmAddr"
                value={editedData.farmAddr}
                onChange={handleChange}
                className="border p-1 rounded w-full"
              />
            ) : (
              farm.farmAddr
            )}
          </div>
          <div>
            이용 시작일:{" "}
            {isEditing ? (
              <input
                type="date"
                name="useDate"
                value={editedData.useDate}
                onChange={handleChange}
                className="border p-1 rounded"
              />
            ) : farm.useDate ? (
              farm.useDate.slice(0, 10)
            ) : (
              "-"
            )}
          </div>
          <div>
            상태:{" "}
            {isEditing ? (
              <select
                name="status"
                value={editedData.status}
                onChange={handleChange}
                className="border p-1 rounded"
              >
                <option value="">선택</option>
                <option value="운영중">운영중</option>
                <option value="점검중">점검중</option>
                <option value="폐쇄">폐쇄</option>
              </select>
            ) : (
              farm.status || "-"
            )}
          </div>
        </div>

        {/* 수정완료 / 취소 버튼 */}
        {isEditing && (
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              수정 완료
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-400 text-white rounded-md"
            >
              취소
            </button>
          </div>
        )}
      </section>

      {/* 구역 정보 */}
      <AdminFarmSection farmId={id} />
    </div>
  );
};

export default AdminFarmDetail;
