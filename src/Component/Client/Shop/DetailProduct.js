import axios from "axios";
import React, { Component } from "react";
import { useParams, withRouter } from "react-router";
import NumberFormat from "react-number-format"
import AdressProvider, { AdressContext } from "./Adress/AdressProvider";
import ProductProvider from "./Context/ProductProvider";
var baseurl = "http://localhost:3000/";

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.ID,
            Products: {},
            Quantities: 1
        };
        const axios = require('axios');
    }
    handleChangeQuantities = (e) => {
        this.setState({ Quantities: parseInt(e.target.value) })
    }
    componentDidMount = () => {
        let self = this;
        axios.get('https://localhost:44384/api/Product?ID=' + this.props.match.params.ID)
            .then(function (response) {
                // handle success
                self.setState({
                    Products: response.data.data[0]
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    render() {

        var listProduct = this.state.Products;
        console.log(listProduct);
        return (

                <div className="app">
                    <div className="container">
                        <div className="row product">
                            <div className="col col-lg-5 col-md-5 col-sm-12">
                                <div className="depicted-product">
                                    <div className="row">
                                        <div className="col col-12">
                                            <img src={listProduct.ImagePath} alt="product" className="depicted-product__img" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-12 depicted-product__img-list">
                                            <img src={listProduct.ImagePath} alt="product" className="depicted-product__img-item" />
                                            <img src={listProduct.ImagePath} alt="product" className="depicted-product__img-item" />
                                            <img src={listProduct.ImagePath} alt="product" className="depicted-product__img-item" />
                                            <img src={listProduct.ImagePath} alt="product" className="depicted-product__img-item" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-12 depicted-product__social">
                                            <div className="depicted-product__social-share">
                                                <span>Chia s???:</span>
                                                <a href="#">
                                                    <i className="fab fa-facebook-messenger social-share--messenger" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-facebook social-share--facebook" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-google-plus social-share--google-plus" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-pinterest social-share--pinterest" />
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-twitter-square social-share--twitter" />
                                                </a>
                                            </div>
                                            <div className="depicted-product__social-like">
                                                <i className="far fa-heart social-like--heart" />
                                                <span className="depicted-product__social-like__number">???? th??ch (6,7k)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-7 col-md-7 col-sm-12">
                                <div className="sale-product">
                                    <div className="product__name"> {listProduct.Name}</div>
                                    <div className="product-reviews">
                                        <div className="product-reviews__star">
                                            <span className="product-reviews__star-number">4.9</span>
                                            <div>
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="product-reviews__detail">
                                            <span className="product-reviews__detail-number">3,4K</span>
                                            <span className="product-reviews__detail-title">????nh gi??</span>
                                        </div>
                                        <div className="product-reviews__sold">
                                            <span className="product-reviews__sold-number">3,6K</span>
                                            <span className="product-reviews__sold-title">???? b??n</span>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <div className="product-price__detail">
                                            <div className="product-price__detail-old"><span>???</span><NumberFormat value={listProduct.Price} displayType={'text'} thousandSeparator={true} /></div>
                                            <div className="product-price__detail-new"><span>???</span><NumberFormat value={listProduct.Price} displayType={'text'} thousandSeparator={true} /></div>
                                            <div className="product-price__detail-percent">39% GI???M</div>
                                        </div>
                                        <div className="product-price__title">
                                            <img src={baseurl + "f8-shop/assets/img/saleOff.png"} alt="sale off" className="product-price__title-img" />
                                            <div className="product-price__title-desc">??? ????u r??? h??n, Shopee ho??n ti???n</div>
                                        </div>
                                    </div>
                                    <div className="row product-option">
                                        <div className="col col-12">
                                            <div className="product-option__select">
                                                <div className="product-option__select-title">Deal s???c</div>
                                                <div className="product-option__select-desc">Mua k??m Deal s???c</div>
                                            </div>
                                            <div className="product-option__select">
                                                <div className="product-option__select-title">V???n chuy???n</div>
                                                <div className="product-option__select-desc">
                                                    <div className="product-option__select-free-ship">
                                                        <div className="product-option__select-free-ship-title">
                                                            <img src={baseurl + "f8-shop/assets/img/FreeShip.png"} alt="free ship" className="product-option__select-free-ship-img" />
                                                            <div className="product-option__select-free-ship-text">
                                                                Mi???n Ph?? V???n Chuy???n
                          </div>
                                                        </div>
                                                        <div className="product-option__select-free-ship-decs">
                                                            Mi???n Ph?? V???n Chuy???n khi ????n ?????t gi?? tr??? t???i thi???u
                        </div>
                                                    </div>
                                                    <div className="product-option__select-ship-to">
                                                        <div className="product-option__select-ship-to-title">
                                                            <i className="fas fa-box product-option__select-ship-to-icon" />
                                                            <div className="product-option__select-ship-to-text">
                                                                V???n chuy???n t???i <span> Huy???n Ba V??, H?? N???i</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-option__select-ship-to-decs">
                                                            Ph?? v???n chuy???n ???43.737 - ???55.370
                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-option__select">
                                                <div className="product-option__select-title product-option__select-color-title">M??u s???c
                    </div>
                                                <div className="product-option__select-desc">
                                                    <button type="button" className="btn product-option__select-btn-color">Tr???ng</button>
                                                    <button type="button" className="btn product-option__select-btn-color">??en</button>
                                                    <button type="button" className="btn product-option__select-btn-color">Xanh</button>
                                                    <button type="button" className="btn product-option__select-btn-color">H???ng</button>
                                                </div>
                                            </div>
                                            <div className="product-option__select">
                                                <div className="product-option__select-title product-option__select-quantity-product-title">
                                                    S??? l?????ng</div>
                                                <div className="product-option__select-desc product-option__select-quantity-product">
                                                    <div className="quantity-product">
                                                        <button className="btn-sub-quantity">-</button>
                                                        <input type="number" className="input-quantity" defaultValue={1} onChange={this.handleChangeQuantities} />
                                                        <button className="btn-add-quantity">+</button>
                                                    </div>
                                                    <div>462 s???n ph???m c?? s???n</div>
                                                </div>
                                            </div>
                                            <div className="product-option__select">
                                                <AdressContext.Consumer>
                                                    {({ AddToCart }) =>
                                                        <button type="button" className="product-option-btn btn-add-to-cart" onClick={() => AddToCart(this.state)}>Th??m v??o gi???
                      h??ng</button>}

                                                </AdressContext.Consumer>
                                                <button type="button" className="product-option-btn btn-buy-now">Mua ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="guarantee-product" href="#">
                                    <div>
                                        <img src={baseurl + "f8-shop/assets/img/GuaranteeProduct.png"} alt="guarantee product" className="guarantee-product-img" />
                                        <span className="guarantee-product-title">Shopee ?????m B???o</span>
                                    </div>
                                    <span className="guarantee-product-desc">3 Ng??y Tr??? H??ng / Ho??n Ti???n</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default withRouter(DetailProduct);
