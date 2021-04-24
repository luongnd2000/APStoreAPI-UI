import React from "react";
import axios from 'axios';
import Product from "./Product";
import Category from "./Category";

class MainContent extends React.Component {
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

            <div className="app__container">
                <div className="grid wide">
                    <div className="row-lbr sm-gutter app__content">
                        <div className="col-lbr l-2 m-0 c-0-lbr">
                            <nav className="category">
                                <h3 className="category__heading">
                                    <i className="category__heading-icon fas fa-list-ul" />
          Danh mục
        </h3>
                                <ul className="category-list">
                                    <Category
                                        Name="Hạt"
                                    ></Category>
                                    <Category
                                        Name="Hạt"
                                    ></Category>
                                    <Category
                                        Name="Hạt"
                                    ></Category>
                                    <Category
                                        Name="Hạt"
                                    ></Category>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lbr l-10 m-12 c-12">
                            <div className="home-filter hide-on-mobile-tablet">
                                <span className="home-filter__label">Sắp xếp theo</span>
                                <button className="home-filter__btn btn">Phổ biến</button>
                                <button className="home-filter__btn btn btn--primary">Phổ mới nhất</button>
                                <button className="home-filter__btn btn">Phổ bán chạy</button>
                                <div className="select-input">
                                    <span className="select-input__label">Giá</span>
                                    <i className="fas fa-angle-down select-input__icon" />
                                    {/* list option */}
                                    <ul className="select-input__list">
                                        <li className="select-input__item">
                                            <a href="/#" className="select-input__link">Giá: Thấp đến cao</a>
                                        </li>
                                        <li className="select-input__item">
                                            <a href="/#" className="select-input__link">Giá: Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="home-filter__page">
                                    <span className="home-filter__page-num">
                                        <span className="home-filter__page-current">1</span>/14
          </span>
                                    <div className="home-filter__page-control">
                                        <a href="/#" className="home-filter__page-btn  home-filter__page-btn--disable">
                                            <i className="fas fa-angle-left home-filter__page-icon" />
                                        </a>
                                        <a href="/#" className="home-filter__page-btn">
                                            <i className="fas fa-angle-right home-filter__page-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="home-produce">
                                <nav className="mobile__category">
                                    <ul className="mobile__category-list">
                                        <Category Name="Hạt"></Category>
                                        <Category Name="Hạt"></Category>
                                        <Category Name="Hạt"></Category>
                                        <Category Name="Hạt"></Category>
                                    </ul>
                                </nav>
                                {/* List products */}
                                <div className="row-lbr sm-gutter list-product">
                                    {this.showProducts(listProduct)}

                                </div>
                            </div>
                            <ul className="pagination produce-pagination">
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">
                                        <i className="pagination-item__icon fas fa-angle-left" />
                                    </a>
                                </li>
                                <li className="pagination-item pagination-item-active">
                                    <a href="/#" className="pagination-item__link">1</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">2</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">3</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">4</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">...</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">14</a>
                                </li>
                                <li className="pagination-item">
                                    <a href="/#" className="pagination-item__link">
                                        <i className="pagination-item__icon fas fa-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainContent;