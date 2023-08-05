import React, { useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/layout/mainContent';
import { useRouter } from 'next/navigation';

// style file

const DashboardContent = () => {
    const { push } = useRouter();

    useEffect(()=>{
        const tokenAuth = localStorage.getItem('token');
        if(!tokenAuth){
            push('/login')
        }
    })
    return (
        <div className="layout-wrapper layout-content-navbar " style={{backgroundColor: '#efefef'}}>
            <div className="layout-container">
                <Sidebar />
                <MainContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>

    )
}

export default DashboardContent