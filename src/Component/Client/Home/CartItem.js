import React from 'react';

class CartItem extends React.Component {
    testOnclick() {
        console.log("delete")
    }
    render() {
        return (

            <li class="header__cart-item">
                <img src={this.props.ImagePath} alt="" class="header__cart-img"></img>
                <div class="header__cart-item-info">
                    <div class="header__cart-item-head">
                        <h5 class="header__cart-item-name">{this.props.Name}</h5>
                        <div class="header__cart-item-price-wrap">
                            <span class="header__cart-item-price">{this.props.Price} đ</span>
                            <span class="header__cart-item-multiply">x</span>
                            <span class="header__cart-item-qnt">{this.props.Quantities}</span>
                        </div>
                    </div>

                    <div class="header__cart-item-body">
                        <span class="header__cart-item-description">
                            Phân loại: {this.props.Category}
                        </span>
                        <span class="header__cart-item-remove" onClick={()=>this.testOnclick()}>Xóa</span>
                    </div>
                </div>
            </li>
        )
    }

}

export default CartItem;