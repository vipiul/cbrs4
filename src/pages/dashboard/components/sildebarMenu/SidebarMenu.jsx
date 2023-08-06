import Link from 'next/link'
import React from 'react'

const SidebarMenu = () => {
    return (
        <ul className="menu-inner py-1">
            {/* Dashboard */}
            <li className="menu-item active">
                <Link href="/dashboard/dashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Dashboard</div>
                </Link>
            </li>
            <li className="menu-item">
                <Link href="/dashboard/customer-feedback" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Customer Feedback</div>
                </Link>
            </li>
            <li className="menu-item">
                <Link href="/dashboard/research-paper" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Research Paper</div>
                </Link>
            </li>
        </ul>
    )
}

export default SidebarMenu