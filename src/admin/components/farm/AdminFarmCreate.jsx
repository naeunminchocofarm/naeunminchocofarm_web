import React, { useState } from "react";
import adminApi from "../../apis/admin_api";

const AdminFarmCreate = () => {
  const [form, setForm] = useState({
    farmName: "",
    farmAddr: "",
    useDate: "",      // 선택 가능 (null 허용)
    crop: "",
    loginId: "",
    status: "운영중", // 기본값 설정
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.farmName.trim() || !form.farmAddr.trim()) {
      alert("스마트팜 이름과 주소는 필수 입력 항목입니다.");
      return;
    }

    if (!form.loginId.trim()) {
      alert("회원 ID는 필수 입력 항목입니다.");
      return;
    }

    if (!form.status.trim()) {
      alert("상태를 선택해주세요.");
      return;
    }

    const payload = {
      farmName: form.farmName,
      farmAddr: form.farmAddr,
      useDate: form.useDate ? form.useDate + "T00:00:00Z" : null, // 
      crop: form.crop,
      status: form.status,
      member: {
        loginId: form.loginId,
      },
    };

    console.log(payload);

    try {
      await adminApi.insertFarm(payload);
      alert("스마트팜이 성공적으로 등록되었습니다.");
      window.opener.postMessage("refreshFarms", "*");
      window.close();
    } catch (err) {
      console.error("등록 실패:", err);
      alert("등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-6">스마트팜 등록</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block mb-1 font-medium">스마트팜 이름</label>
          <input
            type="text"
            name="farmName"
            value={form.farmName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">회원 ID</label>
          <input
            type="text"
            name="loginId"
            value={form.loginId}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">주소</label>
          <input
            type="text"
            name="farmAddr"
            value={form.farmAddr}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">이용 시작일</label>
          <input
            type="date"
            name="useDate"
            value={form.useDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="선택하지 않으면 공란"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">작물</label>
          <input
            type="text"
            name="crop"
            value={form.crop}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">상태</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="" disabled>상태 선택</option>
            <option value="운영중">운영중</option>
            <option value="점검중">점검중</option>
            <option value="운영종료">운영종료</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AdminFarmCreate;
