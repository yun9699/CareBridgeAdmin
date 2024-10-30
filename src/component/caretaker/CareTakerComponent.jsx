import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {
    deleteTaker,
    getCareTakerList,
    updateTaker
} from "@/api/caretakerAPI.js";


const column = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

const tableHeader = [
    "name", "age", "email", "phone", "address"
]

function CareTakerComponent() {

    return (
        <CommonTableComponent
                              tableHeader={tableHeader}
                              name={"caretaker"}
                              column={column}
                              listFn={getCareTakerList}
                              delfn={deleteTaker}
                              updateFn={updateTaker}
        >
        </CommonTableComponent>
    );
}

export default CareTakerComponent;
