import { Component } from "react";
import AdressProvider, { AdressContext } from "../Adress/AdressProvider";

class CartDetailItem extends Component {
  render() {
    return (
      <AdressContext.Consumer>
        {({ onCheck ,OnSubtractQuantities,OnAddQuantities,OnChangeQuantities,DeleteFromCart}) => (
          <div className="cart-page-shop-section__items">
            <div className="cart-page-shop-section__item">
              <div className="cart-page-shop-section__item-header">

              </div>
              <div className="cart-item">
                <div className="cart-item__cell-checkbox">
                  <input type="checkbox" className="stardust-checkbox__input" checked={this.props.IsChecked} onClick={() => onCheck(this.props.ProductID)} />
                </div>
                <div className="cart-item-wrap">
                  <div className="cart-item__cell-overview">
                    <a href="#" className="cart-item-overview__thumbnail" style={{ backgroundImage: 'url("' + this.props.ImagePath + '")' }}>
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
                    <button className="btn-sub-quantity" onClick={()=>OnSubtractQuantities(this.props.ProductID)} >-</button>
                    <input type="text" className="input-quantity" min="1" value={this.props.Quantities}  onChange={(e)=>OnChangeQuantities(e,this.props.ProductID)}/>
                    <button className="btn-add-quantity" onClick={()=>OnAddQuantities(this.props.ProductID)}>+</button>
                  </div>
                  <div className="cart-item__cell-total-price">
                    <span>{this.props.TotalPrice}</span>
                  </div>
                  <div className="cart-item__cell-actions">
                    <div className="cart-item__action" onClick={()=>DeleteFromCart(this.props.ProductID)}>Xóa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </AdressContext.Consumer>
    )
  }
}
export default CartDetailItem;