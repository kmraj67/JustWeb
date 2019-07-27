import React, { Component } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Breadcrumb from './Layout/Breadcrumb';

export default class Blogs extends Component {

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="container-fluid">

                            <Breadcrumb pageHead='Blogs' mainPageHead='Blogs' mainPageUrl='blogs' isMain='true' />

                            <h1>Blog List</h1>
                            <hr />
                            <p>This is the blog page.</p>

                        </div>
                        <Footer />
                    </div>
                </div>                
            </div>
        );
    }
}