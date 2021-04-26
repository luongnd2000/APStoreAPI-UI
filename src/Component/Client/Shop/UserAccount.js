import React, { Component } from "react";
import { useHistory, withRouter } from "react-router";
import Cookies from "universal-cookie";

class UserAccount extends Component {
    render(){
        return (
            <li className="header__navbar-item header__navbar-user">
                <img src="http://localhost:3000/f8-shop/assets/img/user.png" alt="User" className="header__navbar-user-img"></img>
                <span className="header__navbar-item-name">{this.props.NameDisplay}</span>
    
                <ul className="header__navbar-user-menu">
                    <li className="header__navbar-user-item">
                        <a href="/#">Tài khoản của tôi</a>
                    </li>
                    <li className="header__navbar-user-item">
                        <a href="/#">Địa chỉ của tôi</a>
                    </li>
                    <li className="header__navbar-user-item">
                        <a href="/#">Đơn mua</a>
                    </li>
                    <li className="header__navbar-user-item header__navbar-user-item--separate">
                        <a href="/#" onClick={this.props.SetLogout}>Đăng xuất</a>
                    </li>
                </ul>
            </li>
        );
    }

}

export default withRouter(UserAccount);