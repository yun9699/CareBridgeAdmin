import {Outlet} from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout.jsx";

function CareGiverIndex() {
    return (
        <div>
            <BasicLayout>
                <Outlet/>
            </BasicLayout>
        </div>
    );
}

export default CareGiverIndex;