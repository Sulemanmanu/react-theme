import React, { Component } from 'react'
import Sidebar from '../../../common/home/sidebar'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'


export default class Start extends Component {
    render() {
        return (
            <div className="authentication-bg">
                <div id="wrapper">
                    <Topbar/>
                    <Sidebar/>
                            <div className="content-page">
                <div className="content">

                   
                    <div className="container-fluid">

                        
                        
                    </div> 

                </div> 
            </div>
            <Footer/>
            </div>
            <RightSide/>
            </div>
        )
    }
}
