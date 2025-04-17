import React from "react";
import UserProfileBox from "../../components/user/UserProfileBox";
import FarmIssueList from "../../components/user/FarmIssueList";

const UserMain = () => {
    return(
        <>
        {/* <aside className="w-64 bg-white shadow">
            <SidebarMenu />
        </aside>
        <main className="flex-1 p-6 space-y-6 overflow-auto bg-gray-50">
            <SummaryStats />
            <FarmFilterBar />
            <FarmCardList />
            <FarmAddRequestArea />
        </main>
         */}
        <div className="flex h-screen bg-gray-50 text-sm">

        {/* 중앙 본문 영역 */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* 상단 요약 카드 */}
            <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-900 text-white rounded-xl p-4 shadow">
                <div className="text-sm">총 농장 수</div>
                <div className="text-xl font-bold">5개</div>
            </div>
            <div className="bg-gray-900 text-white rounded-xl p-4 shadow">
                <div className="text-sm">운영중 농장</div>
                <div className="text-xl font-bold">3개</div>
            </div>
            <div className="bg-gray-900 text-white rounded-xl p-4 shadow">
                <div className="text-sm">센서 경고</div>
                <div className="text-xl font-bold text-red-400">1건</div>
            </div>
            </div>

            {/* 검색/필터 */}
            <div className="flex justify-between items-center">
            <input
                type="text"
                placeholder="농장명 검색"
                className="border px-3 py-1 rounded-md"
            />
            <select className="border px-2 py-1 rounded">
                <option>전체 보기</option>
                <option>운영중</option>
                <option>비운영</option>
            </select>
            </div>

            {/* 농장 카드 리스트 */}
            <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white shadow rounded-xl p-4 space-y-1">
                <div className="text-lg font-semibold">🌾 스마트팜 {i}호</div>
                <div>구역: 3</div>
                <div>온도: 22.3°C</div>
                <div>상태: <span className="text-green-600 font-bold">정상</span></div>
                <button className="text-blue-600 hover:underline text-sm mt-2">
                    상세보기
                </button>
                </div>
            ))}
            </div>

            {/* 더보기 버튼 */}
            <div className="flex justify-center">
            <button className="text-sm text-gray-500 hover:underline">
                농장 더보기 ▼
            </button>
            </div>

            {/* 농장 추가 요청 영역 */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mt-6">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                ➕ 농장 설치 요청
            </button>
            <div className="space-x-3 text-sm text-gray-600">
                <a href="#" className="hover:underline">스마트팜 설치 안내</a>
                <a href="#" className="hover:underline">FAQ</a>
            </div>
            </div>
        </main>

        <aside className="w-72 shadow px-4 py-6 space-y-4">
            <UserProfileBox />
            <FarmIssueList />
        </aside>
        </div>
        </>
    );
}
export default UserMain;