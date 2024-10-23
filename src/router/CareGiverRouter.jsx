
import {lazy} from "react";

const CareGiver = lazy(() => import("../page/CareGiverPage"));
const CareGiverBase = lazy(() => import('../page/CareGiverIndex.jsx'))

const CareGiverRouter = {
    path: "/caregiver",
    element: <CareGiverBase/>,
    children: [
        {
            path: "",
            element: <CareGiver/>
        },
    ]
}

export default CareGiverRouter;