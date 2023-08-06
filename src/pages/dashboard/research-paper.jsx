import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ResearchPaperContent from './components/layout/ResearchPaperTableContent';
const ResearchPaper = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <ResearchPaperContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default ResearchPaper