import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import EditFeedbackContent from '../components/layout/EditFeedbackContent';

const Customerfeedback = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <EditFeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default Customerfeedback