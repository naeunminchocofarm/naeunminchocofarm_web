import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { axiosInstance } from "../../members/apis/axiosInstance";

// ✅ 공통 스타일 상단 정의
const sectionStyle = "bg-white rounded-xl shadow p-6";
const tableStyle = "w-full text-sm";
const thStyle = "text-left py-1 w-32";
const tdStyle = "py-1";
const titleStyle = "text-base font-semibold mb-4 border-b pb-1";

const ServiceApplyDetail = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail({
      id: 1,
      member: {
        id: "hong123",
        name: "홍길동",
        email: "hong@example.com",
        tell: "010-1234-5678",
      },
      type: "개인사업자",
      isOperating: "yes",
      contactTell: "010-4321-9876",
      applicationDate: "2025-04-15T10:30:00",
      serviceStatus: { id: 0, status: "상담대기" },
      memo: "관리자 확인 완료 후 상담 진행 예정입니다.",
      content: "스마트팜 장비 설치 문의 - 경기도 성남시",
    });
  }, []);

  if (!detail) return <p className="p-4">로딩 중...</p>;

  return (
    <div className="p-6 space-y-8">
      {/* 🔵 상태 설명 박스 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm">
        <p className="font-semibold mb-2">📌 상태 코드 안내</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><strong>0</strong> - 상담대기</li>
          <li><strong>1</strong> - 상담중</li>
          <li><strong>2</strong> - 상담완료</li>
          <li><strong>3</strong> - 상담취소</li>
        </ul>
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
              <th className={thStyle}>운영 여부</th>
              <td className={tdStyle}>{detail.isOperating === "yes" ? "예" : "아니오"}</td>
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
