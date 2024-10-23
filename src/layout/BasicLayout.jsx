import { useState } from 'react';
import { Icon } from '@iconify/react';
import SimpleBar from 'simplebar-react'; // simplebar-react 임포트
import 'simplebar-react/dist/simplebar.min.css'; // simplebar-react 스타일
import '../assets/css/styles.min.css'; // 템플릿의 스타일 추가

function BasicLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
             data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            {/* 사이드바 */}
            <aside className="left-sidebar">
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" className="text-nowrap logo-img">
                            <img src="/src/assets/images/logos/logo.svg" alt=""/>
                        </a>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear"
                                              className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./index.html" aria-expanded="false">
                                    <iconify-icon icon="solar:widget-add-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear"
                                              className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">UI COMPONENTS</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
                                    <iconify-icon icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
                                    <span className="hide-menu">Buttons</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                                    <iconify-icon icon="solar:danger-circle-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Alerts</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./ui-card.html" aria-expanded="false">
                                    <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Card</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                                    <iconify-icon icon="solar:file-text-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Forms</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./ui-typography.html" aria-expanded="false">
                                    <iconify-icon icon="solar:text-field-focus-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Typography</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear"
                                              className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">AUTH</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./authentication-login.html" aria-expanded="false">
                                    <iconify-icon icon="solar:login-3-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Login</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./authentication-register.html" aria-expanded="false">
                                    <iconify-icon icon="solar:user-plus-rounded-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Register</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear"
                                              className="nav-small-cap-icon fs-4"></iconify-icon>
                                <span className="hide-menu">EXTRA</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./icon-tabler.html" aria-expanded="false">
                                    <iconify-icon icon="solar:sticker-smile-circle-2-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Icons</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="./sample-page.html" aria-expanded="false">
                                    <iconify-icon icon="solar:planet-3-line-duotone"></iconify-icon>
                                    <span className="hide-menu">Sample Page</span>
                                </a>
                            </li>
                        </ul>
                        <div
                            className="unlimited-access d-flex align-items-center hide-menu bg-primary-subtle position-relative mb-7 mt-4 p-3 rounded">
                            <div className="me-2 flex-shrink-0">
                                <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">Upgrade to pro</h6>
                                <a href="https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=33"
                                   target="_blank"
                                   className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</a>
                            </div>
                            <div className="unlimited-access-img">
                                <img src="../assets/images/backgrounds/rupee.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>

            {/* 메인 래퍼와 헤더 */}
            <div className="body-wrapper">
                {/* 헤더 */}
                <header className="app-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item d-block d-xl-none">
                                <a className="nav-link sidebartoggler" id="headerCollapse" href="#"
                                   onClick={() => setSidebarOpen(!sidebarOpen)}>
                                    <Icon icon="ti:ti-menu-2"/>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon icon="solar:bell-linear"/>
                                    <div className="notification bg-primary rounded-circle"></div>
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
                            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                                <a href="https://www.wrappixel.com/templates/materialm-free-bootstrap-admin/"
                                   target="_blank" className="btn btn-primary">Download Free</a>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="drop2" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        <img src="../assets/images/profile/user-1.jpg" alt="" width="35" height="35"
                                             className="rounded-circle"/>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                         aria-labelledby="drop2">
                                        <div className="message-body">
                                            <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                                                <Icon icon="ti:ti-user"/>
                                                <p className="mb-0">My Profile</p>
                                            </a>
                                            <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                                                <Icon icon="ti:ti-mail"/>
                                                <p className="mb-0">My Account</p>
                                            </a>
                                            <a href="#" className="d-flex align-items-center gap-2 dropdown-item">
                                                <Icon icon="ti:ti-list-check"/>
                                                <p className="mb-0">My Task</p>
                                            </a>
                                            <a href="./authentication-login.html"
                                               className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {/* 본문 내용 */}
                <div className="body-wrapper-inner">
                    <div className="container-fluid">
                        {/* 자식 요소 출력 */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicLayout;
