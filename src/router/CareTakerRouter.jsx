import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";
import {Navigate} from "react-router-dom";


const Loading = <LoadingPage/>

const CareTakerIndex = lazy(() => import("../page/caretaker/CareTakerIndexPage.jsx"))
const CareTakerList = lazy(() => import("../page/caretaker/CareTakerPage.jsx"))
const CareTakerMatch = lazy(() => import("../page/caretaker/CareTakerMatchPage.jsx"))
const CareTakerComplaintList = lazy(() => import("../page/caretaker/CareTakerComplaintListPage.jsx"))
const CareTakerRead = lazy(() => import("../page/caretaker/CareTakerReadPage"))

const CareTakerRouter = {

    path: '/careTaker',
    element: <Suspense fallback={Loading}><CareTakerIndex/></Suspense>,
    children: [
        {
            path:"",
            element: <Navigate to='list' replace={true}></Navigate>
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><CareTakerList/></Suspense>
        },
        {
            path: "match",
            element: <Suspense fallback={Loading}><CareTakerMatch/></Suspense>
        },
        {
            path: "complaint",
            element: <Suspense fallback={Loading}><CareTakerComplaintList/></Suspense>
        },
        {
            path: "read/:ctno",
            element: <Suspense fallback={Loading}><CareTakerRead/></Suspense>
        }

    ]


}

export default CareTakerRouter;