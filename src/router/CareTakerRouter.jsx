import {lazy} from "react";


const CareTakerIndex = lazy(() => import("../page/CareTakerIndexPage.jsx"))
const CareTakerList = lazy(() => import("../page/CareTakerPage.jsx"))

const CareTakerRouter = {

    path: '/careTaker',
    element: <CareTakerIndex/>,
    children: [

        {
            path: "list",
            element: <CareTakerList/>
        }

    ]


}

export default CareTakerRouter;