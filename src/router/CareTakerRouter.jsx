import {lazy} from "react";


const CareTakerIndex = lazy(() => import("../page/CareTaker/CareTakerIndexPage.jsx"))
const CareTakerList = lazy(() => import("../page/CareTaker/CareTakerPage.jsx"))

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