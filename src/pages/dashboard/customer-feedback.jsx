import React, { useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import CustomerFeedbackContent from './components/layout/CustomerFeedbackContent';
import { useRouter } from 'next/navigation';
import SEO from '@/components/seo';

const Customerfeedback = () => {

    const { push } = useRouter();

    useEffect(() => {
        const tokenAuth = localStorage.getItem('token');
        if (!tokenAuth) {
            push('/login')
        }
    })

    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <SEO pageTitle="Customer Feedback" />
            <div className="layout-container">
                <Sidebar />
                <CustomerFeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default Customerfeedback