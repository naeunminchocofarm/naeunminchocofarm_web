import React from "react";

// 공통 스타일
const boxStyle = "bg-white rounded-xl shadow p-4 space-y-2 overflow-y-auto max-h-[500px]";
const itemStyle = "border rounded-md px-3 py-2 hover:bg-gray-50 transition";
const badgeStyle = "inline-block text-xs px-2 py-0.5 rounded bg-red-100 text-red-600";

const dummyIssues = [
  { id: 1, farm: "김포스마트팜", zone: "1구역", issue: "물 부족", time: "10분 전" },
  { id: 2, farm: "김포스마트팜", zone: "3구역", issue: "센서 오류", time: "1시간 전" },
  { id: 3, farm: "청주팜", zone: "전체", issue: "멧돼지 출몰", time: "어제" },
  { id: 4, farm: "안산스마트팜", zone: "2구역", issue: "물 줬다", time: "방금" },
  { id: 5, farm: "전주팜", zone: "1구역", issue: "조도 이상", time: "30분 전" },
  // 최대 30개까지 더미 추가 가능
];

const FarmIssueList = () => {
  return (
    <div className={boxStyle}>
      <h4 className="text-base font-semibold mb-2">⚠️ 최근 이슈</h4>
      {dummyIssues.length > 0 ? (
        dummyIssues.map((item) => (
          <div key={item.id} className={itemStyle}>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.farm} - {item.zone}</span>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
            <div className="text-sm mt-1 flex items-center gap-2">
              <span className={badgeStyle}>{item.issue}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-sm text-center py-2">(최근 이슈 없음)</p>
      )}
    </div>
  );
};

export default FarmIssueList;
