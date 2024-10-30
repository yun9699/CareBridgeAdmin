import React, { useEffect, useState } from 'react';
import { getFAQOne, updateFAQ, deleteFAQ } from '../../api/faqAPI.js';
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";
import { useNavigate, useParams } from "react-router-dom";

function FAQReadComponent() {
    const { fno } = useParams();
    const [faqData, setFaqData] = useState({
        ftitle: "",
        fcategory: "",
        fcontent: "",
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [buttonFn, setButtonFn] = useState(() => () => {});
    const [afterOKFn, setAfterOKFn] = useState(() => () => {});
    const navigate = useNavigate();

    // 리스트 페이지로 이동하는 함수
    const navigateList = (pageQuery) => {
        navigate(`/faq/list?page=${pageQuery || 1}`);
    };

    // 삭제 클릭 시 호출되는 함수
    const removeClick = () => {
        setModalOpen(true);  // 모달을 열기
        setMsg("정말로 이 FAQ를 삭제하시겠습니까?");
        setButtonFn(() => async () => {
            try {
                await deleteFAQ(Number(fno));
                setModalOpen(false);
                navigateList();
            } catch (error) {
                console.error("FAQ 삭제 중 오류가 발생했습니다:", error);
            }
        });
        setAfterOKFn(() => navigateList);  // 확인 후 이동할 페이지 설정
    };

    // FAQ 데이터를 로드하는 useEffect
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getFAQOne(Number(fno)); // FAQ 데이터 가져오기
                setFaqData(data);  // 상태 업데이트
            } catch (e) {
                console.error("FAQ 상세조회를 하는데 오류가 발생했습니다:", e);
            }
        };
        loadData();
    }, [fno]);

    const fcategoryName = faqData.fcategory === "1"
        ? "간병인"
        : faqData.fcategory === "2"
            ? "보호자/피간병인"
            : "알 수 없음";

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">관리자 페이지 - FAQ 상세 정보</h2>

            {/* 정보 섹션 */}
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-500 font-medium mb-1">카테고리</label>
                        <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{fcategoryName}</p>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-500 font-medium mb-1">FAQ제목</label>
                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{faqData.ftitle}</p>
                </div>
                <div>
                    <label className="block text-gray-500 font-medium mb-1">상세내용</label>
                    <p className="text-lg text-gray-800 bg-gray-100 p-4 rounded-lg shadow-inner">{faqData.fcontent}</p>
                </div>
            </div>

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
                    onClick={removeClick}
                >
                    삭제하기
                </button>
            </div>

            {modalOpen && (
                <CommonCheckModalComponent
                    isOpen={modalOpen}
                    no={fno}
                    msg={msg}
                    OKButtonFn={buttonFn}
                    closeButtonFn={() => setModalOpen(false)}
                    afterOKFn={afterOKFn}
                />
            )}
        </div>
    );
}

export default FAQReadComponent;
