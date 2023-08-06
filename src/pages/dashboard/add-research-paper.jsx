import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ResearchContent from './components/layout/ResearchContent';
const AddResearchPaper = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <ResearchContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default AddResearchPaper;