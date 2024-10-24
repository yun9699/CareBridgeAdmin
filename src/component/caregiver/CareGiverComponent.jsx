import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getCareGiverList} from "@/api/caregiverAPI.js";

const tmp = [
    "cgname", "cgage", "cgphone", "cgemail", "cgpw"
];

function CareGiverComponent() {
    return (
        <div>
            <CommonTableComponent tmp={tmp} func={getCareGiverList}></CommonTableComponent>
        </div>
    );
}

export default CareGiverComponent;