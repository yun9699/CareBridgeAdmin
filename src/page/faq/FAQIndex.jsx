import BasicLayout from "../../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

function FAQIndex() {

    return (
        <div>
        <BasicLayout>
            <Outlet/>
        </BasicLayout>
        </div>
    );
}

export default FAQIndex;