import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import CareGiverReadSelectComponent from "@/component/caregiver/read/CareGiverReadSelectComponent.jsx";
import CareGiverReadProfileComponent from "@/component/caregiver/read/CareGiverReadProfileComponent.jsx";
import {deleteGiver, getApprovedGiverOne, updateCareGiver} from "@/api/caregiverAPI.js";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

function CareGiverApprovedReadComponent() {
    const param = useParams();
    const navigate = useNavigate();

    const [selectedInfo, setSelectedInfo] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [buttonFn, setButtonFn] = useState();
    const [afterOKFn, setAfterOKFn] = useState();

    const no = Number(param.cgno);

    console.log(location.pathname)

    const handleSelectInfo = (infoType) => {
        setSelectedInfo(infoType);
    };

    const removeClick = () => {
        setModalOpen(true);
        setMsg("삭제");
        setButtonFn(() => () => deleteGiver(no));
        setAfterOKFn(navigateList);
    };

    const modifyClick = () => {
        setModalOpen(true);
        setMsg("수정");
        setButtonFn(() => () => updateCareGiver(no, userData));
    };

    const navigateList = (pageQuery) => {
        navigate(`/caregiver/list?page=${pageQuery || 1}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getApprovedGiverOne(no);
                setUserData(data);
            } catch (error) {
                console.error("사용자 정보를 가져오는 데 오류가 발생했습니다:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [no]);

    const renderSelectedInfo = () => {
        if (loading) {
            return <div>로딩 중...</div>;
        }

        switch (selectedInfo) {
            case "profile":
                return userData ? (
                    <CareGiverReadProfileComponent userData={userData} setUserData={setUserData} />
                ) : (
                    <div>사용자 정보를 불러올 수 없습니다.</div>
                );
            case "matched":
                return <div>matched 내용</div>;
            case "가입일":
                return <div>가입일 내용</div>;
            case "권한":
                return <div>권한 내용</div>;
            case "추가 정보":
                return <div>추가 정보 내용</div>;
            default:
                return <CareGiverReadProfileComponent userData={userData} setUserData={setUserData} />;
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
                    afterOKFn={afterOKFn}
                />
            )}

            <CareGiverReadSelectComponent onSelectInfo={handleSelectInfo} />

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
                <h2 className="text-3xl font-bold text-gray-800 border-b pb-5 mb-6">관리자 페이지 - 정보 확인</h2>

                <div className="space-y-6">
                    {renderSelectedInfo()}
                </div>

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

export default CareGiverApprovedReadComponent;
