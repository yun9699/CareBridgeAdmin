import BasicLayout from "../../layout/BasicLayout.jsx";
import React, { useState } from "react";
import FAQComponent from "../../component/faq/FAQComponent.jsx";
import FAQAddModalComponent from "../../component/faq/FAQAddModalComponent.jsx";

function FAQIndex() {

    // 모달 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 신규작성 버튼 클릭 시 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };


    // 버튼 클릭 시 카테고리 변경하기

    return (
        <BasicLayout>
            <div className="flex items-center justify-between my-6">
                <h1 className=" text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    FAQ 관리 페이지
                </h1>
                {/* 신규작성 버튼 */}
                <button
                    className="p-4 text-sm font-semibold text-white bg-[#a0c49d] rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple hover:bg-green-400 transition-colors duration-150"
                    onClick={openModal}
                >
                    신규작성
                </button>
            </div>

            <FAQComponent/>
            <FAQAddModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </BasicLayout>
    );
}

export default FAQIndex;