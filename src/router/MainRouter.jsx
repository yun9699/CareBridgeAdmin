import {createBrowserRouter} from "react-router-dom";
import QNARouter from "./QNARouter.jsx";
import MainPage from "../page/MainPage.jsx";
import careGiverRouter from "./CareGiverRouter.jsx";
import careTakerRouter from "@/router/CareTakerRouter.jsx";
import FAQRouter from "@/router/FAQRouter.jsx";


const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,

    },
    QNARouter,
    careGiverRouter,
    careTakerRouter,
    FAQRouter

    ]);

export default MainRouter;