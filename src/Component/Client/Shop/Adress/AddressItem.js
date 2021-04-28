import { Component } from "react";
import { AdressContext } from "./AdressProvider";

class AddressItem extends Component {
  render() {
    return (
      <div className="address-item">
        <div className="row">
          <div className="col col-6 col-md-6">
            <div className="address-name">
              <div className="address-title address-name__title">Họ &amp; Tên</div>
              <div className="address-content address-name__content">{this.props.Name}
                <span className="mark-default">Mặc định</span>
              </div>
            </div>
            <div className="address-phone">
              <div className="address-title address-phone__title">Số điện thoại</div>
              <div className="address-content address-phone__content">(+84){this.props.PhoneNumber}</div>
            </div>
            <div className="address-address">
              <div className="address-title address-address d-block p-0">Địa chỉ</div>
              <div className="address-content address-address__content">
                <div className="address-address__village">{this.props.Address}</div>
                {/* <div className="address-address__commune">Xã Châu Đức</div>
                <div className="address-address__district">TP Ninh Bình</div> */}
              </div>
            </div>
          </div>
          <div className="col col-6 col-md-6">
            <div className="address-control">

              <AdressContext.Consumer>
                {({ DeleteAdress,UpdateAdress }) => (
                  <div className="address-control__buttons">
                    <a className="btn-control btn-control-update" href="#" onClick={(e)=>UpdateAdress(e,this.props.ID)}>Sửa</a>
                    <a className="btn-control btn-control-delete" href="#" onClick={(e)=>DeleteAdress(e,this.props.ID)}>Xóa</a>
                  </div>
                )}
              </AdressContext.Consumer>
              <AdressContext.Consumer>
                {({ SetCurrentAdress }) => (

                  <button className="btn btn-set-default" onClick={() => SetCurrentAdress(this.props.ID)}>Chọn</button>
                )}
              </AdressContext.Consumer>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default AddressItem;