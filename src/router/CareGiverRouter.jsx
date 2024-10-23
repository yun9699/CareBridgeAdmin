import {lazy} from "react";

const CareGiverIndex = lazy(() => import('../page/careGiver/CareGiverIndex.jsx'))
const CareGiver = lazy(() => import('../page/careGiver/CareGiverPage'))

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