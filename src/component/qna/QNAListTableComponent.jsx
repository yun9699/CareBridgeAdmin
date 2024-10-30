import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import { deleteQNA, getQNAList, getQNAOne, updateQNA } from "@/api/qnaAPI.js";

const column = [
    "qno", "qtitle", "writer", "checkAnswer", "regDate", "modDate"
];

const tableHeader = [
    "title", "writer", "checkAnswer", "created date", "updated date"
];

function QNAListTableComponent() {
    const renderWriter = (item) => {
        return item.cgemail || item.ctemail; // cgemail이 있으면 cgemail, 없으면 ctemail, 둘 다 없으면 "정보 없음"
    };

    return (
        <div>
            <CommonTableComponent
                name={'qna'}
                tableHeader={tableHeader}
                column={column}
                listFn={getQNAList}
                detailFn={getQNAOne}
                delfn={deleteQNA}
                updateFn={updateQNA}
                renderWriter={renderWriter} // writer 렌더링 함수 전달
            />
        </div>
    );
}

export default QNAListTableComponent;
