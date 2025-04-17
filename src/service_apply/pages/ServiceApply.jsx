import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../members/apis/axiosInstance";
import { isAuthenticated } from "../../members/apis/authCheck";

const ServiceApply = () => {
  const nav = useNavigate();

  const [form, setForm] = useState({
    type: "",
    contactTell: "",
    content: "",
  });

  const [userInfo, setUserInfo] = useState({}); // 사용자 정보

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const loginInfo = JSON.parse(localStorage.getItem("loginInfo"))

    if (!token || !isAuthenticated(token) || !loginInfo) {
      alert("로그인 후 이용해 주세요.");
      nav("/web/login");
    } else {
      console.log("회원정보:", loginInfo); // 여기서 확인
      setUserInfo(loginInfo);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const applySubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/api/service/apply", form);
      alert("신청이 완료되었습니다.");
      nav("/user");
    } catch (err) {
      console.error("신청 실패:", err);
      alert("신청에 실패했습니다.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-center">
          스마트팜 서비스 신청
        </h3>

        {/* 사용자 정보 표시 */}
        <section className="bg-gray-50 rounded-md p-4 text-sm border">
          <h4 className="font-semibold mb-2 text-base">👤 회원 기본 정보</h4>
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left w-28 py-1">이름</th>
                <td className="py-1">{userInfo.name}</td>
                <th className="text-left w-28 py-1">아이디</th>
                <td className="py-1">{userInfo.loginId}</td>
              </tr>
              <tr>
                <th className="text-left py-1">이메일</th>
                <td className="py-1">{userInfo.email}</td>
                <th className="text-left py-1">전화번호</th>
                <td className="py-1">{userInfo.tell}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 신청 폼 */}
        <form onSubmit={applySubmit} className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold mb-1">신청자 유형</label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="법인"
                  checked={form.type === "법인"}
                  onChange={handleChange}
                  required
                />
                법인
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="개인사업자"
                  checked={form.type === "개인사업자"}
                  onChange={handleChange}
                />
                개인사업자
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="개인"
                  checked={form.type === "개인"}
                  onChange={handleChange}
                />
                개인
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">실무자 연락처</label>
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
              placeholder="상담 내용을 작성해 주세요"
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
