import React from 'react'

const AdminFarmApplyList = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">스마트팜 신청관리</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="신청자 이름"
          className="border px-4 py-2 rounded"
        />
        <select className="border px-4 py-2 rounded">
          <option>상태 전체</option>
          <option>접수</option>
          <option>상담중</option>
          <option>승인</option>
          <option>반려</option>
        </select>
      </div>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-green-100">
          <tr>
            <th className="p-3 text-left">신청자</th>
            <th className="p-3 text-left">신청일</th>
            <th className="p-3 text-left">작물</th>
            <th className="p-3 text-left">농장크기</th>
            <th className="p-3 text-left">상태</th>
            <th className="p-3 text-left">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">홍길동</td>
            <td className="p-3">2025-04-01</td>
            <td className="p-3">상추, 오이</td>
            <td className="p-3">300㎡</td>
            <td className="p-3">상담중</td>
            <td className="p-3 text-blue-500 hover:underline cursor-pointer">보기</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-500">페이지네이션 영역</div>
    </>
  )
}

export default AdminFarmApplyList