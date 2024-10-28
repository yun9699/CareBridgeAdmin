import React from "react";
import FAQListTableComponent from "../../component/faq/FAQListTableComponent.jsx";

function FAQTakerPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                보호자/피간병인 FAQ
            </h1>
            <FAQListTableComponent selectedCategory="taker" />
        </div>
    );
}

export default FAQTakerPage;
