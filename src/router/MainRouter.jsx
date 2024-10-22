import {createBrowserRouter} from "react-router-dom";
import QNARouter from "./QNARouter.jsx";
import MainPage from "../page/MainPage.jsx";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    QNARouter,


    ]);

export default MainRouter;