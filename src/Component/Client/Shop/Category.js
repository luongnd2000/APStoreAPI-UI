function Category(props) {
    return (
        <li className={props.IsActive?" category-item category-item--active":"category-item"}>
            <a href="/#" className="category-item__link">{props.Name}</a>
        </li>
    )
}
export default Category;