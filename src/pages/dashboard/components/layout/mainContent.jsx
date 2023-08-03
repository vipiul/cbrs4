import React from 'react'

const MainContent = () => {
  return (
    <>
        <div className="layout-page">
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
            <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i className="bx bx-menu bx-sm" />
            </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            {/* Search */}
            <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                <i className="bx bx-search fs-4 lh-0" />
                <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
                </div>
            </div>
            {/* /Search */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* Place this tag where you want the button to render. */}
                <li className="nav-item lh-1 me-3">
                </li>
                {/* User */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                    <img src="/assets/dashboard/assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                    </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                    <a className="dropdown-item" href="#">
                        <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                            <img src="/assets/dashboard/assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <span className="fw-semibold d-block">John Doe</span>
                            <small className="text-muted">Admin</small>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li>
                    <div className="dropdown-divider" />
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        <i className="bx bx-user me-2" />
                        <span className="align-middle">My Profile</span>
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        <i className="bx bx-cog me-2" />
                        <span className="align-middle">Settings</span>
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 bx bx-credit-card me-2" />
                        <span className="flex-grow-1 align-middle">Billing</span>
                        <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                    </a>
                    </li>
                    <li>
                    <div className="dropdown-divider" />
                    </li>
                    <li>
                    <a className="dropdown-item" href="/">
                        <i className="bx bx-power-off me-2" />
                        <span className="align-middle">Log Out</span>
                    </a>
                    </li>
                </ul>
                </li>
                {/*/ User */}
            </ul>
            </div>
        </nav>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
                <div className="col-lg-8 mb-4 order-0">
                <div className="card">
                    <div className="d-flex align-items-end row">
                    <div className="col-sm-7">
                        <div className="card-body">
                        <h5 className="card-title text-primary">Congratulations John! 🎉</h5>
                        <p className="mb-4">You have done <span className="fw-bold">72%</span> more sales today. Check your new
                            badge in your profile.</p>
                        <a href="javascript:;" className="btn btn-sm btn-outline-primary">View Badges</a>
                        </div>
                    </div>
                    <div className="col-sm-5 text-center text-sm-left">
                        <div className="card-body pb-0 px-0 px-md-4">
                        <img src="/assets/dashboard/assets/img/illustrations/man-with-laptop-light.png" height={140} alt="View Badge User" data-app-dark-img="illustrations/man-with-laptop-dark.png" data-app-light-img="illustrations/man-with-laptop-light.html" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-4 order-1">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                            <img src="/assets/dashboard/assets/img/icons/unicons/chart-success.png" alt="chart success" className="rounded" />
                            </div>
                            <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                            </div>
                        </div>
                        <span className="fw-semibold d-block mb-1">Profit</span>
                        <h3 className="card-title mb-2">$12,628</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +72.80%</small>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                            <div className="avatar flex-shrink-0">
                            <img src="/assets/dashboard/assets/img/icons/unicons/wallet-info.png" alt="Credit Card" className="rounded" />
                            </div>
                            <div className="dropdown">
                            <button className="btn p-0" type="button" id="cardOpt6" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                <a className="dropdown-item" href="javascript:void(0);">View More</a>
                                <a className="dropdown-item" href="javascript:void(0);">Delete</a>
                            </div>
                            </div>
                        </div>
                        <span>Sales</span>
                        <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                        <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt" /> +28.42%</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* / Content */}
            {/* Footer */}
            <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <p>This is footer</p>
                <div>
                <a href="#" className="footer-link me-4" target="_blank">License</a>
                <a href="#" target="_blank" className="footer-link me-4">More Themes</a>
                <a href="#" target="_blank" className="footer-link me-4">Documentation</a>
                <a href="#" target="_blank" className="footer-link me-4">Support</a>
                </div>
            </div>
            </footer>
            {/* / Footer */}
        </div>
        </div>
    </>
  )
}

export default MainContent