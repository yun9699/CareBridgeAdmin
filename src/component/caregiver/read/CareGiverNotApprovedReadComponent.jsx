import React, {useEffect, useState} from 'react';
import CareGiverReadProfileComponent from "@/component/caregiver/read/CareGiverReadProfileComponent.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {approveGiver, deleteGiver, getNotApprovedGiverOne} from "@/api/caregiverAPI.js";
import CommonCheckModalComponent from "@/common/CommonCheckModalComponent.jsx";

function CareGiverNotApprovedReadComponent() {

    const param = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [buttonFn, setButtonFn] = useState();

    const no = Number(param.cgno);

    const navigateList = (pageQuery) => {

        navigate(`/caregiver/notApprovedGivers?page=${pageQuery || 1}`);
    };

    const approveClick = () => {

        setModalOpen(true);
        setMsg("승인");
        setButtonFn(() => () => approveGiver(no));
    }

    const removeClick = () => {
        setModalOpen(true);
        setMsg("삭제");
        setButtonFn(() => () => deleteGiver(no));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNotApprovedGiverOne(no);
                setUserData(data);
            } catch (error) {
                console.error("사용자 정보를 가져오는 데 오류가 발생했습니다:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [no]);


    return (
        <div>

            {modalOpen && (
                <CommonCheckModalComponent
                    isOpen={modalOpen}
                    no={no}
                    msg={msg}
                    OKButtonFn={buttonFn}
                    closeButtonFn={() => setModalOpen(false)}
                    afterOKFn={navigateList}
                />
            )}

            <CareGiverReadProfileComponent userData={userData} setUserData={setUserData}/>

            <div className="flex justify-end space-x-4 mt-4">
                <button
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                    onClick={approveClick}
                >
                    승인
                </button>
                <button
                    className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={removeClick}
                >
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CareGiverNotApprovedReadComponent;