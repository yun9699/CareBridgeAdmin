import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const Loading = <LoadingPage/>

const CareTakerIndex = lazy(() => import("../page/caretaker/CareTakerIndexPage.jsx"))
const CareTakerList = lazy(() => import("../page/caretaker/CareTakerPage.jsx"))
const CareTakerDetail = lazy(() => import("../page/caretaker/CareTakerDetailPage.jsx"))

const CareTakerRouter = {

    path: '/careTaker',
    element: <Suspense fallback={Loading}><CareTakerIndex/></Suspense>,
    children: [

        {
            path: "list",
            element: <Suspense fallback={Loading}><CareTakerList/></Suspense>
        },
        {
            path: "detail",
            element: <Suspense fallback={Loading}><CareTakerDetail/></Suspense>
        }

    ]


}

export default CareTakerRouter;