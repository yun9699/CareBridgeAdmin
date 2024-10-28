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


            {/* 간병인 FAQ 버튼 */}
            <button
                className={`flex items-center justify-between w-full p-4 mb-4 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple transition-colors duration-150
                        ? "text-purple-100 bg-purple-600 hover:bg-purple-700"
                        : "text-black bg-white border-2 border-purple-700 hover:bg-gray-50"
                }`}
            >
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <span>간병인 FAQ</span>
                </div>
            </button>

            {/* 보호자/피간병인 FAQ 버튼 */}
            <button
                className={`flex items-center justify-between w-full p-4 mb-4 text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple transition-colors duration-150
                        ? "text-purple-100 bg-purple-600 hover:bg-purple-700"
                        : "text-black bg-white border-2 border-purple-700 hover:bg-gray-50"
                }`}
            >
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                    </svg>
                    <span>보호자/피간병인 FAQ</span>
                </div>
            </button>


            <FAQComponent/>
            <FAQAddModalComponent isOpen={isModalOpen} onClose={closeModal} />
        </BasicLayout>
    );
}

export default FAQIndex;