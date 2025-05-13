// src/pages/mypage/MyApplyCompo.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BadgeCompo from "../../common_components/BadgeCompo";
import serviceApi from "../../service_apply/apis/service_api";
import UserTitle from "../../header/UserTitle";

const MyApplyCompo = () => {
  const [openId, setOpenId] = useState(null);
  const [applyList, setApplyList] = useState([]);

  const fetchServiceApply = async () => {
      const res = await serviceApi.getMyServiceApplyList();
      setApplyList(res.data);
  };

  useEffect(() => {
    fetchServiceApply();
  }, []);

  const toggleDetail = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const getStatusType = (status) => {
    switch (status) {
      case "상담대기": return "warning";
      case "상담중": return "info";
      case "상담완료": return "success";
      case "상담취소": return "danger";
      default: return "default";
    }
  };

  return (
    <div className="px-6 py-6 mx-auto">
      <UserTitle pageTitle={"서비스 신청 관리"}/>
      <div className="flex justify-end">
        <Link
          to="/web/serviceApply"
          className="text-sm text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          서비스 신청 바로가기
        </Link>
      </div>

      <table className="w-full border-collapse text-sm shadow rounded overflow-hidden">
        <thead className="bg-green-100">
          <tr>
            <th className="px-4 py-2 border">번호</th>
            <th className="px-4 py-2 border">이메일</th>
            <th className="px-4 py-2 border">신청자 유형</th>
            <th className="px-4 py-2 border">실무자 연락처</th>
            <th className="px-4 py-2 border">신청일</th>
            <th className="px-4 py-2 border">상태</th>
            <th className="px-4 py-2 border">상세보기</th>
          </tr>
        </thead>
        <tbody>
        {applyList.length > 0 ? (
        applyList.map((item, i) => (
          <React.Fragment key={item.id}>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border text-center">{i + 1}</td>
              <td className="px-4 py-2 border">{item.memberEmail}</td>
              <td className="px-4 py-2 border text-center">{item.type}</td>
              <td className="px-4 py-2 border text-center">{item.contactTell}</td>
              <td className="px-4 py-2 border text-center">{item.applicationAt}</td>
              <td className="px-4 py-2 border text-center">
                <BadgeCompo label={item.status} type={getStatusType(item.status)} />
              </td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => toggleDetail(item.id)}
                  className="text-blue-600 underline text-sm hover:text-blue-800"
                >
                  {openId === item.id ? "닫기" : "상세보기"}
                </button>
              </td>
            </tr>
            {openId === item.id && (
              <tr className="bg-gray-50">
                <td colSpan={7} className="px-4 py-3 border-t text-sm text-gray-700">
                  <strong>상담 내용:</strong> {item.content}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="text-center text-sm text-gray-500 py-6">
            등록된 신청이 없습니다.
          </td>
        </tr>
      )}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplyCompo;
