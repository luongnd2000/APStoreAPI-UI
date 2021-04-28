import axios from 'axios';
import { Component } from 'react';
import Topnav from '../MainContent/Topnav';

var baseurl = "http://localhost:3000/";

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            category: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterNameProduct = this.handleEnterNameProduct.bind(this);
        this.handleChooseCategoryIdProduct = this.handleChooseCategoryIdProduct.bind(this);
        this.handleEnterPriceProduct = this.handleEnterPriceProduct.bind(this);
        this.handleChooseImageProduct = this.handleChooseImageProduct.bind(this)
    }

    componentDidMount() {
        const self = this;
        axios.get("https://localhost:44384/api/ProductCategory")
            .then(function (res) {
                self.setState({ category: res.data.data });
                console.log(self.state.category);
            })
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleEnterNameProduct(e) {
        let Name = e.target.value;
        console.log(Name);
        this.setState({ product: { ...this.state.product, Name: Name } });
    }

    handleChooseCategoryIdProduct(e) {
        let CategoryId = e.target.value;
        console.log(CategoryId);
        this.setState({ product: { ...this.state.product, CategoryID: CategoryId } });
    }

    handleEnterPriceProduct(e) {
        let Price = e.target.value;
        console.log(Price);
        this.setState({ product: { ...this.state.product, Price: Price } });
    }

    handleChooseImageProduct(e) {

    }

    render() {
        let category = this.state.category;
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
                                    <h6 className="h2 text-white d-inline-block mb-0">Products</h6>
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                            <li className="breadcrumb-item"><a href="#">Products</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Add Product</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <a href={baseurl + "Admin/Products"} className="btn btn-sm btn-neutral">List Product</a>
                                    <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Product */}
                <div class="container-fluid mt--6">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header border-0">
                                    <h3 class="mb-0">ADD PRODUCT</h3>
                                </div>
                                <div class="card-footer py-4">
                                    <form className="form-horizontal mr-4 ml-4" onSubmit={this.handleSubmit}>
                                        <fieldset className="ml-4 mt-4">
                                            {/* Form Name */}
                                            <legend>ADD PRODUCTS</legend>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="product_name">PRODUCT NAME</label>
                                                <div className="col-md-8">
                                                    <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" onChange={this.handleEnterNameProduct} />
                                                </div>
                                            </div>
                                            {/* Select Basic */}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="product_categorie">PRODUCT CATEGORY</label>
                                                <div className="col-md-8">
                                                    <select id="product_categorie" name="product_categorie" className="form-control" defaultValue={1} onChange={this.handleChooseCategoryIdProduct}>
                                                        {
                                                            category.map(function (cat, index) {
                                                                return (
                                                                    <option key={index} value={cat.ID}>{cat.Name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="percentage_discount">PERCENTAGE DISCOUNT</label>
                                                <div className="col-md-8">
                                                    <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control input-md" required type="number" onChange={this.handleEnterPriceProduct} />
                                                </div>
                                            </div>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="approuved_by">IMAGE PRODUCT</label>
                                                <div className="col-md-8">
                                                    {/* File Button */}
                                                    <div className="form-group">
                                                        <label className="col-md-8 control-label" htmlFor="filebutton">image</label>
                                                        <div className="col-md-8">
                                                            <input id="filebutton" name="filebutton" className="input-file" type="file" accept="image/*" onChange={this.handleChooseImageProduct} />
                                                        </div>
                                                    </div>
                                                    {/* Button */}
                                                    <div className="form-group">
                                                        <div className="col-md-8">
                                                            <button type="Submit" value="Submit" id="singlebutton" name="singlebutton" className="btn btn-primary">ADD PRODUCT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}