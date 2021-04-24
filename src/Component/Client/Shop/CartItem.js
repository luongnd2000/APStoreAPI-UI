import React from 'react';

class CartItem extends React.Component {
    testOnclick() {
        console.log("delete")
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
                        <span className="header__cart-item-remove" onClick={()=>this.testOnclick()}>Xóa</span>
                    </div>
                </div>
            </li>
        )
    }

}

export default CartItem;