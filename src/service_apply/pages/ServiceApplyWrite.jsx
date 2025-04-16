import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axiosInstance from "@/utils/axiosInstance";

const ServiceApplyWrite = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    statusId: 0,
    type: "",
    isOperating: "",
    contactTell: "",
    content: "",
    memo: "",
  });

  // ❗ 추후 백엔드 연동되면 API로 불러올 부분
  useEffect(() => {
    // axiosInstance.get(`/api/service/admin/detail/${id}`).then((res) => setForm(...))
    // 더미로 먼저 세팅
    setForm({
      statusId: 1,
      type: "법인",
      isOperating: "no",
      contactTell: "010-0000-0000",
      content: "지역: 대전\n기기 견적 요청",
      memo: "상담 진행 중",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // 추후 PUT 연동 예정
    console.log("수정 데이터:", form);
    alert("수정 완료 (임시)");
    navigate("/admin/service");
  };

  return (
    <div className="p-6 space-y-8">
      <h3 className="text-lg font-bold">🛠️ 서비스 신청 정보 수정</h3>

      <section className="bg-white rounded-xl shadow p-6 mb-8">
        <h4 className="text-base font-semibold mb-4 border-b pb-1">👤 회원 및 기본 정보</h4>
        <table className="w-full text-sm">
            <tbody>
            <tr>
                <th className="text-left py-1 w-32">이름</th>
                <td className="py-1">{detail.member?.name}</td>
                <th className="text-left py-1 w-32">아이디</th>
                <td className="py-1">{detail.member?.id}</td>
            </tr>
            <tr>
                <th className="text-left py-1">이메일</th>
                <td className="py-1">{detail.member?.email}</td>
                <th className="text-left py-1">전화번호</th>
                <td className="py-1">{detail.member?.tell}</td>
            </tr>
            </tbody>
        </table>
        </section>

      {/* 신청 정보 */}
      <section className="bg-white rounded-xl shadow p-6">
        <h4 className="text-base font-semibold mb-4 border-b pb-1">📝 신청 정보 수정</h4>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <th className="text-left w-32 py-1">상담 상태</th>
              <td className="py-1">
                <select name="statusId" value={form.statusId} onChange={handleChange}
                  className="border px-2 py-1 rounded text-sm">
                  <option value="0">상담대기</option>
                  <option value="1">상담중</option>
                  <option value="2">상담완료</option>
                  <option value="3">상담취소</option>
                </select>
              </td>
              <th className="text-left w-32 py-1">신청자 유형</th>
              <td className="py-1">
                <select name="type" value={form.type} onChange={handleChange}
                  className="border px-2 py-1 rounded text-sm">
                  <option value="법인">법인</option>
                  <option value="개인사업자">개인사업자</option>
                  <option value="개인">개인</option>
                </select>
              </td>
            </tr>
            <tr>
              <th className="text-left py-1">운영 여부</th>
              <td className="py-1">
                <label className="mr-4">
                  <input type="radio" name="isOperating" value="yes"
                    checked={form.isOperating === "yes"} onChange={handleChange} />
                  <span className="ml-1">예</span>
                </label>
                <label>
                  <input type="radio" name="isOperating" value="no"
                    checked={form.isOperating === "no"} onChange={handleChange} />
                  <span className="ml-1">아니오</span>
                </label>
              </td>
              <th className="text-left py-1">담당자 연락처</th>
              <td className="py-1">
                <input
                  type="text"
                  name="contactTell"
                  value={form.contactTell}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1"
                  placeholder="010-0000-0000"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left py-1 align-top">상담 내용</th>
              <td className="py-1" colSpan={3}>
                <textarea
                  name="content"
                  rows={4}
                  value={form.content}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 메모 수정 */}
      <section className="bg-white rounded-xl shadow p-6">
        <h4 className="text-base font-semibold mb-4 border-b pb-1">🗂️ 관리자 메모 수정</h4>
        <textarea
          name="memo"
          rows={4}
          value={form.memo}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </section>

      {/* 하단 버튼 */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm"
        >
          취소
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default ServiceApplyWrite;
