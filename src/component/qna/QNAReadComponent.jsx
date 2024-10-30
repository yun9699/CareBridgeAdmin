import React, { useEffect, useState } from "react";
import {deleteQNA, getQNAOne, updateQNA} from "@/api/qnaAPI.js";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";
import {deleteGiver} from "@/api/caregiverAPI.js";

const init = {
    qno: 0,
    qtitle: null,
    qcontent: null,
    checkAnswer: false,
    regDate: null,
    modDate: null
};

function QnaReadComponent() {
    const param = useParams();
    const qno = Number(param.qno);

    const [content, setContent] = useState(init);
    const [modalOpen, setModalOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [buttonFn, setButtonFn] = useState();


    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = Number(query.get('page'));

    useEffect(() => {
        getQNAOne(qno).then((res) => {
            setContent(res);
        });
    }, [qno]);

    const deleteClick = () => {
        setModalOpen(true)
        setMsg("삭제")
        setButtonFn(() => () => deleteQNA(qno))
    }

    const editClick = () => {
        setModalOpen(true)
        setMsg("수정")
        setButtonFn(() => () => updateQNA(qno))
    }

    const afterOKFn = () => {
        navigate(`/qna/list?page=${page || 1}`)
    }

    return (
        <>
            {modalOpen && (
                <CommonCheckModalComponent
                    isOpen={modalOpen}
                    no={qno}
                    OKButtonFn={buttonFn}
                    msg={msg}
                    closeButtonFn={() => setModalOpen(false)}
                    afterOKFn={(afterOKFn)}
                />
            )}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8 m-10">
            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">관리자 페이지 - QNA 상세보기</h2>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-gray-500 font-medium mb-1">질문 제목</label>
                        <div className="p-4 border border-gray-300 rounded-lg shadow-inner">
                            <p className="text-lg text-gray-800">{content.qtitle}</p>
                        </div>
                    </div>

                </div>

                <div>
                    <label className="block text-gray-500 font-medium mb-1">질문 내용</label>
                    <div className="p-4 border border-gray-300 rounded-lg shadow-inner">

                        <p className="text-lg text-gray-800">{content.qcontent}</p>
                    </div>
                </div>

                <div>
                <label className="block text-gray-500 font-medium mb-1">답변 내용</label>
                <div className="p-4 border border-gray-300 rounded-lg shadow-inner">

                    <textarea
                        className="w-full h-32 p-2 rounded-lg resize-none"
                    ></textarea>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-gray-500 font-medium mb-1">등록일</label>
                    <div className="p-4 border border-gray-300 rounded-lg shadow-inner">
                        <p className="text-lg text-gray-800">{new Date(content.regDate).toLocaleDateString()}</p>
                    </div>
                    </div>
                    <div>
                    <label className="block text-gray-500 font-medium mb-1">수정일</label>
                    <div className="p-4 border border-gray-300 rounded-lg shadow-inner">
                        <p className="text-lg text-gray-800">{new Date(content.modDate).toLocaleDateString()}</p>
                    </div>
                    </div>
                </div>
            </div>

            {/* 버튼 섹션 */}
            <div className="flex justify-end space-x-4 mt-8">
                <button
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={() => editClick()}
                >
                    수정하기
                </button>
                <button
                    className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={() => deleteClick()}
                >
                    삭제하기
                </button>
            </div>
        </div>
        </>
    );
}

export default QnaReadComponent;
