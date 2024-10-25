import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteGiver, getCareGiverList, getCareGiverOne} from "@/api/caregiverAPI.js";
import CommonDetailComponent from "@/common/CommonDetailComponent.jsx";

const tmp = [
    "cgname", "cgage", "cgphone", "cgemail", "cgpw"
];

function CareGiverComponent() {
    return (
        <div>
            <CommonTableComponent tmp={tmp}
                                  func={getCareGiverList}
                                  detailFn={getCareGiverOne}
                                  delfn={deleteGiver}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;