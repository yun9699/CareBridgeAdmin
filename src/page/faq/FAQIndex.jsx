import BasicLayout from "../../layout/BasicLayout.jsx";
import React from "react";
import FAQComponent from "../../component/faq/FAQComponent.jsx";

function FAQIndex() {

    return (
        <BasicLayout>
            <div className="flex items-center justify-between my-6">
                <h1 className=" text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    FAQ 관리 페이지
                </h1>
            </div>
            <FAQComponent/>
        </BasicLayout>
    );
}

export default FAQIndex;