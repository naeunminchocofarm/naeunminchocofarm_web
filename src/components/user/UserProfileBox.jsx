import React from "react";
import Card from "../../common_components/Card";
import profileImage from "../../assets/images/layouts/mem-farmer.png";

// ✅ 공통 스타일 정의
// const profileImageStyle = "w-12 h-12 rounded-full border object-cover";
// const badgeStyle = "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow";
const buttonStyle = "w-full py-1 rounded text-sm";
const mypageBtnStyle = `${buttonStyle} bg-green-500 hover:bg-green-600 text-white`;
const logoutBtnStyle = `${buttonStyle} bg-gray-200 hover:bg-gray-300 text-gray-800`;

const UserProfileBox = ({ user, onLogout }) => {
  return (
    <Card className="bg-white rounded-xl shadow p-4 space-y-3 text-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={profileImage} alt="스마트팜" className="h-10" />
        </div>
        <div>
          <div className="font-semibold text-base">김이름{/*user.name*/}</div>
          <div className="text-gray-500">"농장주"</div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="space-y-2 pt-2">
        <button
          onClick={() => window.location.href = "/user/mypage"}
          className={mypageBtnStyle}
        >
          마이페이지
        </button>
        <button
          onClick={onLogout}
          className={logoutBtnStyle}
        >
          로그아웃
        </button>
      </div>
    </Card>
  );
};

export default UserProfileBox;
