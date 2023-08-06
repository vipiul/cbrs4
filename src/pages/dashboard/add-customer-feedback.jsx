import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import AddCustomerFeedbackContent from './components/layout/AddCustomerFeedbackContent';
const AddCustomerFeedback = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <AddCustomerFeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default AddCustomerFeedback