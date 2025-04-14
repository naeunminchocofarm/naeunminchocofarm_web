import React, { useEffect, useState } from 'react'
import memberApi from '../../../members/api/member_api';

const MemberList = () => {
  const [selected, setSelected] = useState([]);
  const [memberList, setMemberList] = useState([]);

  const fetchMembers = async () => {
    try {
      const res = await memberApi.getMemList(); // () 호출!
      setMemberList(res.data); // 예: Axios 응답 구조에 따라 조정
    } catch (error) {
      console.error("멤버 리스트 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const toggleSelectAll = () => {
    if (selected.length === memberList.length) {
      setSelected([]);
    } else {
      setSelected(memberList.map((u) => u.id));
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* SECTION TOOLTIP */}
      <section className="text-sm text-gray-500">
        회원 정보를 관리할 수 있는 페이지입니다.
      </section>

      {/* SECTION TABLE-INFO */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold">총 회원 수: {memberList.length}명</div>
        <input
          type="text"
          placeholder="이름, 아이디 검색"
          className="border px-3 py-1 rounded-md text-sm"
        />
      </div>

      {/* SECTION TABLE-AREA */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-green-100 text-sm">
            <tr className="text-left">
              <th className="px-4 py-2 border-b">
                <input type="checkbox" checked={()=>{toggleSelectAll()}}/>
              </th>
              <th className="px-4 py-2 border-b">권한</th>
              <th className="px-4 py-2 border-b">이름</th>
              <th className="px-4 py-2 border-b">아이디</th>
              <th className="px-4 py-2 border-b">이메일</th>
              <th className="px-4 py-2 border-b">전화번호</th>
              <th className="px-4 py-2 border-b">스마트팜 운영</th>
              <th className="px-4 py-2 border-b">가입일</th>
              <th className="px-4 py-2 border-b">탈퇴일</th>
              <th className="px-4 py-2 border-b">설정</th>
            </tr>
          </thead>
          <tbody>
            {
              memberList.length > 0 ?
              memberList.map((member, idx) => (
                <tr key={idx} className="bg-white text-sm hover:bg-gray-50">
                <td className="px-4 py-3 border-b">
                  <input type="checkbox" checked={()=>{toggleSelect()}}/>
                </td>
                <td className="px-4 py-3 border-b">{member.role}</td>
                <td className="px-4 py-3 border-b">{member.name}</td>
                <td className="px-4 py-3 border-b">{member.loginId}</td>
                <td className="px-4 py-3 border-b">{member.email}</td>
                <td className="px-4 py-3 border-b">{member.tell}</td>
                <td className="px-4 py-3 border-b">운영중{/*members.smartFarm ? "운영중" : "미운영"*/}</td>
                <td className="px-4 py-3 border-b">{member.createAt}</td>
                <td className="px-4 py-3 border-b">{member.deleteAt || "-"}</td>
                <td className="px-4 py-3 border-b">
                  <button className="text-blue-600 hover:underline">보기</button>
                </td>
              </tr>
              ))
              :
              <td className="bg-white text-sm p-4 text-center" colSpan={11}>등록된 회원이 없습니다.</td>
            }
          </tbody>
        </table>

      </div>

      {/* SECTION TABLE-SETTING */}
      <div className="flex justify-end gap-2">
        <button className="bg-green-200 hover:bg-gray-300 px-4 py-1 rounded">
          생성
        </button>
        <button className="bg-yellow-300 hover:bg-yellow-400 px-4 py-1 rounded">
          수정
        </button>
        <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded">
          삭제
        </button>
      </div>

      {/* SECTION PAGINATION */}
      <div className="flex justify-center items-center gap-2 pt-4">
        <button className="px-2 py-1">〈</button>
        <button className="font-bold text-green-600">1</button>
        <button className="px-2 py-1">2</button>
        <button className="px-2 py-1">3</button>
        <button className="px-2 py-1">〉</button>
      </div>
    </div>
  );
}

export default MemberList