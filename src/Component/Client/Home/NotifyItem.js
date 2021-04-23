function NotifyItem(props) {
    return (
        <li class="header__notify-item header__notify-item--new">
            <span><img
            // "https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png"
                src={props.ImagePath}
                alt="mỹ phẩm" class="header__notify-img"></img></span>
            <div class="header__notify-info">
                <span class="header__notify-name">{props.Title}</span>
                <span class="header__notify-desc">{props.Content}</span>
            </div>
        </li>
    )
}
export default NotifyItem;