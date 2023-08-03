import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer py-4  ">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                © 2023, made with <i className="fa fa-heart" /> by
                                <a
                                    href="https://www.creative-tim.com/"
                                    className="font-weight-bold"
                                    rel="noreferrer"
                                >
                                    Creative Tim
                                </a>
                                for a better web.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer