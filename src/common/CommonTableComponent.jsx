import { useEffect, useState } from "react";
import PageComponent from "@/common/pageComponent.jsx";
import { useSearchParams } from "react-router-dom";
import CommonDetailComponent from "@/common/CommonDetailComponent.jsx";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";
import MatchedGiver from "@/component/caregiver/MatchedGiver.jsx";
import CareTakerMatchComponent from "@/component/caretaker/CareTakerMatchComponent.jsx";

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
    date.setHours(date.getHours() + 9);
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24시간 형식
    });
};

function CommonTableComponent({ tableHeader, column, listFn, detailFn, delfn, updateFn, actionSelect, matchedListFn, takerMatchedListFn }) {
    const [data, setData] = useState(init);
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [refresh, setRefresh] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [no, setNo] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteRight, setDeleteRight] = useState(false);
    const [editRight, setEditRight] = useState(false);
    const [matchedList, setMatchedList] = useState(false);
    const [matchedListNo, setMatchedListNo] = useState(0);
    const [takerMatchedList, setTakerMatchedList] = useState(false);

    const pageQuery = searchParams.get("page") || "";

    const changePage = (pageNum) => {
        setPage(pageNum);
        setSearchParams({ page: pageNum });
        setRefresh(!refresh);
    }

    const detailClick = (no) => {

        setDetailOpen(true)
        setNo(no);
        console.log(no)
    }




    const ClickOpenModal = (no) => {
        setIsModalOpen(true);
        setNo(no);
        deleteRight;
        editRight;
        console.log("-------------")
        console.log(deleteRight);

    }
    const ClickCloseModal = () => {
        setIsModalOpen(false);
        setDeleteRight(false);
        setEditRight(false);
        console.log("Click Close")
    }

    const ClikeChoice = (num) => {

        delfn(num).then((res) => {
            console.log(res)
            setRefresh(false);
            setIsModalOpen(false);
            setDeleteRight(false);
        })

        setRefresh(true);
    };

    const approveClick = (no) => {

        actionSelect(no).then((res) => {

            console.log(res)
        })
    }

    const matchedListClick = (no) => {

        setMatchedList(true);
        setMatchedListNo(no);
    }

    const takerMatchedListClick = (no) => {

        setTakerMatchedList(true);
        setMatchedListNo(no);

    }


    useEffect(() => {

        listFn(pageQuery).then((res) => {

            setData(res);
            console.log(res);
        })
    }, [page, searchParams,refresh, listFn]);

    return (
        <div className="overflow-x-auto p-4">

            {detailOpen &&
                <CommonDetailComponent isOpen={detailOpen}
                                       onClose={() => setDetailOpen(false)}
                                       no={no}
                                       detailFn={detailFn}
                                       updateFn={updateFn}
                                       setEditRight = {setEditRight}
                                       editRight = {editRight}
                                       isModalOpen={isModalOpen}
                                       refresh={() => setRefresh(!refresh)}

                />}

            {matchedList && <MatchedGiver
                isOpen={true}
                no={matchedListNo}
                matchedListFn={matchedListFn}
                onClose={() => setMatchedList(false)}>
            </MatchedGiver>}

            {takerMatchedList && <CareTakerMatchComponent
                isOpen={true}
                no={matchedListNo}
                takerMatchedListFn={takerMatchedListFn}
                onClose={() => setTakerMatchedList(false)}>
            </CareTakerMatchComponent>}



            <table className="min-w-full leading-normal border border-gray-300 rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-green-400 to-green-500 text-white">
                <tr className="text-sm font-semibold text-left uppercase tracking-wide">
                    {tableHeader.map((item) => (
                        <th key={item} className="px-5 py-3">{item}</th>
                    ))}
                    <th className="px-5 py-3">Action</th>
                </tr>
                </thead>

                <tbody className="bg-white">
                {data.list.map((item) => (
                    <tr key={item[column[0]]} className="hover:bg-gray-100 border-b border-gray-200">
                        {/* 첫 번째 항목을 key로만 사용하고, 출력하지 않음 */}
                        {column.slice(1).map((temp) => (
                            <td key={temp} className="px-5 py-4 text-sm text-gray-600">
                                {temp === 'checkAnswer' ? (
                                    <span className={item[temp] ? "text-gray-600" : "text-red-500"}>
                                        {item[temp] ? "답변완료" : "답변대기"}
                                    </span>
                                ) : temp.endsWith('Date') ? formatDate(item[temp]) : item[temp]}
                            </td>
                        ))}

                        {actionSelect && (

                            <td className="px-5 py-4 text-sm">
                                <div className="flex items-center justify-center">
                                    <button
                                        className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded transition duration-150 ease-in-out"
                                        aria-label="Approve"
                                        onClick={() => approveClick(item[column[0]])}
                                    >
                                        승인
                                    </button>

                                    <button
                                        className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition duration-150 ease-in-out"
                                        aria-label="Approve"
                                        onClick={() => ClikeChoice(item[column[0]])}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </td>

                        )}
                        {!actionSelect && (

                            <td className="px-5 py-4 text-sm">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
                                        aria-label="Edit"
                                        onClick={() => {
                                            detailClick(Object.values(item)[0]);
                                            setEditRight(true);
                                        }}
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                            ></path>
                                        </svg>
                                    </button>

                                    <CommonCheckModalComponent
                                        isModalOpen={isModalOpen}
                                        ClickCloseModal={ClickCloseModal}
                                        ClikeChoice={ClikeChoice}
                                        throwNum={no}
                                        deleteRight={deleteRight}
                                        editRight={editRight}
                                    />

                                    <button
                                        className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
                                        aria-label="Delete"
                                        onClick={() => {
                                            ClickOpenModal(Object.values(item)[0]);
                                            setDeleteRight(true);
                                        }}
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>

                                    {matchedListFn && (

                                        <button
                                            className="text-green-500 hover:text-green-700 transition duration-150 ease-in-out"
                                            aria-label="Document"
                                            onClick={() => {matchedListClick(Object.values(item)[0])}}
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M15 1H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM6 4h8v2H6V4zm0 4h8v2H6V8zm0 4h8v2H6v-2zm8 6H6v-2h8v2z"/>
                                            </svg>
                                        </button>
                                    )}
                                    {takerMatchedListFn && (

                                        <button
                                            className="text-green-500 hover:text-green-700 transition duration-150 ease-in-out"
                                            aria-label="Document"
                                            onClick={() => {takerMatchedListClick(Object.values(item)[0])}}
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M15 1H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM6 4h8v2H6V4zm0 4h8v2H6V8zm0 4h8v2H6v-2zm8 6H6v-2h8v2z"/>
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </td>

                        )}

                    </tr>
                ))}
                </tbody>


                <tfoot>
                <tr>
                    <td colSpan={column.length + 1}>
                        <div className="flex justify-center items-center py-4">
                            <PageComponent pageResponse={data} changePage={changePage}/>
                        </div>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default CommonTableComponent;
