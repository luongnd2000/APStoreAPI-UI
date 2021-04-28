
import Header from "./Header";
import MainContent from "./MainContent";
import DetailProduct from "./DetailProduct";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import CartDetail from "./Cart/CartDetail";
import Address from "./Adress/Address";
import AdressProvider from "./Adress/AdressProvider"
import ProductProvider from "./Context/ProductProvider";


var baseurl = "http://localhost:3000/";
export default function Shop() {
    let { path, url } = useRouteMatch();
    return (
        <AdressProvider>
            <ProductProvider>
                <div>
                    <div>
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/grid.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/base.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/main.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/responsive.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/font/fontawesome-free-5.15.1-web/css/all.min.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/detailProduct.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/cart.css"} />
                        <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/address.css"} />
                    </div>
                    <Header></Header>
                    <Switch>
                        <Route exact path={path}>
                            <MainContent />
                        </Route>
                        <Route path={`${path}/Detail/:ID`}>
                            <DetailProduct />
                        </Route>
                        <Route path={`${path}/Address`}>
                            <Address />
                        </Route>
                        <Route path={`${path}/CartDetail`}>
                            <CartDetail />
                        </Route>

                    </Switch>
                    <Footer></Footer>
                </div>
            </ProductProvider>
        </AdressProvider>
    );
}

