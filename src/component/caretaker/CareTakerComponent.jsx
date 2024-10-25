import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteTaker, getCareTakerList, getCareTakerOne} from "@/api/caretakerAPI.js";
import {deleteQNA} from "@/api/qnaAPI.js";

const tmp = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

function CareTakerComponent() {


    return (
        <CommonTableComponent tmp={tmp} func={getCareTakerList} detailFn={getCareTakerOne} delfn={deleteTaker}></CommonTableComponent>
    );
}

export default CareTakerComponent;
