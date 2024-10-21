import {lazy} from "react";


const CareTaker = lazy(() => import("../page/CareTakerPage.jsx"))

const CareTakerRouter = {

    path: '/careTaker',
    element: <CareTaker/>


}

export default CareTakerRouter;