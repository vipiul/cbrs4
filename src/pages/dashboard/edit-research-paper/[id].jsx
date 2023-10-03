import React, {useEffect} from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import EditResearchPaperContent from '../components/layout/EditResearchPaperContent';
import { useRouter } from 'next/navigation';
import SEO from '@/components/seo';

const EditResearchPaper = () => {
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
            <SEO pageTitle="Edit Research Paper" />
                <Sidebar />
                <EditResearchPaperContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default EditResearchPaper