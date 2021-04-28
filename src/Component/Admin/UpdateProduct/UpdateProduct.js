import { Component } from 'react';
import Topnav from '../MainContent/Topnav';
import { useParams, withRouter } from 'react-router';
import axios from 'axios';

const baseurl = 'http://localhost:3000/'
class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: { ID: 1, Name: "1", CategoryID: 1, Price: 1, ImagePath: "" },
            category: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNameProduct = this.handleChangeNameProduct.bind(this);
        this.handleChangeIdCategoryProduct = this.handleChangeIdCategoryProduct.bind(this);
        this.handleChangePriceProduct = this.handleChangePriceProduct.bind(this);
        this.handleChangeImagePathProduct = this.handleChangeImagePathProduct.bind(this);
    }

    componentDidMount = () => {
        let self = this;
        let productId = this.props.match.params.productId;
        console.log(productId);
        axios.get(`https://localhost:44384/api/Product?id=${productId}`)
            .then(function (res) {
                console.log(res.data.data[0]);
                self.setState({ product: res.data.data[0] });
                console.log("Product: ", self.state.product);
            })
        axios.get(`https://localhost:44384/api/ProductCategory`)
            .then(function (res) {
                console.log(res.data.data);
                self.setState({ category: res.data.data });
                console.log("Category: ", self.state.category);
            })
    }

    handleSubmit(event) {
        console.log("Submitted: ", this.props.product);
        event.preventDefault();
    }

    handleChangeNameProduct(event) {
        let newName = event.target.value;
        this.setState({ product: { ...this.state.product, Name: newName } });
        console.log("Product after change: ", this.state.product);
    }

    handleChangeIdCategoryProduct(event) {
        let newCategoryID = Number.parseInt(event.target.value);
        this.setState({ product: { ...this.state.product, CategoryID: newCategoryID } });
        console.log("Product after change: ", this.state.product);
    }

    handleChangePriceProduct(event) {
        let newPrice = Number.parseInt(event.target.value);
        if (newPrice !== NaN) {
            this.setState({ product: { ...this.state.product, Price: newPrice } });
            console.log("Product after change: ", this.state.product);
        }
    }

    handleChangeImagePathProduct(event) {
        console.log(event.target.value);
    }

    render() {
        let category = this.state.category;
        let product = this.state.product;
        return (
            <div className="main-content" id="panel" onSubmit={this.handleSubmit}>
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
                                            <li className="breadcrumb-item active" aria-current="page">Update Product</li>
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
                {/* Update Product */}
                <div class="container-fluid mt--6">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-header border-0">
                                    <h3 class="mb-0">ADD PRODUCT</h3>
                                </div>
                                <div class="card-footer py-4">
                                    <form className="form-horizontal">
                                        <fieldset className="ml-4 mt-4">
                                            {/* Form Name */}
                                            <legend>UPDATE PRODUCTS</legend>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="product_name">PRODUCT NAME</label>
                                                <div className="col-md-8">
                                                    <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" value={product.Name} onChange={this.handleChangeNameProduct} />
                                                </div>
                                            </div>
                                            {/* Select Basic */}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="product_categorie">PRODUCT CATEGORY</label>
                                                <div className="col-md-8">
                                                    <select id="product_categorie" name="product_categorie" className="form-control" value={product.CategoryID} onChange={this.handleChangeIdCategoryProduct} required>
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
                                                    <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control input-md" type="number" value={product.Price} onChange={this.handleChangePriceProduct} required />
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
                                                            <input id="filebutton" name="filebutton" className="input-file" type="file" accept="image/*" defaultValue={product.ImagePath} onChange={this.changeImagePathProduct} />
                                                        </div>
                                                    </div>
                                                    {/* Button */}
                                                    <div className="form-group">
                                                        <div className="col-md-8">
                                                            <button type="submit" value="Submit" id="singlebutton" name="submit" className="btn btn-primary">UPDATE PRODUCT</button>
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

export default withRouter(UpdateProduct);