import React, { useEffect, useState } from 'react'
import memberApi from '../apis/member_api';
import UserTitle from '../../header/UserTitle';

const MyPageCompo = () => {
  const [editMode, setEditMode] = useState(false);
  const [myInfo, setMyInfo] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    emailVerified: false,
  });

  useEffect(() => {
    memberApi.getMemInfo()
      .then(res => setMyInfo(res.data));
  }, []);

  const handleChange = e => {
    setMyInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEditMode(false);
  };

  const labelStyle = "block font-semibold mb-2 text-gray-700";
  const inputStyle = "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300";
  const divStyle = "";
  const buttonStyle = "bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600";
  const cancelStyle = "text-red-500 border border-red-300 hover:bg-red-50 py-2 px-6 rounded";
  const editButtonWrapperStyle = "flex justify-end mb-4";
  const editButtonStyle = "bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600";
  
  return (
    <div className='px-6 py-6 max-w-6xl mx-auto'>
      <UserTitle pageTitle={"마이페이지"}/>
    <div className='cont-area'>
      {!editMode && (
        <div className={editButtonWrapperStyle}>
          <button
            onClick={() => setEditMode(true)}
            className={editButtonStyle}
          >
            수정하기
          </button>
        </div>
      )}
  
      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelStyle}>아이디</label>
        <div className={divStyle}>{myInfo.loginId}</div>
      </div>

      <div>
        <label className={labelStyle}>이름</label>
        {editMode ? (
          <input
            name="name"
            value={myInfo.name}
            onChange={handleChange}
            className={inputStyle}
          />
        ) : (
          <div className={divStyle}>{myInfo.name}</div>
        )}
      </div>

      <div>
        <label className={labelStyle}>이메일</label>
        {editMode ? (
          <div className="flex items-center space-x-2">
            <input
              name="email"
              value={myInfo.email}
              onChange={handleChange}
              className={inputStyle}
            />
            <button
              type="button"
              className="border border-blue-500 text-blue-600 text-sm px-3 py-2 rounded hover:bg-blue-50 transition"
              onClick={() => {
                // TODO: 이메일 인증 요청 API 호출
                console.log("이메일 인증 요청:", myInfo.email);
              }}
            >
              이메일 인증
            </button>
          </div>
        ) : (
          <div className={divStyle}>{myInfo.email}</div>
        )}
      </div>

      <div>
        <label className={labelStyle}>전화번호</label>
        {editMode ? (
          <input
            name="tell"
            value={myInfo.tell}
            onChange={handleChange}
            className={inputStyle}
          />
        ) : (
          <div className={divStyle}>{myInfo.tell}</div>
        )}
      </div>
  
        {editMode && (
          <div className="flex justify-between pt-6">
            <button type="button" onClick={() => setEditMode(false)} className={cancelStyle}>
              취소하기
            </button>
            <button type="submit" className={buttonStyle}>
              수정 완료
            </button>
          </div>
        )}
      </form>
    </div>
    </div>
  );
  
};

  
  export default MyPageCompo;