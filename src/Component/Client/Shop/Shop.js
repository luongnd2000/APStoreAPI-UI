
import Header from "./Header";
import { Component } from "react";
import MainContent from "./MainContent";
import DetailProduct from "./DetailProduct";
import Footer from "./Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    withRouter
} from "react-router-dom";
import CartDetail from "./Cart/CartDetail";
import  CartProvider from './Context/CartProvider'
var baseurl = "http://localhost:3000/";
export default function Shop() {
    let { path, url } = useRouteMatch();
    return (
        <CartProvider>

            <div>
                <div>
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/grid.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/base.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/main.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/responsive.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/font/fontawesome-free-5.15.1-web/css/all.min.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/detailProduct.css"} />
                    <link rel="stylesheet" href={baseurl + "f8-shop/assets/css/cart.css"} />
                </div>
                <Header></Header>
                <Switch>
                    <Route exact path={path}>
                        <MainContent />
                    </Route>
                    <Route path={`${path}/Detail/:ID`}>
                        <DetailProduct />
                    </Route>
                    <Route path={`${path}/CartDetail`}>
                        <CartDetail />
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </CartProvider>
    );
}

