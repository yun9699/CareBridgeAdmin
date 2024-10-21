import { Home, Users, DollarSign, FileText, Settings } from 'lucide-react';
import {useState} from "react";

function BasicLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-green-50">
            {/* 사이드바 */}
            <aside
                className={`bg-green-800 text-green-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <nav>
                    <a href="#"
                       className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white">
                        <Home className="inline-block mr-2" size={20}/>
                        대시보드
                    </a>
                    <a href="#"
                       className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white">
                        <Users className="inline-block mr-2" size={20}/>
                        사용자 관리
                    </a>
                    <a href="#"
                       className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white">
                        <DollarSign className="inline-block mr-2" size={20}/>
                        간병비 관리
                    </a>
                    <a href="#"
                       className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white">
                        <FileText className="inline-block mr-2" size={20}/>
                        서비스 기록
                    </a>
                    <a href="#"
                       className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700 hover:text-white">
                        <Settings className="inline-block mr-2" size={20}/>
                        설정
                    </a>
                </nav>
            </aside>
        </div>
    )

}

export default BasicLayout;