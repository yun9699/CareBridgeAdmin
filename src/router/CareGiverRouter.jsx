import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";
import {Navigate} from "react-router-dom";

const CareGiverIndex = lazy(() => import('../page/caregiver/CareGiverIndex'))
const CareGiverList = lazy(() => import('../page/caregiver/CareGiverListPage'))
const CareGiverNotApprovedList = lazy(() => import('../page/caregiver/CareGiverNotApprovedListPage'))
const CareGiverComplaintList = lazy(() => import("../page/caregiver/CareGiverComplaintListPage"))
const CareGiverApprovedRead = lazy(() => import("../page/caregiver/CareGiverApprovedReadPage.jsx"))
const CareGiverNotApprovedRead = lazy(() => import("../page/caregiver/CareGiverNotApprovedReadPage.jsx"))

const Loading = <LoadingPage/>

const CareGiverRouter = {
    path: "/caregiver",
    element: <Suspense fallback={Loading}><CareGiverIndex/></Suspense>,
    children: [
        {
            path:"",
            element: <Navigate to='list' replace={true}></Navigate>
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><CareGiverList/></Suspense>
        },
        {
            path: "notApprovedGivers",
            element: <Suspense fallback={Loading}><CareGiverNotApprovedList/></Suspense>
        },
        {
            path: "complaint",
            element: <Suspense fallback={Loading}><CareGiverComplaintList/></Suspense>
        },
        {
            path: "read/approved/:cgno",
            element: <Suspense fallback={Loading}><CareGiverApprovedRead/></Suspense>
        },
        {
            path: "read/notapproved/:cgno",
            element: <Suspense fallback={Loading}><CareGiverNotApprovedRead/></Suspense>
        }
    ]
}

export default CareGiverRouter;