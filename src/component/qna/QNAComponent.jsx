import { useState } from 'react';

function QnaComponent() {
    const qnaData = [
        { id: 1, title: 'How to use React?', resolved: true },
        { id: 2, title: 'What is JSX?', resolved: false },
        { id: 3, title: 'How to manage state in React?', resolved: true },
        { id: 4, title: 'What are hooks?', resolved: false },
        { id: 5, title: 'How to use useEffect?', resolved: true },
        { id: 6, title: 'What is the virtual DOM?', resolved: false },
        { id: 7, title: 'How to create a functional component?', resolved: true },
        { id: 8, title: 'What is the difference between state and props?', resolved: false },
        { id: 9, title: 'How to handle events in React?', resolved: true },
        { id: 10, title: 'What is a higher-order component?', resolved: false },
        { id: 11, title: 'How to use context API?', resolved: true },
        { id: 12, title: 'What is prop drilling?', resolved: false },
        { id: 13, title: 'How to perform conditional rendering?', resolved: true },
        { id: 14, title: 'What are controlled and uncontrolled components?', resolved: false },
        { id: 15, title: 'How to make API calls in React?', resolved: true },
        { id: 16, title: 'What is Redux?', resolved: false },
        { id: 17, title: 'How to use middleware in Redux?', resolved: true },
        { id: 18, title: 'What is React Router?', resolved: false },
        { id: 19, title: 'How to implement routing in React?', resolved: true },
        { id: 20, title: 'What are React Fragments?', resolved: false },
        { id: 21, title: 'How to optimize performance in React?', resolved: true },
        { id: 22, title: 'What is code splitting?', resolved: false },
        { id: 23, title: 'How to manage forms in React?', resolved: true },
        { id: 24, title: 'What is a React key?', resolved: false },
        { id: 25, title: 'How to debug React applications?', resolved: true },
        { id: 26, title: 'What is server-side rendering?', resolved: false },
        { id: 27, title: 'How to use React with TypeScript?', resolved: true },
        { id: 28, title: 'What is a custom hook?', resolved: false },
        { id: 29, title: 'How to test React components?', resolved: true },
        { id: 30, title: 'What are React lifecycle methods?', resolved: false },
        { id: 31, title: 'How to manage side effects in React?', resolved: true },
        { id: 32, title: 'What is the difference between class and functional components?', resolved: false },
        { id: 33, title: 'How to create a React app using Create React App?', resolved: true },
        { id: 34, title: 'What is the purpose of useMemo?', resolved: false },
        { id: 35, title: 'How to implement lazy loading in React?', resolved: true },
    ];

    const [showUnresolved, setShowUnresolved] = useState(false);
    const itemsPerPage = 10; // 페이지당 항목 수를 10으로 설정
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = showUnresolved
        ? qnaData.filter(item => !item.resolved)
        : qnaData;

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const displayedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleDelete = (id) => {
        // Delete logic here (e.g., update state, send API request)
        console.log(`Deleted item with id: ${id}`);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-green-50 p-4">
            <h1 className="text-2xl font-bold my-4 text-center text-green-700">Q&A 게시판</h1>
            <div className="flex justify-center mb-4">
                <button
                    onClick={() => setShowUnresolved(!showUnresolved)}
                    className={`px-4 py-2 rounded-md text-white transition-colors ${showUnresolved ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    {showUnresolved ? '모든 질문 보기' : '해결되지 않은 질문만 보기'}
                </button>
            </div>
            <div className="flex-grow overflow-x-auto">
                <div className="w-full max-w-4xl mx-auto">
                    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                        <thead>
                        <tr className="bg-green-200">
                            <th className="px-4 py-2 text-left">번호</th>
                            <th className="px-4 py-2 text-left">제목</th>
                            <th className="px-4 py-2 text-center">해결여부</th>
                            <th className="px-4 py-2 text-center">삭제</th>
                        </tr>
                        </thead>
                        <tbody>
                        {displayedData.map((item) => (
                            <tr key={item.id} className="border-t border-gray-300 hover:bg-green-100">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.title}</td>
                                <td className="px-4 py-2 text-center">
                                    {item.resolved ? (
                                        <span className="text-green-600 font-bold">Y</span>
                                    ) : (
                                        <span className="text-red-600 font-bold">N</span>
                                    )}
                                </td>
                                <td className="px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
                                    >
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* If there are no items to display, add empty rows for spacing */}
                        {displayedData.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-4 py-2 text-center text-gray-500">표시할 질문이 없습니다.</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded transition-colors ${currentPage === index + 1 ? 'bg-green-600 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QnaComponent;
