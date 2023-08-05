import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import FeedbackContent from './components/layout/feedbackContent';
const Customerfeedback = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <FeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default Customerfeedback