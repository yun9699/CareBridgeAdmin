import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {
    deleteGiver,
    getCareGiverList,
    getCareGiverOne,
    getNotApprovedGiverList,
    updateCareGiver
} from "@/api/caregiverAPI.js";
import {useEffect, useState} from "react";
import CareGiverListSelectComponent from "@/component/caregiver/CareGiverListSelectComponent.jsx";

const column = [
    "cgno", "cgname", "cgage", "cgphone", "cgemail"
];

const tableHeader = [
    "name", "age", "phone", "email"
]

function CareGiverComponent() {

    const [list, setList] = useState(true);

    const listFn = list ? getCareGiverList : getNotApprovedGiverList;

    const handleSelectOption = (selectedList) => {
        setList(selectedList);
    };

    return (
        <div>
            <CareGiverListSelectComponent
                listOption={handleSelectOption} // 여기에서 함수 참조를 직접 전달
            />

            <CommonTableComponent
                                  tableHeader={tableHeader}
                                  column={column}
                                  listFn={listFn}
                                  detailFn={getCareGiverOne}
                                  delfn={deleteGiver}
                                  updateFn={updateCareGiver}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;