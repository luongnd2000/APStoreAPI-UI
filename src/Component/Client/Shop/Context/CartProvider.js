import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";

export const CartContext = React.createContext()
class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
        this.AddToCart = this.AddToCart.bind(this);
        this.DeleteFromCart = this.DeleteFromCart.bind(this);
    }
    componentDidMount = () => {
        let self = this;
        axios.get('https://localhost:44384/api/cart?UserName=Luong')
            .then(function (response) {
                // handle success
                self.setState({
                    cartItems: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    AddToCart(product) {
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        if (!userlogin.Name) {
            this.props.history.push('/Login')
            return;
        }
        var result = window.confirm("Thêm " + product.Quantities + " sản phẩm " + product.Products.Name + " vào giỏ hàng");
        if (!result) return;
        console.log('add to cart', product);
        var quantities = product.Quantities ? product.Quantities : 1;
        var cart = {
            ProductID: product.Products.ID,
            NameDisplay: product.Products.Name,
            Price: product.Products.Price,
            Category: product.Products.CategoryID,
            Quantities: quantities,
            ImagePath: product.Products.ImagePath
        }
        var q = cart.Quantities;
        var prID = cart.ProductID;
        var name = userlogin.Name;
        var self = this;
        axios({
            method: 'Post',
            url: 'https://localhost:44384/api/cart',
            headers: {},
            data: {
                UserName: name, // This is the body part
                ProductID: prID, // This is the body part
                Quantities: q// This is the body part
            }
        }).then(function (response) {
            console.log(response.data);
            if (response.data.status = 1) {
                console.log("duyet mang")
                var check = false
                self.state.cartItems.forEach(element => {
                    if (element.ProductID == prID) {
                        element.Quantities = element.Quantities + q;
                        check = true;
                    }
                });
                console.log(self.state.cartItems)
                if (!check) {

                    self.setState({
                        cartItems: self.state.cartItems.concat(cart)
                    });
                }
                else {
                    self.setState({
                        cartItems: self.state.cartItems
                    });
                }
            }
            else {
                alert("Có lỗi từ server không thêm thêm vào giỏ hàng.");
            }
        });
    }
    DeleteFromCart(ProductID, ProductName) {
        var result = window.confirm("Xóa sản phẩm " + ProductName + " khỏi giỏ hàng ?");
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        // if (result) {
        //     axios.delete('https://localhost:44384/api/cart?userName='+userlogin.Name+'&productID='+ProductID, {
        //       }).then((response)=>{
        //           console.log(response);
        //           this.props.OnDelete();
        //       });
        // }
        if (result) {
            axios.delete('https://localhost:44384/api/cart?userName=' + userlogin.Name + '&productID=' + ProductID, {
            }).then((response) => {
                console.log(response);
                if (response.data.status == 1) {
                    alert("Xóa thành công sản phẩm " + ProductName + " ra khỏi giỏ hàng ");
                    var arr = this.state.cartItems.filter(function (item) {
                        return item.ProductID !== ProductID;
                    })
                    this.setState({
                        cartItems: arr
                    })
                }
            });

        }
    }
    render() {
        return <CartContext.Provider value={{
            cartItems: this.state.cartItems,
            AddToCart: this.AddToCart,
            DeleteFromCart: this.DeleteFromCart
        }}>
            {this.props.children}
        </CartContext.Provider>;
    }
}
export default withRouter(CartProvider);