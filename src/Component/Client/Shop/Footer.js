import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="grid wide footer__content">
                    <div className="row-lbr">
                        <div className="col-lbr l-2-4 m-4 c-6-lbr">
                            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Trung tâm trợ giúp</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">F8 Shop Mall</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Hướng dẫn mua hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lbr l-2-4 m-4 c-6-lbr">
                            <h3 className="footer__heading">Giới thiệu</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Giới thiệu</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Tuyển dụng</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Điều khoản</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lbr l-2-4 m-4 c-6-lbr">
                            <h3 className="footer__heading">Danh mục</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Trang điểm mặt</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Trang điểm mắt</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Trang điểm môi</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lbr l-2-4 m-4 c-6-lbr">
                            <h3 className="footer__heading">Theo dõi</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link footer-item__link-facebook">
                                        <i className="footer-item__icon fab fa-facebook" />
                    Facebook
                  </a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">
                                        <i className="footer-item__icon fab fa-instagram-square" />
                    Instagram
                  </a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">
                                        <i className="footer-item__icon fab fa-linkedin" />
                    Linkedin
                  </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lbr l-2-4 m-8 c-12-lbr">
                            <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                            <div className="footer__download">
                                <img src="http://localhost:3000/f8-shop/assets/img/QR.png" alt="Max QR" className="footer__download-qr" />
                                <div className="footer__download-apps">
                                    <a href="#" className="footer__download-app-link">
                                        <img src="http://localhost:3000/f8-shop/assets/img/AppStore.png" alt="App Store" className="footer__download-app-img" />
                                    </a>
                                    <a href="#" className="footer__download-app-link">
                                        <img src="http://localhost:3000/f8-shop/assets/img/GooglePlay.png" alt="Google Play" className="footer__download-app-img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="grid wide">
                        <p className="footer__text">© bản quyền thuộc về công ty F8</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;