import BasicLayout from "../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

function AdminIndex() {
    return (
        <BasicLayout>
            <div className="flex-1 p-10 bg-green-50">
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default AdminIndex;