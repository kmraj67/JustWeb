import React, { Component } from 'react';

export default class Footer extends Component {
    
    render() {
        return (
            <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2018</span>
                    </div>
                </div>
            </footer>
        );
    }
}