import React from 'react';

import {careGiverColumn, careGiverTableHeader} from "@/page/caregiver/CareGiverIndex.jsx";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {approveGiver, deleteGiver, getNotApprovedGiverList} from "@/api/caregiverAPI.js";

function CareGiverNotApprovedListComponent() {

    return (

        <div>

            <CommonTableComponent
                name={"caregiver"}
                tableHeader={careGiverTableHeader}
                column={careGiverColumn}
                listFn={getNotApprovedGiverList}
                actionSelect={approveGiver}
                delFn={deleteGiver}
                bridge={"notapproved"}
            >
            </CommonTableComponent>
        </div>
    );
}

export default CareGiverNotApprovedListComponent;