import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {deleteTaker, getCareTakerList, getCareTakerOne} from "@/api/caretakerAPI.js";

const column = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

function CareTakerComponent() {


    return (
        <CommonTableComponent column={column}
                              listFn={getCareTakerList}
                              detailFn={getCareTakerOne}
                              delfn={deleteTaker}
        ></CommonTableComponent>
    );
}

export default CareTakerComponent;
