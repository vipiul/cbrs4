import React from 'react';
import SidebarMenu from '../sildebarMenu/SidebarMenu';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            {/* Menu */}
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo ">
                    <Link href="/dashboard/dashboard" className="app-brand-link">
                        <img src="/assets/img/logo/logo.png" alt="dashboard Logo" />
                    </Link>
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle" />
                    </a>
                </div>
                <div className="menu-inner-shadow" />
                <SidebarMenu />
            </aside>
            {/* / Menu */}

        </>
    )
}

export default Sidebar