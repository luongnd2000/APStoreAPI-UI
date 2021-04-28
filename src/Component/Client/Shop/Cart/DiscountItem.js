import { Component } from "react";
import AdressProvider, { AdressContext } from "../Adress/AdressProvider";

class DiscountItem extends Component {
  render() {
    return (
      <div className="address-item">
        <div className="row">
          <div className="col col-6 col-md-6">
            <div className="address-name">
              <div className="address-title address-name__title">Khuyến mãi</div>
              <div className="address-content address-name__content">{this.props.NameDisplay}
              </div>
            </div>
            <div className="address-phone">
              <div className="address-title address-phone__title">Mã</div>
              <div className="address-content address-phone__content">{this.props.Code}</div>
            </div>
            <div className="address-address">
              <div className="address-title address-address d-block p-0">Giá trị khuyến mãi</div>
              <div className="address-content address-address__content">
                <div className="address-address__village">{this.props.Value*100}%</div>
                {/* <div className="address-address__commune">Xã Châu Đức</div>
                <div className="address-address__district">TP Ninh Bình</div> */}
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-6">
            <div className="address-control">
            <AdressContext.Consumer>
                {({SetCurrentDiscount }) => (

                  <button className="btn btn-set-default" onClick={() => SetCurrentDiscount(this.props.ID)}>Chọn</button>
                )}
              </AdressContext.Consumer>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default DiscountItem;