import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideNav from "./SideNav";
import DashBoard from "../Dashboard/DashBoard";
import Maps from "../Maps/Maps";
import Products from "../Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

var baseurl = "http://localhost:3000/";
class Admin extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/jquery/dist/jquery.min.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/js-cookie/js.cookie.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.min.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.extension.js")
        this.addScript(baseurl + "argon-dashboard-master/assets/js/argon.js?v=1.2.0")
    }
    addScript = (url) => {
        var script = document.createElement("script");

        script.src = url;
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
                    <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/nucleo/css/nucleo.css"} type="text/css" />
                    <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"} type="text/css" />
                    <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/css/argon.css?v=1.2.0"} type="text/css" />
                </div>
                <div>
                    {/* Sidenav */}
                    <SideNav />
                    {/* Main content */}
                    <Switch>
                        <Route path={'DashBoard'}>
                            <DashBoard />
                        </Route>
                        <Route path={'Maps'}>
                            <Maps />
                        </Route>
                        <Route path={'Products'}>
                            <Products />
                        </Route>
                        <Route path={'AddProduct'}>
                            <AddProduct />
                        </Route>
                        <Route path={'UpdateProduct/:productId'}>
                            <UpdateProduct />
                        </Route>
                        <Route exact path={''}>
                            <DashBoard />
                        </Route>
                    </Switch>
                    {/* {this.props.component === "DashBoard" && <DashBoard />}
                    {this.props.component === "Maps" && <Maps />}
                    {this.props.component === "Products" && <Products />}
                    {this.props.component === "AddProduct" && <AddProduct />}
                    {this.props.component === "UpdateProduct" && <UpdateProduct />} */}
                </div>

            </div>
        )
    }
}
export default Admin;