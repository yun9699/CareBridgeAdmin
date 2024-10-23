import BasicLayout from "../../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";


function FAQIndexPage() {
    return (
        <BasicLayout>

            <div>FAQ Index Page</div>
            <Outlet/>

        </BasicLayout>
    );
}

export default FAQIndexPage;