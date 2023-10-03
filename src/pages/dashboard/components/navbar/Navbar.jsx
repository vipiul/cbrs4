import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Navbar = () => {
    // natigate page
    const { push } = useRouter();

    const Logout = () => {
        const getToken = localStorage.getItem('token');
        if (getToken) {
            localStorage.removeItem('token');
            toast.success("Log Out Success.");
            push("/login")
        }
    }
    return (
        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" onClick={()=>alert("click")}>
                    <i className="bx bx-menu bx-sm" />
                </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* Place this tag where you want the button to render. */}
                    <li className="nav-item lh-1 me-3">
                    </li>
                    {/* User */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                                <img src="/assets/profile.png" alt='' className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                                <img src="/assets/profile.png" alt="" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <span className="fw-semibold d-block">CBRS</span>
                                            <small className="text-muted">Admin</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="dropdown-divider" />
                            </li>
                            <li>
                                <button className="dropdown-item" onClick={Logout} >
                                    <i className="bx bx-power-off me-2" />
                                    <span className="align-middle">Log Out</span>
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/*/ User */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar