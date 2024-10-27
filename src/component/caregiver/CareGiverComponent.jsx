import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteGiver, getCareGiverList, getCareGiverOne} from "@/api/caregiverAPI.js";
import CommonDetailComponent from "@/common/CommonDetailComponent.jsx";

const column = [
    "cgno", "cgname", "cgage", "cgphone", "cgemail", "cgpw"
];

function CareGiverComponent() {
    return (
        <div>
            <CommonTableComponent column={column}
                                  listFn={getCareGiverList}
                                  detailFn={getCareGiverOne}
                                  delfn={deleteGiver}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;