import { Component } from "react";

class CartDetailItem extends Component{
    render(){
        return (
            
            <div className="cart-page-shop-section__items">
            <div className="cart-page-shop-section__item">
              <div className="cart-page-shop-section__item-header">

              </div>
              <div className="cart-item">
                <div className="cart-item__cell-checkbox">
                  <input type="checkbox" className="stardust-checkbox__input" />
                </div>
                <div className="cart-item-wrap">
                  <div className="cart-item__cell-overview">
                    <a href="#" className="cart-item-overview__thumbnail">
                      <div className="cart-item-overview__thumbnail" />
                    </a>
                    <div className="cart-item-overview__name">
                      {this.props.Name}
                    </div>
                  </div>
                  <div className="cart-item__cell-variation">
                    <div>Phân loại hàng</div>
                    <div>{this.props.Category}</div>
                  </div>
                  <div className="cart-item__cell-unit-price">
                    <span className="cart-item__unit-price cart-item__unit-price--before">₫250.000</span>
                    <span className="cart-item__unit-price cart-item__unit-price--after">₫{this.props.Price}</span>
                  </div>
                  <div className="quantity-product cart-item__cell-quantity">
                    <button className="btn-sub-quantity">-</button>
                    <input type="text" className="input-quantity" defaultValue={this.props.Quantities} />
                    <button className="btn-add-quantity">+</button>
                  </div>
                  <div className="cart-item__cell-total-price">
                    <span>₫149.000</span>
                  </div>
                  <div className="cart-item__cell-actions">
                    <button className="cart-item__action">Xóa</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        )
    }
}
export default CartDetailItem;