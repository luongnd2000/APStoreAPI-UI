import { Component } from "react";
import CartItem from './CartItem';
import { createStore } from 'redux';
import AdressProvider, { AdressContext } from "../Adress/AdressProvider";
var initialState = {
    status: false
}
var myReducer = (state = initialState, action) => {
    return state;
}
const store = createStore(myReducer);
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cart: [],
            NumberOfProduct: 0
        };
        const axios = require('axios');
    }
    SubtractCart = () => {
        this.setState({ NumberOfProduct: this.state.NumberOfProduct - 1 });


    }
    showCarts(Carts) {
        var result = null;
        console.log("carts : " + Carts)
        if (Carts.length > 0) {
            console.log("ok")
            result = Carts.map((cart, index) => {
                return (<CartItem
                    key={index}
                    ProductID={cart.ProductID}
                    Name={cart.NameDisplay}
                    Price={cart.Price}
                    Category={cart.Category}
                    Quantities={cart.Quantities}
                    ImagePath={cart.ImagePath}
                ></CartItem>);
            })
        }
        return result;
    }
    render() {

        var carts = this.state.Cart;

        return (
            <AdressContext.Consumer>
                {({ listCartItem }) => (
                    <div className="header__cart">
                        <div className="header__cart-wrap">
                            <a href="/Shop/CartDetail"><i className="fas fa-shopping-cart header__cart-icon"></i>
                                <span className="header__cart-notify">{listCartItem.length}</span>
                            </a>
                            <div className="header__cart-list">
                                <img src="./assets/img/no-cart.png" alt="No cart" className="header__cart--no-cart-img"></img>
                                <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm</span>
                                <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                                <ul className="header__cart-list-item">
                                    {this.showCarts(listCartItem)}
                                </ul>
                                <a href="/Shop/CartDetail" className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>
                            </div>


                        </div>
                    </div>
                )}
            </AdressContext.Consumer>
        )
    }
}
export default Cart;