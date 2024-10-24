import {useEffect, useState} from "react";
import {getList} from "@/api/qnaAPI.js";
import PageComponent from "@/common/pageComponent.jsx";
import {useSearchParams} from "react-router-dom";

const init = {
    list: [],
    endPage: 0,
    next: false,
    pageRequest: [],
    total: 0,
    startPage: 0,
    prev: false
}

function QNAListTableComponent() {

    const [qna, setQna] = useState(init);

    const [searchParams] = useSearchParams();

    const pageQuery = searchParams.get("page") || "";



    useEffect(() => {
        getList(pageQuery).then((res) => {
            console.log(res);
            setQna(res);
        })
    }, []);

    return (
        <>
            <div className="overflow-x-auto p-4">
                <table className="min-w-full leading-normal border border-gray-300 rounded-lg shadow-lg">
                    <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white">
                    <tr className="text-sm font-semibold text-left uppercase tracking-wide">
                        <th className="px-5 py-3">Title</th>
                        <th className="px-5 py-3">RegDate</th>
                        <th className="px-5 py-3">ModDate</th>
                        <th className="px-5 py-3">Actions</th>
                    </tr>
                    </thead>

                    <tbody className="bg-white">
                    {qna.list.map((item) => (
                        <tr key={item.qno} className="hover:bg-gray-100 border-b border-gray-200">
                            <td className="px-5 py-4 text-sm">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 mr-3">
                                        <img
                                            className="object-cover w-full h-full rounded-full"
                                            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{item.qno}</p>
                                        <p className="text-xs text-gray-500">QNA Topic</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-4 text-sm text-gray-600">{item.regDate}</td>
                            <td className="px-5 py-4 text-sm text-gray-600">{item.modDate}</td>
                            <td className="px-5 py-4 text-sm">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
                                        aria-label="Edit">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                                        aria-label="Delete">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                    <tfoot>
                    <tr>
                        <td colSpan="4">
                            <div className="flex justify-center items-center py-4">
                                <PageComponent pageResponse={qna} />
                            </div>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default QNAListTableComponent;
