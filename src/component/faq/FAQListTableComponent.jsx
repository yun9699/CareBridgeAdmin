
import { getFAQList } from "../../api/faqAPI";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";


const column = [
    "fno", "fcategory", "ftitle"
];

const tableHeader = [
    "category", "title"
]

function FAQListTableComponent({ selectedCategory }) {


    return (
        <div>
            <CommonTableComponent
                                tableHeader={tableHeader}
                                column={column}
                                listFn={getFAQList}
            >
            </CommonTableComponent>
        </div>);
}

export default FAQListTableComponent;
