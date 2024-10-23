import { useState } from 'react';
import { Icon } from '@iconify/react';
import '../assets/css/styles.min.css';

function BasicLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="page-wrapper min-h-screen bg-gray-50" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            {/* 사이드바 */}
            <aside className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>

                {/* 로고 영역 */}
                <div className="p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xl font-semibold">MaterialM</span>
                    </div>
                </div>

                {/* 네비게이션 영역 */}
                <nav className="h-[calc(100vh-5rem)] overflow-y-auto
                    scrollbar-none hover:scrollbar-thin hover:scrollbar-track-transparent
                    hover:scrollbar-thumb-gray-300 transition-all duration-300">

                    <div className="p-4 space-y-6">
                        {/* HOME 섹션 */}
                        <div>
                            <h2 className="text-xs font-medium text-gray-500 mb-2">HOME</h2>
                            <div className="space-y-1">
                                <a href="/" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600">
                                    <Icon icon="solar:widget-add-line-duotone" className="text-xl" />
                                    <span>Dashboard</span>
                                </a>
                            </div>
                        </div>

                        {/* UI COMPONENTS 섹션 */}
                        <div>
                            <h2 className="text-xs font-medium text-gray-500 mb-2">UI COMPONENTS</h2>
                            <div className="space-y-1">
                                {[
                                    { href: '/buttons', icon: 'solar:layers-minimalistic-bold-duotone', label: 'Buttons' },
                                    { href: '/alerts', icon: 'solar:danger-circle-line-duotone', label: 'Alerts' },
                                    { href: '/card', icon: 'solar:card-linear', label: 'Card' },
                                    { href: '/forms', icon: 'solar:file-text-line-duotone', label: 'Forms' },
                                    { href: '/typography', icon: 'solar:text-field-focus-line-duotone', label: 'Typography' }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <Icon icon={item.icon} className="text-xl text-gray-500" />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* AUTH 섹션 */}
                        <div>
                            <h2 className="text-xs font-medium text-gray-500 mb-2">AUTH</h2>
                            <div className="space-y-1">
                                {[
                                    { href: '/login', icon: 'solar:login-3-line-duotone', label: 'Login' },
                                    { href: '/register', icon: 'solar:user-plus-line-duotone', label: 'Register' }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <Icon icon={item.icon} className="text-xl text-gray-500" />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* EXTRA 섹션 */}
                        <div>
                            <h2 className="text-xs font-medium text-gray-500 mb-2">EXTRA</h2>
                            <div className="space-y-1">
                                {[
                                    { href: '/icons', icon: 'solar:widget-add-line-duotone', label: 'Icons' },
                                    { href: '/sample', icon: 'solar:file-text-line-duotone', label: 'Sample Page' }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <Icon icon={item.icon} className="text-xl text-gray-500" />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Upgrade Pro 섹션 */}
                        <div className="mt-4 mx-3 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Upgrade to pro</h3>
                                </div>
                                <img src="/assets/images/rupee.png" alt="" className="w-12 h-12" />
                            </div>
                            <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                Buy Pro
                            </button>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* 메인 콘텐츠 영역 */}
            <div className="md:ml-64 min-h-screen">
                <header className="bg-white shadow-sm">
                    <nav className="px-4 py-3">
                        <div className="flex items-center justify-between">
                            <button
                                className="md:hidden text-gray-500 hover:text-gray-600"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <Icon icon="solar:menu-dots-linear" className="text-2xl" />
                            </button>
                        </div>
                    </nav>
                </header>
                <main className="p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default BasicLayout;