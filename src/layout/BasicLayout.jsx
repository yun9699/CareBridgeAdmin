import { Home, Users, DollarSign, FileText, Settings } from 'lucide-react';
import {useState} from "react";

function BasicLayout({ children }) {

    return (
        <div className="flex h-screen bg-green-50">
            {/* 사이드바 */}
            (
            <aside className="left-sidebar">
                {/* Sidebar scroll */}
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" className="text-nowrap logo-img">
                            <img src="../assets/images/logos/logo.svg" alt="Logo" />
                        </a>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>

                    {/* Sidebar navigation */}
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
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
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
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
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
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
                                <iconify-icon icon="solar:menu-dots-linear" className="nav-small-cap-icon fs-4"></iconify-icon>
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

                        <div className="unlimited-access d-flex align-items-center hide-menu bg-primary-subtle position-relative mb-7 mt-4 p-3 rounded">
                            <div className="me-2 flex-shrink-0">
                                <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">Upgrade to pro</h6>
                                <a
                                    href="https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=33"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                                >
                                    Buy Pro
                                </a>
                            </div>
                            <div className="unlimited-access-img">
                                <img src="../assets/images/backgrounds/rupee.png" alt="Upgrade to Pro" className="img-fluid" />
                            </div>
                        </div>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll */}
            </aside>
            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                {children} {/* Outlet or children will be rendered here */}
            </div>
        </div>
    )

}

export default BasicLayout;