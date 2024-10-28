import BasicLayout from "../../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";


function CareTakerIndexPage() {
    return (
        <BasicLayout>

            <Outlet/>

        </BasicLayout>
    );
}

export default CareTakerIndexPage;