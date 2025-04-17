import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import serviceApi from "../apis/service_api";


const sectionStyle = "bg-white rounded-xl shadow p-6";
const tableStyle = "w-full text-sm";
const thStyle = "text-left py-1 w-32";
const tdStyle = "py-1";
const titleStyle = "text-base font-semibold mb-4 border-b pb-1";

const ServiceApplyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  const fetchServiceApply = async () => {
    try {
      const res = await serviceApi.getServiceApplyDetail();
      setDetail(res.data);
    } catch (error) {
      console.error("서비스 신청 목록 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchServiceApply();
  }, [id]);

  if (!detail) return <p className="p-4">로딩 중...</p>;

  return (
    <div className="p-6 space-y-8">
      {/* 🔵 상태 설명 박스 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
        <p className="font-semibold mb-2">📌 상태 코드 안내</p>

      </div>

      {/* 👤 회원 및 기본 정보 */}
      <section className={sectionStyle}>
        <h4 className={titleStyle}>👤 회원 및 기본 정보</h4>
        <table className={tableStyle}>
          <tbody>
            <tr>
              <th className={thStyle}>신청 상태</th>
              <td className={tdStyle}>{detail.serviceStatus?.status}</td>
              <th className={thStyle}>신청일</th>
              <td className={tdStyle}>{detail.applicationDate?.slice(0, 10)}</td>
            </tr>
            <tr>
              <th className={thStyle}>이름</th>
              <td className={tdStyle}>{detail.member?.name}</td>
              <th className={thStyle}>아이디</th>
              <td className={tdStyle}>{detail.member?.id}</td>
            </tr>
            <tr>
              <th className={thStyle}>이메일</th>
              <td className={tdStyle}>{detail.member?.email}</td>
              <th className={thStyle}>전화번호</th>
              <td className={tdStyle}>{detail.member?.tell}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 📝 신청 정보 */}
      <section className={sectionStyle}>
        <h4 className={titleStyle}>📝 신청 정보</h4>
        <table className={tableStyle}>
          <tbody>
            <tr>
              <th className={thStyle}>신청자 유형</th>
              <td className={tdStyle}>{detail.type}</td>
            </tr>
            <tr>
              <th className={thStyle}>실무자 연락처</th>
              <td className={tdStyle} colSpan={3}>{detail.contactTell}</td>
            </tr>
            <tr>
              <th className={`${thStyle} align-top`}>상담 내용</th>
              <td className={tdStyle} colSpan={3}>
                <div className="whitespace-pre-line">{detail.content}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 🗂️ 관리자 메모 */}
      <section className={sectionStyle}>
        <h4 className={titleStyle}>🗂️ 관리자 메모</h4>
        <table className={tableStyle}>
          <tbody>
            <tr>
              <th className={thStyle}>메모 내용</th>
              <td className={tdStyle}>{detail.memo || "(없음)"}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 하단 버튼 */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          onClick={() => navigate("/admin/serviceApply")}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm"
        >
          목록으로
        </button>
        <button
          onClick={() => navigate(`/admin/serviceApply/write/${detail.id}`)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default ServiceApplyDetail;
