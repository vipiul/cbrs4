import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import EditResearchPaperContent from '../components/layout/EditResearchPaperContent';

const EditResearchPaper = () => {
    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <EditResearchPaperContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default EditResearchPaper