import React, { useEffect, useState } from 'react';
import { getCareGiverOne } from "@/api/caregiverAPI.js";

const init = {
    list: []
};

function CommonDetailComponent({ isOpen, onClose, no, detailFn }) {
    const [data, setData] = useState(init);

    if (!isOpen) return null; // 모달이 열려 있을 때만 렌더링

    useEffect(() => {
        if (no) {
            detailFn(no).then(response => {
                setData({ list: [response] }); // 응답을 list 배열에 래핑
                console.log('------------');
                console.log(response);
            }).catch(error => {
                console.error("API 호출 오류:", error);
            });
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
                {data.list.map((item, index) => (
                    <div key={index}>
                        {Object.entries(item).map(([key, value]) => (
                            <label key={key} className="block text-sm mb-4">
                                <span className="text-gray-700">{key}:</span>
                                <input
                                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
                                    placeholder="Input"
                                    value={value || ''} // null일 경우 빈 문자열
                                    readOnly // 필요에 따라 수정 가능
                                />
                            </label>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommonDetailComponent;
