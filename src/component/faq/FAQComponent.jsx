import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getFAQListGiver, getFAQListTaker, getFAQOne, updateFAQ} from "@/api/faqAPI.js";
import {useEffect, useState} from "react";
import FAQListSelectComponent from "@/component/faq/FAQlistSelectComponent.jsx";


const column = [
    "fno", "fcategory", "ftitle"
];

const tableHeader = [
    "category", "title"
]

function FAQComponent() {

    const [list, setList] = useState(true);

    const listFn = list ? getFAQListGiver : getFAQListTaker;

    const handleSelectOption = (selectedList) => {
        setList(selectedList);
    };

    return (
        <div>
            <FAQListSelectComponent listOption={handleSelectOption}></FAQListSelectComponent>
            <CommonTableComponent
                tableHeader={tableHeader}
                column={column}
                listFn={listFn}
                detailFn={getFAQOne}
                updateFn={updateFAQ}
            >
            </CommonTableComponent>
        </div>);
}

export default FAQComponent;