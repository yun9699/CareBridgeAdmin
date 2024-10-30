// FAQComponent.jsx
import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteFAQ, getFAQListGiver, getFAQListTaker, getFAQOne, updateFAQ} from "@/api/faqAPI.js";
import { useState } from "react";
import FAQListSelectComponent from "@/component/faq/FAQlistSelectComponent.jsx";

const column = [
    "fno", "fcategory", "ftitle"
];

const tableHeader = [
    "category", "title"
]

function FAQComponent() {
    const [list, setList] = useState(true);
    const [refresh, setRefresh] = useState(false);

    // listFn을 함수로 정의하여 CommonTableComponent에 전달
    const listFn = async (page) => {
        try {
            const fn = list ? getFAQListGiver : getFAQListTaker;
            const res = await fn(page);

            // response.list의 fcategory 값을 변환
            if (res && res.list) {
                res.list = res.list.map(item => {
                    console.log("현재 fcategory 값:", item.fcategory); // 디버깅용
                    return {
                        ...item,
                        fcategory: item.fcategory === "1" ? "간병인" : "보호자/피간병인"
                    };
                });
            }

            return res;

        } catch (error) {
            console.error("FAQ 데이터 로딩 실패:", error);
            return {
                list: [],
                total: 0,
                pageRequest: {},
                startPage: 1,
                endPage: 1,
                prev: false,
                next: false
            };
        }
    };

    const handleSelectOption = (selectedList) => {
        setList(selectedList);
    };

    const handleDelete = async (fno) => {
        await deleteFAQ(fno);
        setRefresh(!refresh);

    };


    return (
        <div>
            <FAQListSelectComponent
                listOption={handleSelectOption}
            />
            <CommonTableComponent
                name={"faq"}
                tableHeader={tableHeader}
                column={column}
                listFn={listFn}
                detailFn={getFAQOne}
                updateFn={updateFAQ}
                delFn={handleDelete}
                refresh={refresh}
            />
        </div>
    );
}

export default FAQComponent;