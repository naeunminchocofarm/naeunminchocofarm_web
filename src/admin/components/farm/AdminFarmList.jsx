import React from 'react'
import AdminFarmDetail from './AdminFarmDetail'

const AdminFarmList = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">농장관리</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="회원 이름 또는 농장명"
          className="border px-4 py-2 rounded w-1/3"
        />
      </div>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-green-100">
          <tr>
            <th className="p-3 text-left">회원</th>
            <th className="p-3 text-left">농장명</th>
            <th className="p-3 text-left">주소</th>
            <th className="p-3 text-left">구역</th>
            <th className="p-3 text-left">작물</th>
            <th className="p-3 text-left">운영 상태</th>
            <th className="p-3 text-left">관리</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">김영희</td>
            <td className="p-3">영희팜</td>
            <td className="p-3">경기도 수원시</td>
            <td className="p-3">500㎡</td>
            <td className="p-3">토마토</td>
            <td className="p-3">운영중</td>
            <td className="p-3 text-blue-500 hover:underline cursor-pointer">편집</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-500">페이지네이션 영역</div>

      <AdminFarmDetail/>
    </>
  )
}

export default AdminFarmList