function NotifyItem(props) {
    return (
        <li className="header__notify-item header__notify-item--new">
            <span><img
            // "https://img.abaha.vn/photos/resized/200x120/121-1608210033-demoweb.png"
                src={props.ImagePath}
                alt="mỹ phẩm" className="header__notify-img"></img></span>
            <div className="header__notify-info">
                <span className="header__notify-name">{props.Title}</span>
                <span className="header__notify-desc">{props.Content}</span>
            </div>
        </li>
    )
}
export default NotifyItem;