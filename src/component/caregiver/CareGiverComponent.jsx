import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteGiver, getCareGiverList, getCareGiverOne} from "@/api/caregiverAPI.js";
import CommonDetailComponent from "@/common/CommonDetailComponent.jsx";

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
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;