import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";

const SidebarMenu = () => {

    const router = useRouter();

    const sidebarmenu = [
        {
            id: 0,
            title: "Dashboard",
            link: "/dashboard/dashboard",
            icon: "tf-icons"
        },
        {
            id: 1,
            title: "Customer Feedback",
            link: "/dashboard/customer-feedback",
            icon: "tf-icons",
        },
        {
            id: 2,
            title: "Research Paper",
            link: "/dashboard/research-paper",
            icon: "tf-icons",
        }
    ]

    // console.log(sidebarmenu)

    return (
        <ul className="menu-inner py-1">
            {/* Dashboard */}
            {
                sidebarmenu.map((items, index) => (
                    <li className={`menu-item ${router.pathname == items.link ? "active" : ""}`} key={index}>
                        <Link href={items.link} className="menu-link">
                            <i className={`menu-icon ${items.icon} bx bx-home-circle`} />
                            <div data-i18n="Analytics">{items.title}</div>
                        </Link>
                    </li>
                ))
            }

            {/* <li className="menu-item">
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
            </li> */}
        </ul>
    )
}

export default SidebarMenu