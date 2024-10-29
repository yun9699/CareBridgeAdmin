import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const Loading = <LoadingPage/>

const CareTakerIndex = lazy(() => import("../page/caretaker/CareTakerIndexPage.jsx"))
const CareTakerList = lazy(() => import("../page/caretaker/CareTakerPage.jsx"))
const CareTakerMatch = lazy(() => import("../page/caretaker/CareTakerMatchPage.jsx"))

const CareTakerRouter = {

    path: '/careTaker',
    element: <Suspense fallback={Loading}><CareTakerIndex/></Suspense>,
    children: [
        {
            path: "list",
            element: <Suspense fallback={Loading}><CareTakerList/></Suspense>
        },
        {
            path: "match",
            element: <Suspense fallback={Loading}><CareTakerMatch/></Suspense>
        }
    ]


}

export default CareTakerRouter;