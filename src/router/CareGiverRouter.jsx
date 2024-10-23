import {lazy} from "react";

const CareGiverIndex = lazy(() => import('../page/QNAIndex'))
const CareGiver = lazy(() => import('../page/CareGiverPage'))

const CareGiverRouter = {
    path: "/caregiver",
    element: <CareGiverIndex/>,
    children: [
        {
            path: "",
            element: <CareGiver/>
        }
    ]
}

export default CareGiverRouter;