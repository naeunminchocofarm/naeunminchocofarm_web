import React from "react";
import Card from "../../common_components/Card";
import profileImage from "../../assets/images/layouts/mem-farmer.png";
import { useAuthInfo } from "../../hooks/AuthInfo";

const buttonStyle = "w-full py-1 rounded text-sm";
const logoutBtnStyle = `${buttonStyle} bg-white text-red-600 border border-red-500 hover:bg-red-50`;
const mypageBtnStyle = `${buttonStyle} bg-green-500 hover:bg-green-600 text-white`;

const UserProfileBox = () => {
  
  const { logout } = useAuthInfo();

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

      <div className="space-y-2 pt-2">
      <button
        onClick={() => window.location.href = "/user/mypage"}
        className={mypageBtnStyle}
      >
        마이페이지
      </button>

      <button
        onClick={logout}
        className={logoutBtnStyle}
      >
        로그아웃
      </button>
      </div>
    </Card>
  );
};

export default UserProfileBox;
