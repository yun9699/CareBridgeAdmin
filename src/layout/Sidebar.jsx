import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const [sidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activePath, setActivePath] = useState("/");
    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/", icon: "M3 12l18-9v18l-18-9z", hasDropdown: false },
        {
            name: "간병인",
            path: "/caregiver",
            icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
            hasDropdown: true,
            subItems: [
                { name: "리스트", path: "/caregiver" },
                { name: "승인 대기 리스트", path: "/caregiver/notApprovedGivers" },
                { name: "불만 접수", path: "/caregiver/complaint" }

            ]
        },
        {
            name: "보호자",
            path: "/careTaker/list",
            icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
            hasDropdown: true,
            subItems: [
                { name: "리스트", path: "/careTaker" },
                { name: "불만 접수", path: "/caretaker/complaint" }
            ]
        },
        { name: "QNA", path: "/qna/list", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z", hasDropdown: false },
        { name: "FAQ", path: "/faq", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", hasDropdown: false }
    ];

    const handleDropdownToggle = (menuName) => {
        setActiveDropdown(prevState => (prevState === menuName ? null : menuName));
    };

    useEffect(() => {
        setActivePath(location.pathname);
        const currentMenuItem = menuItems.find(item => item.path === location.pathname);
        if (currentMenuItem && currentMenuItem.hasDropdown) {
            setActiveDropdown(currentMenuItem.name);
        } else {
            setActiveDropdown(null);
        }
    }, [location.pathname]);

    return (
        <div>
            <aside className={`z-20 ${sidebarOpen ? 'block' : 'hidden'} w-64 overflow-y-auto bg-white md:block flex-shrink-0`}>
                <div className="py-4 text-gray-500">
                    <Link className="ml-6 text-lg font-bold text-gray-800 flex items-center" to="/">
                        <img src="/logo.png" alt="Logo" className="mr-2 h-8"/>
                        CareBridge
                    </Link>
                    <ul className="mt-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative px-6 py-3">
                                {activePath === item.path && (
                                    <span className="absolute inset-y-0 left-0 w-1 bg-green-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                                )}
                                {item.hasDropdown ? (
                                    <div
                                        onClick={() => handleDropdownToggle(item.name)}
                                        className="cursor-pointer"
                                    >
                                        <div
                                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
                                                activePath === item.path ? 'text-green-600' : 'text-gray-800 hover:text-green-600'
                                            }`}
                                        >
                                            <svg className="w-5 h-5" aria-hidden="true" fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path d={item.icon}></path>
                                            </svg>
                                            <span className="ml-4">{item.name}</span>
                                            <svg
                                                className={`ml-auto w-4 h-4 transition-transform transform ${activeDropdown === item.name ? 'rotate-180' : 'rotate-0'}`}
                                                fill="none" stroke="currentColor" strokeWidth="2"
                                                viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 ${
                                            activePath === item.path ? 'text-green-600' : 'text-gray-800 hover:text-green-600'
                                        }`}
                                    >
                                        <svg className="w-5 h-5" aria-hidden="true" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path d={item.icon}></path>
                                        </svg>
                                        <span className="ml-4">{item.name}</span>
                                    </Link>
                                )}
                                {item.hasDropdown && item.subItems && (
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? 'max-h-40' : 'max-h-0'}`}>
                                        <ul className="pl-10 mt-2 space-y-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path}
                                                          className="text-gray-700 hover:text-green-600">{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
