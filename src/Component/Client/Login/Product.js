import React from "react";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

function ShowDetail(ID) {
    let history = useHistory();
    history.push('/detail/' + ID)
}
export default function Product(props) {
    return (
        <div className="col-lbr l-2-4 m-4 c-6-lbr">
            <a className="home-produce-item" href={"/Shop/Detail/"+props.ID}>
                <div className="home-produce-item__img" style={{ backgroundImage: 'url("' +props.ImagePath + '")' }} />
                <h4 className="home-produce-item__name">{props.ProductName}</h4>
                <div className="home-produce-item__price">
                    <span className="home-produce-item__price-old">4600000đ</span>
                    <span className="home-produce-item__price-new">{props.NewPrice}</span>
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
                    <span className="home-produce-item__origin-brand">Đắc lắc</span>
                    <span className="home-produce-item__origin-name">{props.Category}</span>
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
