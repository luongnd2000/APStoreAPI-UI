function Product(){
    return(
        <div className="col-lbr l-2-4 m-4 c-6-lbr">
                    <a className="home-produce-item" href="#">
                      <div className="home-produce-item__img" style={{backgroundImage: 'url("http://localhost:3000/f8-shop/assets/img/product.png")'}} />
                      <h4 className="home-produce-item__name">Set kem mắt tái sinh Ohui The First Geniture
                        Eye Cream Edition Grand Blue</h4>
                      <div className="home-produce-item__price">
                        <span className="home-produce-item__price-old">4600000đ</span>
                        <span className="home-produce-item__price-new">4140000đ</span>
                      </div>
                      <div className="home-produce-item__action">
                        <span className="home-produce-item__like home-produce-item__liked">
                          <i className="home-produce-item__like-icon--empty far fa-heart" />
                          <i className="home-produce-item__like-icon--fill fas fa-heart" />
                        </span>
                        <div className="home-produce-item__rating">
                          <i className="home-produce-item__star-gold fas fa-star" />
                          <i className="home-produce-item__star-gold fas fa-star" />
                          <i className="home-produce-item__star-gold fas fa-star" />
                          <i className="home-produce-item__star-gold fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <span className="home-produce-item__sold">88 đã bán</span>
                      </div>
                      <div className="home-produce-item__origin">
                        <span className="home-produce-item__origin-brand">Whoo</span>
                        <span className="home-produce-item__origin-name">Nhật bản</span>
                      </div>
                      <div className="home-produce-item__favourite">
                        <i className="fas fa-check" />
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-produce-item__sale-off">
                        <span className="home-produce-item__sale-off-percent">43%</span>
                        <span className="home-produce-item__sale-off__sale-off-label">Giảm</span>
                      </div>
                    </a>
                  </div>
    );
}

export default Product;