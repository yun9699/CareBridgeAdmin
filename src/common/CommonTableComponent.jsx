import { useEffect, useState } from "react";
import PageComponent from "@/common/pageComponent.jsx";
import { useSearchParams } from "react-router-dom";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

const init = {
    list: [],
    endPage: 0,
    next: false,
    pageRequest: [],
    total: 0,
    startPage: 0,
    prev: false
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 9);
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

function CommonTableComponent({ tableHeader, column, listFn, delFn, actionSelect }) {
    const [data, setData] = useState(init);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [no, setNo] = useState(0);
    const [checkModal, setCheckModal] = useState(false);
    const [msg, setMsg] = useState("");
    const [modalFn, setModalFn] = useState();

    const pageQuery = searchParams.get("page") || "";

    const changePage = (pageNum) => {
        setPage(pageNum);
        setSearchParams({ page: pageNum });
        setRefresh(!refresh);
    };

    const giverApproveClick = (num) => {
        setNo(num);
        setMsg("승인");
        setModalFn(() => () => actionSelect(Number(num)));
        setCheckModal(true);
    };

    const giverRemoveClick = (num) => {
        setNo(num);
        setMsg("삭제");
        setModalFn(() => () => delFn(Number(num)));
        setCheckModal(true);
    };

    useEffect(() => {
        listFn(pageQuery).then((res) => {
            setData(res);
            console.log(res);
        });
    }, [page, searchParams, refresh, listFn]);

    return (
        <div className="overflow-x-auto p-4">
            {checkModal && (
                <CommonCheckModalComponent
                    isOpen={checkModal}
                    msg={msg}
                    no={no}
                    OKButtonFn={modalFn}
                    closeButtonFn={() => {
                        setCheckModal(false);
                        setRefresh(!refresh);
                    }}
                />
            )}

            <table className="min-w-full leading-normal border border-gray-300 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white">
                <tr className="text-sm font-semibold text-left uppercase tracking-wide">
                    {tableHeader.map((item) => (
                        <th key={item} className="px-5 py-3 text-center">{item}</th>
                    ))}
                    {actionSelect && <th className="px-5 py-3 text-center">Action</th>}
                </tr>
                </thead>

                <tbody className="bg-white">
                {data.list.map((item) => (
                    <tr key={item[column[0]]} className="hover:bg-gray-100 border-b border-gray-200">
                        {column.slice(1).map((temp) => (
                            <td key={temp} className="px-5 py-4 text-sm text-gray-600 text-center">
                                {temp === 'checkAnswer' ? (
                                    <span className={item[temp] ? "text-gray-600" : "text-red-500"}>
                                            {item[temp] ? "답변완료" : "답변대기"}
                                        </span>
                                ) : temp.endsWith('Date') ? formatDate(item[temp]) : item[temp]}
                            </td>
                        ))}
                        {actionSelect && (
                            <td className="px-5 py-4 text-sm text-center">
                                <div className="flex items-center justify-center space-x-3">
                                    <button
                                        className="px-3 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded transition duration-150 ease-in-out"
                                        aria-label="Approve"
                                        onClick={() => giverApproveClick(item[column[0]])}
                                    >
                                        승인
                                    </button>
                                    <button
                                        className="px-3 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded transition duration-150 ease-in-out"
                                        aria-label="Remove"
                                        onClick={() => giverRemoveClick(item[column[0]])}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>

                <tfoot>
                <tr>
                    <td colSpan={column.length + (actionSelect ? 1 : 0)}>
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
