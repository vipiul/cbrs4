import React from 'react'

const Header = () => {
    return (
        <div>
            <nav
                className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                id="navbarBlur"
                data-scroll="true"
            >
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"></ol>
                        <h6 className="font-weight-bolder mb-0">Dashboard</h6>
                    </nav>
                </div>
            </nav>
        </div>

    )
}

export default Header