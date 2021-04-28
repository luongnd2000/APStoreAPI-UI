import { ProductContext } from "./Context/ProductProvider";

function Category(props) {
    return (

        <ProductContext.Consumer>
            {({ OnSelectCategory
            }) => (
                <li className={props.IsActive ? " category-item category-item--active" : "category-item"}>
                    <a href="/#" className="category-item__link" onClick={(e)=>OnSelectCategory(e,props.ID)}>{props.Name} </a>
                </li>
            )}
        </ProductContext.Consumer>
    )
}
export default Category;