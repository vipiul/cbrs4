import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import AddfeedbackContent from './components/layout/AddfeedbackContent';
const Customerfeedback = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <AddfeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default Customerfeedback