import React, { Component } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Breadcrumb from './Layout/Breadcrumb';

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            
                            <Breadcrumb pageHead='Dashboard' mainPageHead='Dashboard' mainPageUrl='/' isMain='true' />
                            
                            <h1>Dashboard</h1>
                            <hr />
                            <p>This is the dashboard page.</p>

                        </div>
                        <Footer />
                    </div>
                </div>                
            </div>
        );
    }
}