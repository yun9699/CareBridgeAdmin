import CareTakerComponent from "../component/caretaker/CareTakerComponent.jsx";

import {Outlet} from "react-router-dom";

function CareTakerPage() {
    return (

        <div>
        <CareTakerComponent/>

        <Outlet/>
        </div>
    );
}

export default CareTakerPage;