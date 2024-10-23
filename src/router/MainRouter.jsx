import {createBrowserRouter} from "react-router-dom";
import FAQRouter from "./FAQRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CareGiverRouter from "./CareGiverRouter.jsx";
import CareTakerRouter from "./CareTakerRouter.jsx";
import MainPage from "../page/MainPage.jsx";


const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    FAQRouter,
    QNARouter,
    CareGiverRouter,
    CareTakerRouter





    ]);

export default MainRouter;