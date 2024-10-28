import { useEffect, useState } from "react";
import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import { getFAQListGiver, getFAQListTaker } from "../../api/faqAPI";

const column = [
    "fno", "fcategory", "ftitle"
];

const tableHeader = [
    "category", "title"
];

function FAQListTableComponent({ selectedCategory }) {
    const [faqList, setFaqList] = useState([]);

    // selectedCategory 변경에 따라 데이터를 가져오기
    useEffect(() => {
        const fetchFAQList = async () => {
            try {
                // 선택된 fcategory에 맞는 API 호출
                let response;
                if (selectedCategory === "1") {
                    response = await getFAQListGiver();
                } else if (selectedCategory === "2") {
                    response = await getFAQListTaker();
                }
                setFaqList(response.list); // API 호출 후 데이터를 상태에 저장
            } catch (error) {
                console.error("FAQ 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        fetchFAQList();
    }, [selectedCategory]);

    return (
        <div>
            <CommonTableComponent
                tableHeader={tableHeader}
                column={column}
                listData={faqList} // 데이터 배열을 바로 전달
            />
        </div>
    );
}

export default FAQListTableComponent;
