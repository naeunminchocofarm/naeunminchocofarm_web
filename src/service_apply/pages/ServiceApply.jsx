import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../members/apis/axiosInstance";
import { isAuthenticated } from "../../members/apis/authCheck";


const ServiceApply = () => {
  const [form, setForm] = useState({
    type: "",
    isOperating: "no",
    contactTell: "",
    content: "",
  });
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token || !isAuthenticated(token)) {
      alert("회원가입 후 이용 가능합니다.");
      nav("/web/login");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/service/apply", form);
      alert("신청이 완료되었습니다.");
      nav("/user"); // 완료 후 이동
    } catch (err) {
      console.error("신청 실패:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-xl font-bold text-center">스마트팜 서비스 신청</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold mb-1">신청자 유형</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">-- 선택 --</option>
              <option value="농업인">농업인</option>
              <option value="예비농">예비농</option>
              <option value="일반인">일반인</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              스마트팜 운영 여부
            </label>
            <select
              name="isOperating"
              value={form.isOperating}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="no">운영하지 않음</option>
              <option value="yes">운영 중</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">연락처</label>
            <input
              type="text"
              name="contactTell"
              value={form.contactTell}
              onChange={handleChange}
              required
              placeholder="010-0000-0000"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">상담 내용</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={5}
              required
              placeholder="상담 내용을 작성해주세요"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            신청하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceApply;
