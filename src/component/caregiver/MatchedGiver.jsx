import { useEffect, useState } from "react";

const init = {
    list: [],
    endPage: 0,
    next: false,
    pageRequest: [],
    total: 0,
    startPage: 0,
    prev: false
}

const MatchedGiver = ({ isOpen, onClose, no, matchedListFn }) => {
    const [data, setData] = useState(init);

    useEffect(() => {
        matchedListFn(no).then((data) => {
            console.log(data);
            setData(data);
        });
    }, [matchedListFn, no]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 9); // 한국 시간으로 변환
        return date.toLocaleString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // 24시간 형식
        });
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 flex justify-between items-center">
                        <h2 className="text-white text-lg font-semibold">리스트 상세보기</h2>
                        <button onClick={onClose} className="text-white hover:text-gray-200">
                            닫기
                        </button>
                    </div>

                    <table className="min-w-full leading-normal border border-gray-300 rounded-lg">
                        <thead className="bg-gray-200">
                        <tr className="text-sm font-semibold text-left uppercase tracking-wide">
                            <th className="px-5 py-3">돌봄 제공자</th>
                            <th className="px-5 py-3">돌봄 받는 사람</th>
                            <th className="px-5 py-3">시작 날짜</th>
                            <th className="px-5 py-3">종료 날짜</th>
                        </tr>
                        </thead>

                        <tbody className="bg-white">
                        {data.list.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-5 py-4 text-sm text-gray-600 text-center">
                                    내용이 없습니다.
                                </td>
                            </tr>
                        ) : (
                            data.list.map((item) => (
                                <tr key={item.cgname + item.ctname}
                                    className="hover:bg-gray-100 border-b border-gray-200">
                                    <td className="px-5 py-4 text-sm text-gray-600">{item.cgname}</td>
                                    <td className="px-5 py-4 text-sm text-gray-600">{item.ctname}</td>
                                    <td className="px-5 py-4 text-sm text-gray-600">{formatDate(item.start)}</td>
                                    <td className="px-5 py-4 text-sm text-gray-600">{formatDate(item.end)}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
};

export default MatchedGiver;
