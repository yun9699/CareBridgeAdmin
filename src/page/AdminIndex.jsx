import BasicLayout from "../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

function AdminIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet></Outlet>
            </div>
        </BasicLayout>
    );
}

export default AdminIndex;