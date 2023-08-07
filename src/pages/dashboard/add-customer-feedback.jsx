import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import AddCustomerFeedbackContent from './components/layout/AddCustomerFeedbackContent';
import { useRouter } from 'next/navigation';

const AddCustomerFeedback = () => {

const { push } = useRouter();

useEffect(()=>{
    const tokenAuth = localStorage.getItem('token');
    if(!tokenAuth){
        push('/login')
    }
})

    return (
        <div className="layout-wrapper layout-content-navbar  ">
            <div className="layout-container">
                <Sidebar />
                <AddCustomerFeedbackContent />
            </div>
            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle" />
        </div>
    )
}

export default AddCustomerFeedback