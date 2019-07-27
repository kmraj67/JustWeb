import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import Breadcrumb from './Layout/Breadcrumb';
import * as qs from 'query-string';

export default class Users extends Component {
    
    constructor(props) {
        super(props);
        
        const parsed = qs.parse(this.props.location.search);
        this.state = {
            users: [],
            pageCount: 0,
            url: 'http://apis.justapp.com/api/v1/users',
            offset: (typeof parsed.page !== 'undefined') ? parsed.page : 1
        }
    }
    
    componentWillMount() {
        const apiUrl = this.state.url + '?page='+this.state.offset;
        this.fetchUsers(apiUrl);
    }
    
    fetchUsers(apiUrl) {
        let $this = this;
        axios.get(apiUrl).then(response => {
            $this.setState({
                users: response.data.data,
                pageCount: response.data.last_page
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    renderUsers() {
        if(this.state.users.length < 1) {
            return (
                <tr>
                    <td colSpan="4">No User Found!</td>
                </tr>
            );
        }
        
        return this.state.users.map(user => {
            return (
    		<tr key={user.id}>
                    <td className="text-center">{ user.id }</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            );
    	})
    }
    
    handlePageClick = (data) => {
//        console.log(e);
        
        let selected = data.selected;
        //$(".pagination").click(function(){ selected = selected + 1; });
        this.setState({offset: selected}, () => {
          this.fetchUsers(this.state.url+'?page=' + selected);
          this.forceUpdate();
          this.props.history.push('/users?page=' + selected);
        });
    }
    
    userPagination() {        
        if(this.state.users.length >= 1) {
            return (
                <nav aria-label="Page navigation example">
                    <ReactPaginate previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={<a href="/">...</a>}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        initialPage={ Number(this.state.offset) }
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination justify-content-end"}
                        subContainerClassName={"pages pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"} />
                </nav>
            );
        }
    }
    
    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <Breadcrumb pageHead='Users' mainPageHead='Users' mainPageUrl='users' isMain='true' />
                            
                            <div className="row">
                                <div className="col">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0">
                                            <thead>
                                                <tr>
                                                    <th width="10%" className="text-center">#</th>
                                                    <th width="25%">First Name</th>
                                                    <th width="25%">Last Name</th>
                                                    <th width="40%">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>{ this.renderUsers() }</tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            
                            { this.userPagination() }
                        </div>
                        <Footer />
                    </div>
                </div>                
            </div>
        );
    }
}