import { Component } from 'react';
import Topnav from '../MainContent/Topnav';

var baseurl = "http://localhost:3000/";

export default class AddProduct extends Component {
    render() {
        return (
            <div class="main-content" id="panel">
                {/* Topnav */}
                <Topnav />
                {/* Add Product */}
                <form className="form-horizontal">
                    <fieldset className="ml-4 mt-4">
                        {/* Form Name */}
                        <legend>ADD PRODUCTS</legend>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-8 control-label" htmlFor="product_id">PRODUCT ID</label>
                            <div className="col-md-8">
                                <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required type="text" />
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-8 control-label" htmlFor="product_name">PRODUCT NAME</label>
                            <div className="col-md-8">
                                <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" />
                            </div>
                        </div>
                        {/* Select Basic */}
                        <div className="form-group">
                            <label className="col-md-8 control-label" htmlFor="product_categorie">PRODUCT CATEGORY</label>
                            <div className="col-md-8">
                                <select id="product_categorie" name="product_categorie" className="form-control">
                                </select>
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-8 control-label" htmlFor="available_quantity">AVAILABLE QUANTITY</label>
                            <div className="col-md-8">
                                <input id="available_quantity" name="available_quantity" placeholder="AVAILABLE QUANTITY" className="form-control input-md" required type="number" />
                            </div>
                        </div>
                        {/* Text input*/}
                        <div className="form-group">
                            <label className="col-md-8 control-label" htmlFor="percentage_discount">PERCENTAGE DISCOUNT</label>
                            <div className="col-md-8">
                                <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control input-md" required type="text" />
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
                                        <input id="filebutton" name="filebutton" className="input-file" type="file" />
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-primary">ADD PRODUCT</button>
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