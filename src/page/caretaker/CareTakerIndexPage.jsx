import BasicLayout from "../../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";


function CareTakerIndexPage() {
    return (
        <BasicLayout>

            <div>CareTaker Index Page</div>
            <Outlet/>

        </BasicLayout>
    );
}

export default CareTakerIndexPage;