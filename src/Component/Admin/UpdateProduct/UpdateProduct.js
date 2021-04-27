import { Component } from 'react';
import Topnav from '../MainContent/Topnav';
import { useParams, withRouter } from 'react-router';
import axios from 'axios';
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
                {/* Add Product */}
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

        )

    }

}

export default withRouter(UpdateProduct);