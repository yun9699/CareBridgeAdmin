import React from "react";

function CareGiverReadSelectComponent({ onSelectInfo }) {

    const handleButtonClick = (infoType) => {
        onSelectInfo(infoType); // 클릭한 버튼에 따라 상태 업데이트
    };

    return (
        <div className="flex justify-center mb-4">
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-l hover:bg-blue-600 transition duration-150"
                onClick={() => handleButtonClick("profile")}
            >
                사용자 정보
            </button>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 transition duration-150"
                onClick={() => handleButtonClick("matched")}
            >
                매칭 기록
            </button>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 transition duration-150"
                onClick={() => handleButtonClick("가입일")}
            >
                가입일
            </button>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 transition duration-150"
                onClick={() => handleButtonClick("권한")}
            >
                권한
            </button>
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 transition duration-150"
                onClick={() => handleButtonClick("추가 정보")}
            >
                추가 정보
            </button>
        </div>
    );
}

export default CareGiverReadSelectComponent;
