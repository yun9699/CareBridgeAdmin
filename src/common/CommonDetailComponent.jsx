import React, {useEffect, useState} from 'react';
import {getCareGiverOne} from "@/api/caregiverAPI.js";

const init = {
    list: []
}

function CommonDetailComponent({ isOpen, onClose, no, type }) {

    const [data, setData] = useState(init);

    if (!isOpen) return null; // 모달이 열려 있을 때만 렌더링

    useEffect(() => {

        if (no) {
            getCareGiverOne(no).then(response => {
                setData(response.list || []); // 응답에서 list를 가져와 상태 업데이트
                console.log('------------');
                console.log(response);
            })
        }
    }, [no]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* 오버레이 */}
            <div className="fixed inset-0 bg-black opacity-50"></div>

            {/* 모달 콘텐츠 */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md z-10 p-6 relative">
                {/* 모달 닫기 버튼 */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* 모달 폼 */}
                {Object.entries(data).map((item) => (
                    <label key={item[0]} className="block text-sm mb-4">
                        <span className="text-gray-700">aaa</span>
                        <input
                            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
                            placeholder="Input"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

export default CommonDetailComponent;
