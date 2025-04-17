import React from "react";
const dummyData = [
  { id: 1, date: "2025-04-10", status: "상담대기", content: "하우스 설치 문의입니다." },
  { id: 2, date: "2025-04-12", status: "상담중", content: "센서 연동 가능 여부를 알고싶습니다." },
];
const MyApply = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetail = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="space-y-2">
      <table className="w-full border-collapse shadow rounded overflow-hidden text-sm">
        <thead className="bg-green-100">
          <tr>
            <th className="px-4 py-2 border">번호</th>
            <th className="px-4 py-2 border">신청일</th>
            <th className="px-4 py-2 border">상태</th>
            <th className="px-4 py-2 border">내용</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, idx) => (
            <>
              <tr
                key={item.id}
                className="bg-white hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleDetail(item.id)}
              >
                <td className="px-4 py-2 border">{idx + 1}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">{item.status}</td>
                <td className="px-4 py-2 border">{item.content.slice(0, 10)}...</td>
              </tr>
              {openId === item.id && (
                <tr>
                  <td colSpan="4" className="bg-gray-50 px-4 py-3 text-sm">
                    <strong>상세 내용:</strong> {item.content}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
};

export default MyApply;
