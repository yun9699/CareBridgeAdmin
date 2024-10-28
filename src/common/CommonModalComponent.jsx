import React from 'react';

function CommonModalComponent({ isModalOpen, ClickCloseModal, ClikedeleteDate, deleteNum }) {
    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* 어둡게 처리된 오버레이 추가: opacity 값을 0.5로 설정 */}
            <div className="fixed inset-0 bg-black opacity-10"></div>

            {/* 모달 콘텐츠 */}
            <div className="bg-white rounded-lg w-full max-w-md z-10 p-6 relative">
                {/* 모달 제목 */}
                <h2 className="text-lg font-semibold mb-4 text-center">정말로 삭제하시겠습니까?</h2>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => ClikedeleteDate(deleteNum)}
                    >
                        삭제
                    </button>
                    <button
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                        onClick={ClickCloseModal}
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommonModalComponent;
