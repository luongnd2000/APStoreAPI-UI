import axios from 'axios';
import { Component } from 'react';
import Topnav from '../MainContent/Topnav';

var baseurl = "http://localhost:3000/";

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

    }

    componentDidMount = () => {
        let self = this;
        axios.get('https://localhost:44384/api/Product')
            .then(function (response) {
                self.setState({ products: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        let products = this.state.products;
        console.log("Product", products);
        return (
            <div className="main-content" id="panel">
                {/* Topnav */}
                <Topnav />
                {/* Header */}
                {/* Header */}
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <h6 className="h2 text-white d-inline-block mb-0">Products</h6>
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                            <li className="breadcrumb-item"><a href="#">Products</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <a href={baseurl + "Admin/AddProduct"} className="btn btn-sm btn-neutral">ADD PRODUCT</a>
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
                                    <h3 className="mb-0">Light table</h3>
                                </div>
                                {/* Light table */}
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" className="sort" data-sort="name">Product</th>
                                                <th scope="col" className="sort" data-sort="budget">Price</th>
                                                <th scope="col" className="sort" data-sort="status">Status</th>
                                                <th scope="col">Users</th>
                                                {/* <th scope="col" className="sort" data-sort="completion">Completion</th>s */}
                                                <th scope="col" />
                                            </tr>
                                        </thead>
                                        <tbody className="list">
                                            {
                                                products.map(function (product, index) {
                                                    return (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <div className="media align-items-center">
                                                                    <a href="#" className="avatar rounded-circle mr-3">
                                                                        <img alt="Image placeholder" src="../assets/img/theme/bootstrap.jpg" />
                                                                    </a>
                                                                    <div className="media-body">
                                                                        <span className="name mb-0 text-sm">{product.Name}</span>
                                                                    </div>
                                                                </div>
                                                            </th>
                                                            <td className="budget">
                                                                {product.Price}
                                                            </td>
                                                            <td>
                                                                <span className="badge badge-dot mr-4">
                                                                    <i className="bg-warning" />
                                                                    <span className="status">pending</span>
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div className="avatar-group">
                                                                    <a href="#" className="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                                                                        <img alt="Image placeholder" src="../assets/img/theme/team-1.jpg" />
                                                                    </a>
                                                                    <a href="#" className="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                                                                        <img alt="Image placeholder" src="../assets/img/theme/team-2.jpg" />
                                                                    </a>
                                                                    <a href="#" className="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
                                                                        <img alt="Image placeholder" src="../assets/img/theme/team-3.jpg" />
                                                                    </a>
                                                                    <a href="#" className="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                                                                        <img alt="Image placeholder" src="../assets/img/theme/team-4.jpg" />
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            {/* <td>
                                                            <div className="d-flex align-items-center">
                                                                <span className="completion mr-2">60%</span>
                                                                <div>
                                                                    <div className="progress">
                                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td> */}
                                                            <td className="text-right">
                                                                <div className="dropdown">
                                                                    <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-ellipsis-v" />
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                                        <a className="dropdown-item" href={baseurl + "UpdateProduct/" + product.ID}>Repair</a>
                                                                        <a className="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div className="dropdown">
                                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
                                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                </div>
                                {/* Card footer */}
                                <div className="card-footer py-4">
                                    <nav aria-label="...">
                                        <ul className="pagination justify-content-end mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}>
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">1</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
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
        );
    }
}