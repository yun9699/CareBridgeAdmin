import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getCareTakerList, getCareTakerOne} from "@/api/caretakerAPI.js";

const tmp = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

function CareTakerComponent() {


    return (
        <CommonTableComponent tmp={tmp} func={getCareTakerList} detailFn={getCareTakerOne}></CommonTableComponent>
    );
}

export default CareTakerComponent;
