import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FAQRegisterModalComponent from "./FAQRegisterModalComponent.jsx";

function FAQListSelectComponent({ listOption }) {
    const [selected, setSelected] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // 카테고리 변경 기능
    const handleButtonClick = (changeCategory) => {
        setSelected(changeCategory);
        listOption(changeCategory);
        setSearchParams({ page: String(1) });
    };

    // 모달 열기/닫기 기능
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex justify-center mb-4">
            {/* 간병인 FAQ 리스트 버튼 */}
            <button
                className={`px-4 py-2 text-white rounded-l focus:outline-none transition duration-150 ease-in-out
                    ${selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(true)}
            >
                간병인 FAQ
            </button>

            {/* 보호자 FAQ 리스트 버튼 */}
            <button
                className={`px-4 py-2 text-white rounded-r focus:outline-none transition duration-150 ease-in-out
                    ${!selected ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleButtonClick(false)}
            >
                보호자/환자 FAQ
            </button>

            {/* 신규작성 버튼 */}
            <button
                className="p-3 text-sm font-semibold text-white bg-[#a0c49d] rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple hover:bg-green-400 transition-colors duration-150"
                onClick={openModal}
            >
                신규작성
            </button>

            {/* FAQ 신규작성 모달 연결 */}
            <FAQRegisterModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default FAQListSelectComponent;
