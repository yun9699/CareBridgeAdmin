
import {getFAQList, getFAQOne, updateFAQ} from "../../api/faqAPI";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";


const column = [
    "fno", "fcategory", "ftitle"
];

const tableHeader = [
    "category", "title"
]

function FAQListTableComponent({  }) {


    return (
        <div>
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

export default FAQListTableComponent;