import {createBrowserRouter} from "react-router-dom";
import AdminIndex from "../page/AdminIndex.jsx";
import FAQRouter from "./FAQRouter.jsx";
import QNARouter from "./QNARouter.jsx";
import CareGiverRouter from "./CareGiverRouter.jsx";
import CareTakerRouter from "./CareTakerRouter.jsx";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <AdminIndex/>,
        children: [
            FAQRouter,
        ]
    },
        QNARouter,
        CareGiverRouter,
        CareTakerRouter,

]);

export default MainRouter;