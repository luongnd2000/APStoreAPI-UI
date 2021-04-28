import axios from "axios";
import { Component } from "react";
import Cookies from "universal-cookie";
import CartDetailItem from "../Cart/CartDetailItem";
import AddressItem from "./AddressItem";

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Address: []
        };
        const axios = require('axios');
    }
    componentDidMount = () => {
        let self = this;

        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        axios.get('https://localhost:44384/api/Delivery?userName=' + userlogin.Name)
            .then(function (response) {
                // handle success
                console.log(response);
                self.setState({
                    Address: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    showCategories(Categories) {
        var result = null;
        console.log(Categories)
        if (Categories.length > 0) {
            console.log("ok")
            result = Categories.map((category, index) => {
                return (<AddressItem
                    key={index}
                    Name={category.Name}
                    PhoneNumber={category.PhoneNumber}
                    Address={category.Adress}
                    ButtonName="Đặt mặc định"
                ></AddressItem>);
            })
        }
        return result;
    }
    render() {
        var listAdress=this.state.Address;
        return (

            <div className="cart">
                <div className="container">
                    <div className="cart__content">

                        <div className="cart-shop">
                            <div className="address">
                                <div className="address-header">
                                    <div className="address-header__title">
                                        <h1>Địa chỉ của tôi</h1>
                                    </div>
                                    <a href="#" type="button" className="btn btn-add-address">
                                        <i className="fas fa-plus" />
                                        <span className="ml-4">Thêm địa chỉ mới</span>
                                    </a>
                                </div>
                                <div className="address-body">
                                    <div className="address-list">
                                        {this.showCategories(listAdress)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Address;