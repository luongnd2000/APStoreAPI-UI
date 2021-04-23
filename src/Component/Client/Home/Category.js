function Category(props) {
    return (
        <li className="category-item category-item--active">
            <a href="#" className="category-item__link">{props.Name}</a>
        </li>
    )
}
export default Category;