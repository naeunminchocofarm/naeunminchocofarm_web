import React, { useEffect, useState } from "react";
import memberApi from "../../../members/apis/member_api";

// 💡 공통 스타일 정의
const tdStyle = "px-4 py-3 border-b";
const thStyle = "px-4 py-2 border-b";
const tableRowStyle = "bg-white text-sm hover:bg-gray-50";
const noDataStyle = "bg-white text-sm p-4 text-center";

const MemberList = () => {
  const [memberList, setMemberList] = useState([]);

  const fetchMembers = async () => {
    const res = await memberApi.getMemList();
    setMemberList(res.data);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const changeRoleToStr = (id) => {
    if(id === 1) return '사용자'
    else if (id === 2) return '농장주'
    else return '관리자'
  }

  return (
    <div className="p-6 space-y-6">
      {/* 안내 */}
      <section className="text-sm text-gray-500">
        회원 정보를 관리할 수 있는 페이지입니다.
      </section>

      {/* 상단 요약 + 검색 */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold">총 회원 수: {memberList.length}명</div>
        <input
          type="text"
          placeholder="이름, 아이디 검색"
          className="border px-3 py-1 rounded-md text-sm"
        />
      </div>

      {/* 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-green-100 text-sm">
            <tr className="text-left">
              <th className={thStyle}><input type="checkbox" /></th>
              <th className={thStyle}>권한</th>
              <th className={thStyle}>이름</th>
              <th className={thStyle}>아이디</th>
              <th className={thStyle}>이메일</th>
              <th className={thStyle}>전화번호</th>
              <th className={thStyle}>스마트팜 운영</th>
              <th className={thStyle}>가입일</th>
              <th className={thStyle}>탈퇴일</th>
              <th className={thStyle}>설정</th>
            </tr>
          </thead>
          <tbody>
            {memberList.length > 0 ? memberList.map((member, idx) => (
              <tr key={idx} className={tableRowStyle}>
                <td className={tdStyle}><input type="checkbox" /></td>
                <td className={tdStyle}>{changeRoleToStr(member.role.roleFlag)}</td>
                <td className={tdStyle}>{member.name}</td>
                <td className={tdStyle}>{member.loginId}</td>
                <td className={tdStyle}>{member.email}</td>
                <td className={tdStyle}>{member.tell}</td>
                {/* 농장목록에 MEMID값이 있으면 운영중 아니면 운영아님 */}
                <td className={tdStyle}>운영중</td> 
                <td className={tdStyle}>{member.createAt}</td>
                <td className={tdStyle}>{member.deleteAt || "-"}</td>
                <td className={tdStyle}>
                  <button className="text-blue-600 hover:underline">보기</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={11} className={noDataStyle}>등록된 회원이 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-end gap-2">
        <button className="bg-green-200 hover:bg-gray-300 px-4 py-1 rounded">생성</button>
        <button className="bg-yellow-300 hover:bg-yellow-400 px-4 py-1 rounded">수정</button>
        <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded">삭제</button>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 pt-4">
        <button className="px-2 py-1">〈</button>
        <button className="font-bold text-green-600">1</button>
        <button className="px-2 py-1">2</button>
        <button className="px-2 py-1">3</button>
        <button className="px-2 py-1">〉</button>
      </div>
    </div>
  );
};

export default MemberList;
