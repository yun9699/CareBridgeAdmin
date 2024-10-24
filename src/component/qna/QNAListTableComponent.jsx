import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getQNAList} from "@/api/qnaAPI.js";

const tmp = [
    "qtitle", "regDate", "modDate", "qdelete"
];

function QNAListTableComponent() {
    return (
        <div>
            <CommonTableComponent tmp={tmp} func={getQNAList}></CommonTableComponent>
        </div>
    );
}

export default QNAListTableComponent;