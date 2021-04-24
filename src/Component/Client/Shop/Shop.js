import Product from "./Product";
import Category from "./Category";
import Header from "./Header";
import { Component } from "react";
import axios from 'axios';
import MainContent from "./MainContent";
var baseurl = "http://localhost:3000/";
class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Products: []
        };
        const axios = require('axios');
    }
    componentDidMount=()=> {
        let self = this;
        axios.get('https://localhost:44384/api/Product')
            .then(function (response) {
                // handle success
               
                self.setState({
                    Products:response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    showProducts(Products){
        var result=null;
        console.log(Products)
        if(Products.length>0){
            console.log("ok")
            result=Products.map((product,index)=> {
                return(<Product 
                    key={index}
                    ProductName={product.Name}
                    ImagePath={product.ImagePath}
                    NewPrice={product.Price}
                />);
                })
        }
        return result;
    }
    render() {
        var listProduct=this.state.Products;
        return (

            <div>
                <div>
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/grid.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/base.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/main.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/responsive.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/font/fontawesome-free-5.15.1-web/css/all.min.css"} />
                </div>
                <Header></Header>
                <MainContent></MainContent>
            </div>
        );
    }
}

export default Shop;
