import React, { useState, useEffect } from 'react';
import Topnav from '../MainContent/Topnav';
import { useParams } from 'react-router';
import axios from 'axios';
export default function UpdateProduct(props) {
    console.log(props);
    let { productId } = useParams();
    console.log(productId);
    console.log("UseParams", useParams());

    const [product, setProduct] = useState(0);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:44384/api/Product?id=${productId}`)
            .then(function (res) {
                console.log(res.data.data[0]);
                setProduct(res.data.data[0]);
                console.log("Product: ", product);
            })
        axios.get(`https://localhost:44384/api/ProductCategory`)
            .then(function (res) {
                console.log(res.data.data);
                setCategory([1, 2, 3]);
                console.log("Category: ", category);
            })
    }, []);

    return (
        <div class="main-content" id="panel">
            {/* Topnav */}
            <Topnav />
            {/* Add Product */}
            <form className="form-horizontal">
                <fieldset className="ml-4 mt-4">
                    {/* Form Name */}
                    <legend>UPDATE PRODUCTS</legend>
                    {/* Text input*/}
                    {/* <div className="form-group">
                        <label className="col-md-8 control-label" htmlFor="product_name">PRODUCT NAME</label>
                        <div className="col-md-8">
                            <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required type="text" value={} />
                        </div>
                    </div> */}
                    {/* Select Basic */}
                    <div className="form-group">
                        <label className="col-md-8 control-label" htmlFor="product_categorie">PRODUCT CATEGORY</label>
                        <div className="col-md-8">
                            <select id="product_categorie" name="product_categorie" className="form-control">
                                {/* {
                                    category.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.ID} >{cat.Name}</option>
                                        )
                                    })
                                } */}
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
                                    <button id="singlebutton" name="singlebutton" className="btn btn-primary">UPDATE PRODUCT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>

    )

}