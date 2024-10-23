import {createBrowserRouter} from "react-router-dom";
import FAQRouter from "./FAQRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CareGiverRouter from "./CareGiverRouter.jsx";
import CareTakerRouter from "./CareTakerRouter.jsx";
import {lazy} from "react";
import MainPage from "../page/MainPage.jsx";

const AdminDetail = lazy(() => import("../page/AdminDetailPage.jsx"))

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: "detail",
                element: <AdminDetail/>,
            }
        ],

    },
    FAQRouter,
    QNARouter,
    CareGiverRouter,
    CareTakerRouter


    ]);

export default MainRouter;