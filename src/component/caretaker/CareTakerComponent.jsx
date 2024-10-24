import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {getCareTakerList} from "@/api/caretakerAPI.js";

const tmp = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

function CareTakerComponent() {


    return (
        <CommonTableComponent tmp={tmp} func={getCareTakerList}></CommonTableComponent>
    );
}

export default CareTakerComponent;
