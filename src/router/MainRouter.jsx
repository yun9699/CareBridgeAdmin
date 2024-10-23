import {createBrowserRouter} from "react-router-dom";
import QNARouter from "./QNARouter.jsx";
import MainPage from "../page/MainPage.jsx";
import careGiverRouter from "./CareGiverRouter.jsx";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    QNARouter,
    careGiverRouter


    ]);

export default MainRouter;