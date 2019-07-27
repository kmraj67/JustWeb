import React, { Component } from 'react';

export default class Breadcrumb extends Component {
    render() {
        if(this.props.isMain !== 'true') {
            return (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href={ this.props.mainPageUrl }>{ this.props.mainPageHead }</a>
                    </li>
                    <li className="breadcrumb-item active">{ this.props.pageHead }</li>
                </ol>
            );
        } else {
            return (
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">{ this.props.pageHead }</li>
                </ol>
            );
        }
    }
}