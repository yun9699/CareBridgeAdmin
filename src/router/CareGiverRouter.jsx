import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const CareGiverIndex = lazy(() => import('../page/caregiver/CareGiverIndex.jsx'))
const CareGiver = lazy(() => import('../page/caregiver/CareGiverPage'))

const Loading = <LoadingPage/>

const CareGiverRouter = {
    path: "/caregiver",
    element: <Suspense fallback={Loading}><CareGiverIndex/></Suspense>,
    children: [
        {
            path: "",
            element: <Suspense fallback={Loading}><CareGiver/></Suspense>
        }
    ]
}

export default CareGiverRouter;