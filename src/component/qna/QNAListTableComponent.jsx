import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteQNA, getQNAList, getQNAOne} from "@/api/qnaAPI.js";

const column = [
    "qno", "qtitle", "regDate", "modDate"
];

const tableHeader = [
    "title", "created date", "updated date"
]

function QNAListTableComponent() {
    return (
        <div>
            <CommonTableComponent
                tableHeader={tableHeader}
                column={column}
                listFn={getQNAList}
                detailFn={getQNAOne}
                delfn={deleteQNA}>
            </CommonTableComponent>
        </div>
    );
}

export default QNAListTableComponent;