import {createBrowserRouter} from "react-router-dom";
import FAQRouter from "./FAQRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CareGiverRouter from "./CareGiverRouter.jsx";
import CareTakerRouter from "./CareTakerRouter.jsx";
import MainPage from "../page/MainPage.jsx";
import LoadingPage from "@/page/LoadingPage.jsx";
import {Suspense} from "react";


const Loading = <LoadingPage/>

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><MainPage/></Suspense>,
    },
    FAQRouter,
    QNARouter,
    CareGiverRouter,
    CareTakerRouter





    ]);

export default MainRouter;