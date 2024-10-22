
import {lazy} from "react";

const CareGiver = lazy(() => import("../page/CareGiverPage"));

const CareGiverRouter = {
    path: "/caregiver",
    element: <CareGiver></CareGiver>
}

export default CareGiverRouter;