import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteGiver, getCareGiverList, getCareGiverOne, updateCareGiver} from "@/api/caregiverAPI.js";

const column = [
    "cgno", "cgname", "cgage", "cgphone", "cgemail"
];

const tableHeader = [
    "name", "age", "phone", "email"
]

function CareGiverComponent() {
    return (
        <div>
            <CommonTableComponent
                                  tableHeader={tableHeader}
                                  column={column}
                                  listFn={getCareGiverList}
                                  detailFn={getCareGiverOne}
                                  delfn={deleteGiver}
                                  updateFn={updateCareGiver}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;