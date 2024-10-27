import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteQNA, getQNAList, getQNAOne} from "@/api/qnaAPI.js";

const tmp = [
    "qno", "qtitle", "checkAnswer", "regDate", "modDate", "qdelete"
];

function QNAListTableComponent() {
    return (
        <div>
            <CommonTableComponent tmp={tmp} func={getQNAList} detailFn={getQNAOne} delfn={deleteQNA}></CommonTableComponent>
        </div>
    );
}

export default QNAListTableComponent;