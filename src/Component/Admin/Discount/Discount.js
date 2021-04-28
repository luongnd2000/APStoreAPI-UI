import axios from 'axios';
import { Component } from 'react';
import Topnav from '../MainContent/Topnav';

var baseurl = "http://localhost:3000/";

export default class Discount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: []
        };
        this.handleDeleteDiscount = this.handleDeleteDiscount.bind(this);
    }

    componentDidMount = () => {
        let self = this;
        axios.get('https://localhost:44384/api/Discount')
            .then(function (response) {
                self.setState({ discount: response.data.data });
                console.log("Success");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleDeleteDiscount(e) {
        let self = this;
        let IdDiscountDelete = Number.parseInt(e.target.getAttribute("data-id"));
        axios.delete(`https://localhost:44384/api/Discount?id=${IdDiscountDelete}`)
            .then(function (res) {
                if (res) {
                    let discount = self.state.discount.filter(function (item, index) {
                        return item.ID !== IdDiscountDelete;
                    });
                    console.log(discount);
                    self.setState({ discount: discount });
                }
            })
    }

    render() {
        let discount = this.state.discount;
        console.log("Discount render", discount);
        const self = this;
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
                                    <h6 className="h2 text-white d-inline-block mb-0">Discounts</h6>
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                            <li className="breadcrumb-item"><a href="#">Discounts</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Discounts</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <a href={baseurl + "Admin/AddDiscount"} className="btn btn-sm btn-neutral">ADD Discount</a>
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
                                    <h3 className="mb-0">Discount</h3>
                                </div>
                                {/* Light table */}
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col" className="sort" data-sort="status">Name display</th>
                                                <th scope="col" className="sort" data-sort="status">Code</th>
                                                <th scope="col" className="sort" data-sort="status">value</th>
                                                <th scope="col" className="sort" data-sort="status">Start date</th>
                                                <th scope="col" className="sort" data-sort="status">End date</th>
                                                {/* <th scope="col" className="sort" data-sort="completion">Completion</th>s */}
                                                <th scope="col" />
                                            </tr>
                                        </thead>
                                        <tbody className="list">
                                            {/* List Discount */}
                                            {
                                                discount.length > 0 && discount.map(function (dis, index) {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="budget">
                                                                {dis.NameDisplay}
                                                            </td>
                                                            <td className="budget">
                                                                {dis.Code}
                                                            </td>
                                                            <td className="budget">
                                                                {dis.Value}
                                                            </td>
                                                            <td className="budget">
                                                                {dis.StartDate}
                                                            </td>
                                                            <td className="budget">
                                                                {dis.EndDate}
                                                            </td>
                                                            <td className="text-right">
                                                                <a type="button" className="btn btn-primary" href={baseurl + "Admin/UpdateDiscount/" + dis.ID} >UPDATE</a>
                                                                <a type="button" className="btn btn-danger" href="#" data-id={dis.ID} onClick={self.handleDeleteDiscount}>DELETE</a>
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
                </div >
            </div>
        );
    }
}