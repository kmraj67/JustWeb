import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

                <a className="navbar-brand mr-1" href="/">JustApp Admin</a>

                <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                    <i className="fas fa-bars"></i>
                </button>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user-circle fa-fw"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="/">Settings</a>
                            <a className="dropdown-item" href="/">Activity Log</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">Logout</a>
                        </div>
                    </li>
                </ul>

            </nav>
        );
    }
}