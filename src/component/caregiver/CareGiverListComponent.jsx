import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {
    getCareGiverList,
    updateCareGiver
} from "@/api/caregiverAPI.js";
import {careGiverColumn, careGiverTableHeader} from "@/page/caregiver/CareGiverIndex.jsx";

function CareGiverListComponent() {

    return (
        <div>

            <CommonTableComponent
                name={"caregiver"}
                tableHeader={careGiverTableHeader}
                column={careGiverColumn}
                listFn={getCareGiverList}
                updateFn={updateCareGiver}
                bridge={"approved"}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverListComponent;