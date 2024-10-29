// MainPage.jsx
import BasicLayout from "../layout/BasicLayout.jsx";
import { Outlet } from "react-router-dom";
import MainComponent from "../component/MainComponent.jsx";

function MainPage() {
    return (
        <BasicLayout>
            <div className="flex justify-center">
                <div className="h-100 w-full max-w-3xl"> {/* 가로 길이를 제한하고 적당한 높이 설정 */}
                    <MainComponent />
                </div>
                <Outlet />
            </div>
        </BasicLayout>
    );
}

export default MainPage;
