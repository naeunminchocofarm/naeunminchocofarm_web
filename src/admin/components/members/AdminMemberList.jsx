import React from 'react'

const AdminMemberList = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">회원관리</h2>

<div className="flex justify-between mb-4">
  <input
    type="text"
    placeholder="이름 또는 아이디 검색"
    className="border px-4 py-2 rounded w-1/3"
  />
</div>

<table className="w-full bg-white shadow rounded-xl overflow-hidden">
  <thead className="bg-green-100">
    <tr>
      <th className="p-3 text-left">아이디</th>
      <th className="p-3 text-left">이름</th>
      <th className="p-3 text-left">가입일</th>
      <th className="p-3 text-left">등급</th>
      <th className="p-3 text-left">상태</th>
      <th className="p-3 text-left">관리</th>
    </tr>
  </thead>
  <tbody>
    {/* 반복될 리스트 */}
    <tr className="border-t">
      <td className="p-3">minchoco123</td>
      <td className="p-3">나은민</td>
      <td className="p-3">2024-12-01</td>
      <td className="p-3">일반</td>
      <td className="p-3">정상</td>
      <td className="p-3 text-blue-500 hover:underline cursor-pointer">상세</td>
    </tr>
  </tbody>
</table>

<div className="mt-6 text-sm text-gray-500">페이지네이션 영역</div>
    </>
  )
}

export default AdminMemberList