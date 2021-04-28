import axios from 'axios';
import { Component } from 'react';
import Topnav from '../MainContent/Topnav';

var baseurl = "http://localhost:3000/";

export default class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NameCat: ''
        }
        this.handleEnterNameCategory = this.handleEnterNameCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEnterNameCategory(e) {
        let NameCat = e.target.value;
        this.setState({ NameCat: NameCat });
    }

    handleSubmit(e) {
        let self = this;
        axios({ method: 'post', url: 'https://localhost:44384/api/ProductCategory', data: { Name: this.state.NameCat } })
            .then(function (res) {
                if (res) {
                    alert("Thêm thành công category");
                    self.setState({ NameCat: '' });
                }
            })
    }

    render() {
        console.log(this.state.NameCat);
        return (
            <div className="main-content" id="panel">
                {/* Topnav */}
                <Topnav />
                {/* Header */}
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <h6 className="h2 text-white d-inline-block mb-0">Category</h6>
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                            <li className="breadcrumb-item"><a href="#">Category</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Add Category</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <a href={baseurl + "Admin/Category"} className="btn btn-sm btn-neutral">List Category</a>
                                    <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page content */}
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                {/* Card header */}
                                <div className="card-header border-0">
                                    <h3 className="mb-0">Add Category</h3>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer py-4">
                                    <form className="form-horizontal mr-4 ml-4" onSubmit={this.handleSubmit}>
                                        <fieldset className="ml-4 mt-4">
                                            {/* Form Name */}
                                            <legend>ADD Category</legend>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="product_name">PRODUCT NAME</label>
                                                <div className="col-md-8">
                                                    <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" onChange={this.handleEnterNameCategory} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-8">
                                                    <button type="Submit" value="Submit" id="singlebutton" name="singlebutton" className="btn btn-primary">ADD CATEGORY</button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="footer pt-0">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6">
                                <div className="copyright text-center  text-lg-left  text-muted">
                                    © 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        )
    }
}