import BasicLayout from "../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";
import MainComponent from "../component/MainComponent.jsx";

function MainPage() {
    return (
        <BasicLayout>
            <div>
                <MainComponent/>
                <Outlet />
            </div>
        </BasicLayout>
    );
}
export default MainPage;