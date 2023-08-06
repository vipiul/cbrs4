import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import CustomerFeedbackContent from './components/layout/CustomerFeedbackContent';
const Customerfeedback = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
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