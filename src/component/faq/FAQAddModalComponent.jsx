import { useState } from 'react';
import { insertFAQ } from "../../api/faqAPI";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

function FAQAddModalComponent({ isOpen, onClose }) {
    const [faqData, setFaqData] = useState({
        ftitle: "",
        fcategory: "1",
        fcontent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFaqData((prev) => ({ ...prev, [name]: value }));
    };

    // 등록 버튼 클릭 시 FAQ 데이터 전송
    const handleSubmit = async () => {
            await insertFAQ(faqData);
            setFaqData({ ftitle: "", fcategory: "1", fcontent: "" }); // 입력 필드 초기화
    };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">

                {/* 모달 뒤 어두운 배경 */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white rounded-lg shadow-lg w-full max-w-md z-10 p-6 relative">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">FAQ 추가하기</h2>

                    {/* 제목 입력 */}
                    <label className="block text-sm mb-4">
                        <span className="text-gray-700 dark:text-gray-400">제목</span>
                        <input
                            type="text"
                            name="ftitle"
                            value={faqData.ftitle}
                            onChange={handleChange}
                            className="block w-full mt-1 text-sm dark:bg-gray-700 form-input"
                            placeholder="FAQ 제목을 입력하세요"
                        />
                    </label>

                    {/* 카테고리 선택 */}
                    <label className="block text-sm mb-4">
                        <span className="text-gray-700 dark:text-gray-400">카테고리</span>
                        <select
                            name="fcategory"
                            value={faqData.fcategory}
                            onChange={handleChange}
                            className="block w-full mt-1 text-sm dark:bg-gray-700 form-select"
                        >
                            <option value="1">간병인</option>
                            <option value="2">보호자/피보호자</option>
                        </select>
                    </label>

                    {/* 내용 입력 */}
                    <label className="block text-sm mb-4">
                        <span className="text-gray-700 dark:text-gray-400">내용</span>
                        <textarea
                            name="fcontent"
                            value={faqData.fcontent}
                            onChange={handleChange}
                            className="block w-full mt-1 text-sm dark:bg-gray-700 form-textarea"
                            rows="4"
                            placeholder="FAQ 내용을 입력하세요"
                        ></textarea>
                    </label>

                    {/* 등록 버튼 */}
                    <button
                        onClick={handleSubmit}
                        className="w-full px-4 py-2 text-sm font-medium leading-5 text-white bg-purple-600 rounded-lg focus:outline-none focus:shadow-outline-purple hover:bg-purple-700"
                    >
                        등록하기
                    </button>

                    {/* 닫기 버튼 */}
                    <button
                        onClick={onClose}
                        className="w-full px-4 py-2 mt-2 text-sm font-medium leading-5 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline-purple hover:bg-gray-300"
                    >
                        닫기
                    </button>
                </div>
            </div>
        )
    );
}

export default FAQAddModalComponent;
