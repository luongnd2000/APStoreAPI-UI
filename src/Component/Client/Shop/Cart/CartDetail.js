import { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CartDetailItem from './CartDetailItem'
import AddressItem from "../Adress/AddressItem";
import AdressProvider, { AdressContext } from "../Adress/AdressProvider";
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DiscountItem from "./DiscountItem";
class CartDetail extends Component {
  constructor() {
    super();
    this.state={
      Name:"",
      PhoneNumber:"",
      Adress:"",
      NameUpdate:null,
      PhoneNumberUpdate:null,
      AdressUpdate:null
    }
    this.onChangeAdress=this.onChangeAdress.bind(this);
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangePhoneNumber=this.onChangePhoneNumber.bind(this);
    this.onChangeAdressUpdate=this.onChangeAdressUpdate.bind(this);
    this.onChangeNameUpdate=this.onChangeNameUpdate.bind(this);
    this.onChangePhoneNumberUpdate=this.onChangePhoneNumberUpdate.bind(this);
  }
  onChangeName(e){
    this.setState({Name:e.target.value})
  }
  onChangePhoneNumber(e){
    this.setState({PhoneNumber:e.target.value})
  }
  onChangeAdress(e){
    this.setState({Adress:e.target.value})
  }
  onChangeNameUpdate(e){
    this.setState({NameUpdate:e.target.value})
  }
  onChangePhoneNumberUpdate(e){
    this.setState({PhoneNumberUpdate:e.target.value})
  }
  onChangeAdressUpdate(e){
    this.setState({AdressUpdate:e.target.value})
  }
  showCarts(Carts) {
    var result = null;
    console.log("carts : " + Carts)
    if (Carts.length > 0) {
      console.log("ok")
      result = Carts.map((cart, index) => {
        return (<CartDetailItem
          key={index}
          ProductID={cart.ProductID}
          IsChecked={cart.IsChecked}
          Name={cart.NameDisplay}
          Price={cart.Price}
          Category={cart.Category}
          Quantities={cart.Quantities}
          ImagePath={cart.ImagePath}
          TotalPrice={cart.TotalPrice}
        ></CartDetailItem>);
      })
    }
    return result;
  }
  showCategories(list) {
    var result = null;
    if (list.length > 0) {
      result = list.map((item, index) => {
        return (<AddressItem
          key={index}
          ID={item.ID}
          Name={item.Name}
          PhoneNumber={item.PhoneNumber}
          Address={item.Adress}
          Type='select'
        ></AddressItem>);
      })
    }
    return result;
  }
  showListDiscount(list) {
    var result = null;
    if (list.length > 0) {
      result = list.map((item, index) => {
        return (<DiscountItem
          key={index}
          ID={item.ID}
          NameDisplay={item.NameDisplay}
          Value={item.Value}
          Code={item.Code}
        ></DiscountItem>);
      })
    }
    return result;
  }

  render() {
    return (
      <AdressContext.Consumer>

        {({ listAdress,
          ModalIsOpen,
          CloseModalAdress,
          ModalDiscountIsOpen,
          CloseModalDiscount,
          listDiscount,
          CheckAllProduct,
          listCartItem,
          currentDiscount,
          OpenModalDiscount,
          currentAdress,
          OpenModalAdress,
          OrderProduct,
          TotalPrice,
          TotalProduct,
          OpenModalAddAdress,
          CloseModalAddAdress,
          ModalAddAdressIsOpen,
          OpenModalUpdateAdress,
          CloseModalUpdateAdress,
          ModalUpdateAdressIsOpen,
          AddAdress,
          AdressToUpdate,
          SaveAdress
        }) => (
          <div className="cart">
            <Modal centered show={ModalIsOpen} size="lg">
              <div className="address">
                <div className="address-header">
                  <div className="address-header__title">
                    <h1>Địa chỉ của tôi</h1>
                  </div>
                  <a type="button" className="btn btn-add-address">
                    <i className="fas fa-plus back-text" />
                    <span className="back-text" onClick={() => OpenModalAddAdress()}>Thêm địa chỉ mới</span>
                  </a>
                  <a type="button" className="btn btn-add-address" onClick={() => CloseModalAdress()}>
                    {/* <i className="fas fa-plus" /> */}
                    <span className="back-text">Trở lại</span>
                  </a>
                </div>
                <div className="address-body">
                  <div className="address-list">
                    {this.showCategories(listAdress)}
                  </div>
                </div>
              </div>
            </Modal>
            <Modal centered show={ModalDiscountIsOpen} size="lg" >
              <div className="address">
                <div className="address-header">
                  <div className="address-header__title">
                    <h1>Voucher Cửa Hàng</h1>
                  </div>
                  <a type="button" className="btn btn-add-address" onClick={() => CloseModalDiscount()}>
                    {/* <i className="fas fa-plus" /> */}
                    <span className="back-text">Trở lại</span>
                  </a>
                </div>
                <div className="address-body">
                  <div className="address-list">
                    {this.showListDiscount(listDiscount)}
                  </div>
                </div>
              </div>
            </Modal>
            <Modal centered show={ModalAddAdressIsOpen} size="xl" >
              <div className="address">
                <div className="address-header">
                  <div className="address-header__title">
                    <h1>Thêm địa chỉ mới</h1>
                  </div>
                  <a type="button" className="btn btn-add-address" onClick={() => CloseModalAddAdress()}>
                    {/* <i className="fas fa-plus" /> */}
                    <span className="back-text">Trở lại</span>
                  </a>
                </div>
                <div className="address-body">
                  <div className="address-list">
                    <div className="address-item">
                      <div className="row">

                        <div className="col col-12 col-md-12">
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Tên"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              
                              onChange={(e)=>this.onChangeName(e)}
                            />
                          </InputGroup>
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Số điện thoại"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              
                              onChange={(e)=>this.onChangePhoneNumber(e)}
                            />
                          </InputGroup>
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Địa chỉ"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e)=>this.onChangeAdress(e)}
                            />
                          </InputGroup>
                          <button className="btn btn-set-default" onClick={()=>AddAdress(this.state.Name,this.state.Adress,this.state.PhoneNumber)}>Thêm địa chỉ</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
            <Modal centered show={ModalUpdateAdressIsOpen} size="xl" >
              <div className="address">
                <div className="address-header">
                  <div className="address-header__title">
                    <h1>Thêm địa chỉ mới</h1>
                  </div>
                  <a type="button" className="btn btn-add-address" onClick={() => CloseModalUpdateAdress()}>
                    {/* <i className="fas fa-plus" /> */}
                    <span className="back-text">Trở lại</span>
                  </a>
                </div>
                <div className="address-body">
                  <div className="address-list">
                    <div className="address-item">
                      <div className="row">

                        <div className="col col-12 col-md-12">
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Tên"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              
                              defaultValue={AdressToUpdate!=null?AdressToUpdate.Name:""}
                              onChange={(e)=>this.onChangeNameUpdate(e)
                              
                              }
                            />
                          </InputGroup>
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Số điện thoại"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              
                              defaultValue={AdressToUpdate!=null?AdressToUpdate.PhoneNumber:""}
                              onChange={(e)=>this.onChangePhoneNumberUpdate(e)}
                            />
                          </InputGroup>
                          <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              placeholder="Địa chỉ"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              onChange={(e)=>this.onChangeAdressUpdate(e)}
                              defaultValue={AdressToUpdate!=null?AdressToUpdate.Adress:""}
                            />
                          </InputGroup>
                          <button className="btn btn-set-default" onClick={()=>SaveAdress(this.state.NameUpdate,this.state.AdressUpdate,this.state.PhoneNumberUpdate)}>Lưu địa chỉ</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
            <div className="container">
              <div className="cart__content">
                <div className="cart-shop">
                  <div className="cart-shop-header">
                    <div className="cart-item__cell-checkbox">
                      <input type="checkbox" className="stardust-checkbox__input" onChange={(e) => CheckAllProduct(e)} />
                    </div>
                    <a href="#" className="cart-page-shop-header__shop-name">
                      Chọn tất cả
                    </a>
                  </div>
                  {this.showCarts(listCartItem)}
                  <div className="cart-voucher">
                    <i className="fas fa-tags icon-voucher" />
                    <div className="cart-voucher__content">
                      <div className="cart-voucher__message">Shop Voucher</div>
                      <div><b>{currentDiscount.NameDisplay} </b> </div>
                      <div className="cart-voucher__more" onClick={() => OpenModalDiscount()}>Chọn Voucher</div>
                    </div>
                  </div>
                  <div className="cart-shipping">
                    <i className="fas fa-truck icon-free-shipping" />
                    <div className="cart-shipping__message">Địa chỉ giao hàng</div>
                    <div><b>{currentAdress.Name} </b> / (84){currentAdress.PhoneNumber} / {currentAdress.Adress}</div>
                    <div className="shopee-drawer" onClick={() => OpenModalAdress()}>Chọn địa điểm giao hàng</div>
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
                      <input type="checkbox" className="stardust-checkbox__input input-check-all" onChange={(e) => CheckAllProduct(e)} />
                    </div>
                    <label htmlFor="input-check-all" className="cart-page-footer__product-count">Chọn tất cả (1)</label>
                    <div className="cart-page-footer-space" />
                    <div className="cart-page-footer__summary">
                      <div className="cart-page-footer__first-summary">
                        <div className="cart-page-footer-summary__subtotal-text">Tổng tiền hàng ({TotalProduct} Sản phẩm):</div>
                        <div className="cart-page-footer-summary__subtotal-amount">₫{TotalPrice}</div>
                      </div>
                      <div className="cart-page-footer__second-summary">Nhận thêm: 0 Xu</div>
                    </div>
                    <div className="cart-page-footer__checkout">
                      <button type="button" className="btn shopee-button-solid" onClick={() => OrderProduct()}>Mua Hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </AdressContext.Consumer>
    )
  }
}
export default withRouter(CartDetail);