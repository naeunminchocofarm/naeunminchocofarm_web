import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceApi from "../apis/service_api";

// 공통 스타일
const tdStyle = "px-4 py-3 border-b";
const thStyle = "px-4 py-2 border-b";
const tableRowStyle = "bg-white text-sm hover:bg-gray-50";
const noDataStyle = "bg-white text-sm p-4 text-center";

const ServiceApplyList = () => {
  const [applyList, setApplyList] = useState([]);
  const nav = useNavigate();

  const fetchServiceApply = async () => {
    try {
      const res = await serviceApi.getServiceApplyList();
      setApplyList(res.data);
    } catch (error) {
      console.error("서비스 신청 목록 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchServiceApply();
  }, []);

  console.log(applyList);

  return (
    <div className="p-6 space-y-6">
      {/* 안내 */}
      <section className="text-sm text-gray-500">
        서비스 신청 내역을 확인하고 관리할 수 있습니다.
      </section>

      {/* 상단 요약 */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold">
          총 신청 수: {applyList.length}건
        </div>
        <input
          type="text"
          placeholder="이름, 이메일 검색"
          className="border px-3 py-1 rounded-md text-sm"
        />
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-green-100 text-sm">
            <tr className="text-center">
              <th className={thStyle}>
                <input type="checkbox" />
              </th>
              <th className={thStyle}>신청 ID</th>
              <th className={thStyle}>회원명</th>
              <th className={thStyle}>이메일</th>
              <th className={thStyle}>신청자 유형</th>
              <th className={thStyle}>상태</th>
              <th className={thStyle}>신청일</th>
              <th className={thStyle}>상세</th>
            </tr>
          </thead>
          <tbody>
            {applyList.length > 0 ? (
              applyList.map((item) => (
                <tr key={item.id} className={tableRowStyle + " text-center"}>
                  <td className={tdStyle}>
                    <input type="checkbox" />
                  </td>
                  <td className={tdStyle}>{item.id}</td>
                  <td className={tdStyle}>{item.memberName}</td>
                  <td className={tdStyle}>{item.memberEmail}</td>
                  <td className={tdStyle}>{item.type}</td>
                  <td className={tdStyle}>
                    {item.isOperating === "yes" ? "예" : "아니오"}
                  </td>
                  <td className={tdStyle}>
                    {item.applicationDate?.slice(0, 10)}
                  </td>
                  <td className={tdStyle}>
                    <button
                      onClick={() => nav(`/admin/service/${item.id}`)}
                      className="text-blue-600 hover:underline"
                    >
                      보기
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className={noDataStyle}>
                  등록된 신청이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceApplyList;
