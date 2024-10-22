import {createBrowserRouter} from "react-router-dom";
import AdminIndex from "../page/AdminIndex.jsx";
import FAQRouter from "./FAQRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CareGiverRouter from "./CareGiverRouter.jsx";
import CareTakerRouter from "./CareTakerRouter.jsx";
import {lazy} from "react";

const CareTakerDetail = lazy(() => import("../page/AdminDetailPage.jsx"))

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <AdminIndex/>,
        children: [
            CareTakerRouter,

            {
                path: "ctDetail",
                element: <CareTakerDetail/>,
            }
        ],

    },
    FAQRouter,
    QNARouter,
    CareGiverRouter


    ]);

export default MainRouter;