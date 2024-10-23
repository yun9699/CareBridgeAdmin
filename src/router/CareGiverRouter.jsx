import {lazy} from "react";

const CareGiverIndex = lazy(() => import('../page/QNAIndex'))
const CareGiver = lazy(() => import('../page/CareGiverPage.jsx'))

const CareGiverRouter = {
    path: "/qna",
    element: <CareGiverIndex/>,
    children: [
        {
            path: "",
            element: <CareGiver/>
        }
    ]
}

export default CareGiverRouter;