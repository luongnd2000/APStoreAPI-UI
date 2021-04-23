function CartItem() {
    return (
        <li class="header__cart-item">
            <img src="http://localhost:3000/f8-shop/assets/img/product2.png" alt="" class="header__cart-img"></img>
            <div class="header__cart-item-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Set rửa mặt</h5>
                    <div class="header__cart-item-price-wrap">
                        <span class="header__cart-item-price">1.035.000đ</span>
                        <span class="header__cart-item-multiply">x</span>
                        <span class="header__cart-item-qnt">3</span>
                    </div>
                </div>

                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: bạc
                                                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        </li>
    )
}

export default CartItem;