import React, { useState, useEffect } from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CareGiverReadSelectComponent from "@/component/caregiver/read/CareGiverReadSelectComponent.jsx";
import CareGiverReadProfileComponent from "@/component/caregiver/read/CareGiverReadProfileComponent.jsx";
import {deleteGiver, getCareGiverOne, updateCareGiver} from "@/api/caregiverAPI.js";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

function CareGiverReadComponent() {
    const param = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedInfo, setSelectedInfo] = useState("");
    const [userData, setUserData] = useState(null); // 사용자 데이터 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [modalOpen, setModalOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [buttonFn, setButtonFn] = useState();

    const no = Number(param.cgno);

    const handleSelectInfo = (infoType) => {
        setSelectedInfo(infoType);
    };

    const removeClick = () => {

        setModalOpen(true);
        setMsg("삭제");
        setButtonFn(() => () => deleteGiver(no))
    }

    const modifyClick = () => {

        setModalOpen(true);
        setMsg("수정");
        setButtonFn(() => () => updateCareGiver(no, userData))
    }

    const afterOKFn = (pageQuery) => {

        navigate(`/caregiver/list?page=${pageQuery || 1}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCareGiverOne(no); // 비동기로 사용자 정보 가져오기
                setUserData(data); // 사용자 데이터 상태 업데이트
            } catch (error) {
                console.error("사용자 정보를 가져오는 데 오류가 발생했습니다:", error);
            } finally {
                setLoading(false); // 로딩 종료
            }
        };

        fetchData();
    }, [no]); // no가 변경될 때마다 데이터 재페치

    const renderSelectedInfo = () => {
        if (loading) {
            return <div>로딩 중...</div>; // 로딩 중일 때 메시지
        }

        switch (selectedInfo) {
            case "profile":
                return userData ? (
                    <CareGiverReadProfileComponent userData={userData} />
                ) : (
                    <div>사용자 정보를 불러올 수 없습니다.</div>
                );
            case "이메일":
                return <div>이메일 내용</div>;
            case "가입일":
                return <div>가입일 내용</div>;
            case "권한":
                return <div>권한 내용</div>;
            case "추가 정보":
                return <div>추가 정보 내용</div>;
            default:
                return <CareGiverReadProfileComponent userData={userData} />;
        }
    };

    return (
        <>
            {modalOpen && (
                <CommonCheckModalComponent
                    isOpen={modalOpen}
                    no={no}
                    msg={msg}
                    OKButtonFn={buttonFn}
                    closeButtonFn={() => setModalOpen(false)}
                    //afterOKFn={afterOKFn}
                />
            )}

            <CareGiverReadSelectComponent onSelectInfo={handleSelectInfo} />

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">관리자 페이지 - 정보 확인</h2>

                {/* 선택된 정보 섹션 */}
                <div className="space-y-6">
                    {renderSelectedInfo()} {/* 선택된 정보에 따른 내용 출력 */}
                </div>

                {/* 버튼 섹션 */}
                <div className="flex justify-end space-x-4 mt-8">
                    <button
                        className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                        onClick={modifyClick}
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
            </div>
        </>
    );
}

export default CareGiverReadComponent;
