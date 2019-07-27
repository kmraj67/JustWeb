import React, { Component } from 'react';

export default class Sidebar extends Component {

    render() {
        return (
            <ul className="sidebar navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span> Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="users">
                        <i className="fas fa-fw fa-users"></i>
                        <span> Users</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="blogs">
                        <i className="fas fa-fw fa-server"></i>
                        <span> Blogs</span></a>
                </li>
            </ul>
        );
    }
}