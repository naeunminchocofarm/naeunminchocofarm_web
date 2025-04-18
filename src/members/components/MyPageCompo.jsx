import React from 'react'

const MyPageCompo = () => {
  return (
    <>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">이름</label>
          <input className="w-full border rounded px-3 py-2" placeholder="이름" />
        </div>
        <div>
          <label className="block font-semibold mb-1">이메일</label>
          <input className="w-full border rounded px-3 py-2" placeholder="이메일" />
        </div>
        <div>
          <label className="block font-semibold mb-1">전화번호</label>
          <input className="w-full border rounded px-3 py-2" placeholder="전화번호" />
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          수정하기
        </button>
    </form>
    </>
  )
}

export default MyPageCompo