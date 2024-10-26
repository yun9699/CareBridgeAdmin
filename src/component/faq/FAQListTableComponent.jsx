
import { getFAQList } from "../../api/faqAPI";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";


const tmp = [
    "fno", "fcategory", "ftitle"
];

function FAQListTableComponent({ selectedCategory }) {


    return (
        <div>
            <CommonTableComponent tmp={tmp}
                                  func={getFAQList}
            >
            </CommonTableComponent>
        </div>);
}

export default FAQListTableComponent;
