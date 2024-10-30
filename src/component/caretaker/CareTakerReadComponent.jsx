import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCareTakerOne } from "@/api/caretakerAPI";

const init = {
    list: []
};

const CareTakerReadComponent = () => {
    const { ctno } = useParams();
    const [data, setData] = useState(init);

    useEffect(() => {
        if (ctno) {
            getCareTakerOne(ctno)
                .then(response => {
                    setData({ list: [response] });
                    console.log('CareTaker Detail:', response);
                })
                .catch(error => {
                    console.error("API 호출 오류:", error);
                });
        }
    }, [ctno]);

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">


            {/* 정보 섹션 */}
            {data.list.length > 0 ? (
                <div className="space-y-6">
                    {data.list.map((item, index) => (
                        <div key={index}>

                            <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">{item.ctname} 상세 정보</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-500 font-medium mb-1">이름</label>
                                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{item.ctname}</p>
                                </div>
                                <div>
                                    <label className="block text-gray-500 font-medium mb-1">나이</label>
                                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{item.ctage}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label className="block text-gray-500 font-medium mb-1">주소</label>
                                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{item.ctaddress}</p>
                                </div>
                                <div>
                                    <label className="block text-gray-500 font-medium mb-1">전화번호</label>
                                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{item.ctphone}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-gray-500 font-medium mb-1">이메일</label>
                                <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{item.ctemail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-gray-500 text-xl">Loading...</div>
            )}

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
};

export default CareTakerReadComponent;
