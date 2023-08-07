import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ResearchPaperContent from './components/layout/ResearchPaperTableContent';
import { useRouter } from 'next/navigation';

const ResearchPaper = () => {
    const { push } = useRouter();

    useEffect(() => {
        const tokenAuth = localStorage.getItem('token');
        if (!tokenAuth) {
            push('/login')
        }
    })
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