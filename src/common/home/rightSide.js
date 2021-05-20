import React, { Component } from 'react'

export default class RightSide extends Component {
    render() {
        return (
            <div>
                
        {/* <!-- Right Sidebar --> */}
        <div className="right-bar">
            <div className="rightbar-title">
                <a href="javascript:void(0);" className="right-bar-toggle float-right">
                    <i className="mdi mdi-close"></i>
                </a>
                <h4 className="font-16 m-0 text-white">Theme Customizer</h4>
            </div>
            <div className="slimscroll-menu">

                <div className="p-3">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, layout, etc.
                    </div>
                    <div className="mb-2">
                        <img src="assets/images/layouts/light.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" defaultChecked />
                        <label className="custom-control-label" for="light-mode-switch">Light Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/dark.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css" 
                            data-appstyle="assets/css/app-dark.min.css" />
                        <label className="custom-control-label" for="dark-mode-switch">Dark Mode</label>
                    </div>
    
                    <div className="mb-2">
                        <img src="assets/images/layouts/rtl.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-3">
                        <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appstyle="assets/css/app-rtl.min.css" />
                        <label className="custom-control-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <div className="mb-2">
                        <img src="assets/images/layouts/dark-rtl.png" className="img-fluid img-thumbnail" alt=""/>
                    </div>
                    <div className="custom-control custom-switch mb-5">
                        <input type="checkbox" className="custom-control-input theme-choice" id="dark-rtl-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css" 
                            data-appstyle="assets/css/app-dark-rtl.min.css" />
                        <label className="custom-control-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
                    </div>

                    <a href="https://1.envato.market/k0YEM" className="btn btn-danger btn-block mt-3" target="_blank"><i className="mdi mdi-download mr-1"></i> Download Now</a>
                </div>
            </div> 
            {/* <!-- end slimscroll-menu--> */}
        </div>
        {/* <!-- /Right-bar --> */}

        {/* <!-- Right bar overlay--> */}
        <div className="rightbar-overlay"></div>

        <a href="javascript:void(0);" className="right-bar-toggle demos-show-btn">
            <i className="mdi mdi-cog-outline mdi-spin"></i> &nbsp;Choose Demos
        </a>

            </div>
        )
    }
}
