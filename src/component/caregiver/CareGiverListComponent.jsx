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
                                  tableHeader={careGiverTableHeader}
                                  column={careGiverColumn}
                                  listFn={getCareGiverList}
                                  updateFn={updateCareGiver}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverListComponent;