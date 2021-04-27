import { Component } from "react";
import CartDetailItem from './CartDetailItem'
class CartDetail extends Component {
  render() {
    return (
      <div className="cart">
        <div className="container">
          <div className="cart__content">
            <div className="cart-shop">
              <div className="cart-shop-header">
                <div className="cart-item__cell-checkbox">
                  <input type="checkbox" className="stardust-checkbox__input" />
                </div>
                <a href="#" className="cart-page-shop-header__shop-name">
                  Chọn tất cả
                    </a>
              </div>
              <CartDetailItem></CartDetailItem>
              <div className="cart-voucher">
                <i className="fas fa-tags icon-voucher" />
                <div className="cart-voucher__content">
                  <div className="cart-voucher__message">Shop Voucher giảm đến ₫29k</div>
                  <div className="cart-voucher__more">Xem thêm Voucher</div>
                </div>
              </div>
              <div className="cart-shipping">
                <i className="fas fa-truck icon-free-shipping" />
                <div className="cart-shipping__message">Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 (giảm tối đa
                ₫15.000);
                      Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000 (giảm tối đa ₫70.000)</div>
                <div className="shopee-drawer">Tìm hiểu thêm</div>
              </div>
            </div>
            <div className="cart-page-footer">
              <div className="cart-page-footer__row1">
                <div className="row">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-7" />
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-5">
                    <div className=" cart-page-footer__row1-wrap">
                      <i className="fas fa-tags icon-voucher" />
                      <div className="cart-footer__voucher-message">Shopee Voucher</div>
                      <div className="cart-page-footer-space" />
                      <div className="cart-footer__voucher-choose">Chọn hoặc nhập mã</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-page-footer__row2">
                <div className="cart-item__cell-checkbox">
                  <input type="checkbox" className="stardust-checkbox__input input-check-all" />
                </div>
                <label htmlFor="input-check-all" className="cart-page-footer__product-count">Chọn tất cả (1)</label>
                <button className="cart-item__action">Xóa</button>
                <div className="cart-page-footer-space" />
                <div className="cart-page-footer__summary">
                  <div className="cart-page-footer__first-summary">
                    <div className="cart-page-footer-summary__subtotal-text">Tổng tiền hàng (0 Sản phẩm):</div>
                    <div className="cart-page-footer-summary__subtotal-amount">₫0</div>
                  </div>
                  <div className="cart-page-footer__second-summary">Nhận thêm: 0 Xu</div>
                </div>
                <div className="cart-page-footer__checkout">
                  <button type="button" className="btn shopee-button-solid">Mua Hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CartDetail;