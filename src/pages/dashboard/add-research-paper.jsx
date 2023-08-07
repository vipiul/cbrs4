import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import ResearchContent from './components/layout/ResearchContent';
import { useRouter } from 'next/navigation';

const AddResearchPaper = () => {

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
                <ResearchContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default AddResearchPaper;