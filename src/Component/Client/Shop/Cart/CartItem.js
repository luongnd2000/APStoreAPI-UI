import axios from 'axios';
import React from 'react';
import Cookies from 'universal-cookie';
import AdressProvider, { AdressContext } from "../Adress/AdressProvider";

class CartItem extends React.Component {
    OnDelete() {
        var result = window.confirm("Xóa sản phẩm " + this.props.Name + " khỏi giỏ hàng ?");
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        if (result) {
            axios.delete('https://localhost:44384/api/cart?userName=' + userlogin.Name + '&productID=' + this.props.ProductID, {
            }).then((response) => {
                console.log(response);
                this.props.OnDelete();
            });
        }
    }
    render() {
        return (

            <li className="header__cart-item">
                <img src={this.props.ImagePath} alt="" className="header__cart-img"></img>
                <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">{this.props.Name}</h5>
                        <div className="header__cart-item-price-wrap">
                            <span className="header__cart-item-price">{this.props.Price} đ</span>
                            <span className="header__cart-item-multiply">x</span>
                            <span className="header__cart-item-qnt">{this.props.Quantities}</span>
                        </div>
                    </div>

                    <div className="header__cart-item-body">
                        <span className="header__cart-item-description">
                            Phân loại: {this.props.Category}
                        </span>
                        <AdressContext.Consumer>

                            {({ DeleteFromCart }) =>
                                <span className="header__cart-item-remove" onClick={() => DeleteFromCart(this.props.ProductID, this.props.Name)}>Xóa</span>
                            }
                        </AdressContext.Consumer>
                    </div>
                </div>
            </li>
        )
    }

}

export default CartItem;