import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getFAQListGiver, getFAQListTaker, getFAQOne, updateFAQ} from "@/api/faqAPI.js";
import {useEffect, useState} from "react";
import {}
import {getCareGiverList, getNotApprovedGiverList} from "@/api/caregiverAPI.js";


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
            <
            <CommonTableComponent
                tableHeader={tableHeader}
                column={column}
                listFn={getFAQList}
                detailFn={getFAQOne}
                updateFn={updateFAQ}
            >
            </CommonTableComponent>
        </div>);
}

export default FAQComponent;