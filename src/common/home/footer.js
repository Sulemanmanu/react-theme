import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 {/* <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                               2016 - 2020 &copy; Adminto theme by <a href="">Coderthemes</a> 
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    <a href="javascript:void(0);">About Us</a>
                                    <a href="javascript:void(0);">Help</a>
                                    <a href="javascript:void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}
            </div>
        )
    }
}
