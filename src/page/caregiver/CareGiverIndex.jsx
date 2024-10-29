import {Outlet} from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout.jsx";

export const careGiverColumn = [
    "cgno", "cgname", "cgage", "cgphone", "cgemail"
];

export const careGiverTableHeader = [
    "name", "age", "phone", "email"
]

function CareGiverIndex() {
    return (
        <div>
            <BasicLayout>
                <Outlet/>
            </BasicLayout>
        </div>
    );
}

export default CareGiverIndex;