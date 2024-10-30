import BasicLayout from "../../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

function FAQIndex() {

    return (
        <div>
            <BasicLayout>
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    FAQ 관리 페이지
                </h2>
                <Outlet/>
            </BasicLayout>
        </div>
    );
}

export default FAQIndex;