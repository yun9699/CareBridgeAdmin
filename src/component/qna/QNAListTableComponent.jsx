import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteQNA, getQNAList, getQNAOne} from "@/api/qnaAPI.js";

const column = [
    "qno", "qtitle", "regDate", "modDate"
];

function QNAListTableComponent() {
    return (
        <div>
            <CommonTableComponent column={column} listFn={getQNAList} detailFn={getQNAOne} delfn={deleteQNA}></CommonTableComponent>
        </div>
    );
}

export default QNAListTableComponent;