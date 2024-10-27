
import { getFAQList } from "../../api/faqAPI";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";


const column = [
    "fno", "fcategory", "ftitle"
];

function FAQListTableComponent({ selectedCategory }) {


    return (
        <div>
            <CommonTableComponent column={column}
                                  listFn={getFAQList}
            >
            </CommonTableComponent>
        </div>);
}

export default FAQListTableComponent;
