import React from "react";

function CareGiverReadComponent() {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">관리자 페이지 - 정보 확인</h2>

            {/* 정보 섹션 */}
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-500 font-medium mb-1">사용자 이름</label>
                        <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">Name</p>
                    </div>
                    <div>
                        <label className="block text-gray-500 font-medium mb-1">이메일</label>
                        <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">Email</p>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-500 font-medium mb-1">가입일</label>
                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">가입일</p>
                </div>
                <div>
                    <label className="block text-gray-500 font-medium mb-1">권한</label>
                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">Role</p>
                </div>
            </div>

            {/* 버튼 섹션 */}
            <div className="flex justify-end space-x-4 mt-8">
                <button
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={() => console.log("수정하기")}
                >
                    수정하기
                </button>
                <button
                    className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={() => console.log("삭제하기")}
                >
                    삭제하기
                </button>
            </div>
        </div>
    );
}

export default CareGiverReadComponent;
