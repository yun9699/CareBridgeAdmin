import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteQNA, getQNAList, getQNAOne, updateQNA} from "@/api/qnaAPI.js";
import {updateCareGiver} from "@/api/caregiverAPI.js";

const column = [
    "qno", "qtitle", "checkAnswer", "regDate", "modDate"
];

const tableHeader = [
    "title", "checkAnswer", "created date", "updated date"
]

function QNAListTableComponent() {
    return (
        <div>
            <CommonTableComponent
                name={'qna'}
                tableHeader={tableHeader}
                column={column}
                listFn={getQNAList}
                detailFn={getQNAOne}
                delfn={deleteQNA}
                updateFn={updateQNA}>
            </CommonTableComponent>
        </div>
    );
}

export default QNAListTableComponent;