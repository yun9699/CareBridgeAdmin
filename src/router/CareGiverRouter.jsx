import {lazy} from "react";

const CareGiverIndex = lazy(() => import('../page/QNA/QNAIndex.jsx'))
const CareGiver = lazy(() => import('../page/careGiver/CareGiverPage.jsx'))

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