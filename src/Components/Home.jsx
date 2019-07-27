import React, { Component } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="container-fluid">

                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Dashboard</a>
                                </li>
                                <li className="breadcrumb-item active">Blank Page</li>
                            </ol>

                            <h1>Blank Page</h1>
                            <hr />
                            <p>This is the home page.</p>

                        </div>
                        <Footer />
                    </div>
                </div>                
            </div>
        );
    }
}