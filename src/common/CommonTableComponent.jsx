import { useEffect, useState } from "react";
import PageComponent from "@/common/pageComponent.jsx";
import { useSearchParams } from "react-router-dom";
import {deleteGiver, getCareGiverList} from "@/api/caregiverAPI.js";
import {deleteQNA} from "@/api/qnaAPI.js";
import {deleteTaker} from "@/api/caretakerAPI.js";

const init = {
    list: [],
    endPage: 0,
    next: false,
    pageRequest: [],
    total: 0,
    startPage: 0,
    prev: false
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24시간 형식
    });
};

function CommonTableComponent({ tmp, func }) {
    const [data, setData] = useState(init);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false);

    const pageQuery = searchParams.get("page") || "";

    const changePage = (pageNum) => {
        setPage(pageNum);
        setSearchParams({ page: pageNum });
        window.location.reload();
    }


    const ClikedeleteDate = (item) => {
        if (item.qno) {
            deleteQNA(item.qno).then(res => {
                console.log(res);
                setRefresh(true);
            });
        }
        else if (item.ctno) {
            deleteTaker(item.ctno).then(res => {
                console.log(res);
                setRefresh(true);
            });
        }
        else if (item.cgno){
            deleteGiver(item.cgno).then(res => {
                console.log(res);
                setRefresh(true);
            })
        }
        setRefresh(false);
    };




    useEffect(() => {
        func(pageQuery).then((res) => {
            setData(res);
            console.log(res);
        })
    }, [page, searchParams,refresh]);

    return (
        <div className="overflow-x-auto p-4">
            <table className="min-w-full leading-normal border border-gray-300 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white">
                <tr className="text-sm font-semibold text-left uppercase tracking-wide">
                    {tmp.map((item) => (
                        <th key={item} className="px-5 py-3">{item}</th>
                    ))}
                    <th className="px-5 py-3">Actions</th>
                </tr>
                </thead>

                <tbody className="bg-white">
                {data.list.map((item) => (
                    <tr key={item[tmp[0]]} className="hover:bg-gray-100 border-b border-gray-200">
                        {tmp.map((temp) => (
                            <td key={temp} className="px-5 py-4 text-sm text-gray-600">
                                {temp.endsWith('Date') ? formatDate(item[temp]) : item[temp]}
                            </td>
                        ))}
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
                                    aria-label="Delete"
                                    onClick={() => ClikedeleteDate(item)}>
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
                    <td colSpan={tmp.length + 1}>
                        <div className="flex justify-center items-center py-4">
                            <PageComponent pageResponse={data} changePage={changePage} />
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default CommonTableComponent;
