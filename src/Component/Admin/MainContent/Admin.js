import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    withRouter
} from "react-router-dom";

import SideNav from "./SideNav";
import DashBoard from "../Dashboard/DashBoard";
import Maps from "../Maps/Maps";
import Products from "../Products/Products";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import ListBill from "../BIll/ListBill";

var baseurl = "http://localhost:3000/";
export default function Admin() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/nucleo/css/nucleo.css"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/css/argon.css?v=1.2.0"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/jquery/dist/jquery.min.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/js-cookie/js.cookie.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.min.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.extension.js"} type="text/css" />
                <link rel="stylesheet" href={baseurl + "argon-dashboard-master/assets/js/argon.js?v=1.2.0"} type="text/css" />
            </div>
            <div>
                {/* Sidenav */}
                <SideNav />
                {/* Main content */}
                <Switch>
                    <Route exact path={path}>
                        <DashBoard />
                    </Route>
                    <Route path={`${path}/DashBoard`}>
                        <DashBoard />
                    </Route>
                    <Route path={`${path}/Maps`}>
                        <Maps />
                    </Route>
                    <Route path={`${path}/Products`}>
                        <Products />
                    </Route>
                    <Route path={`${path}/Bills`}>
                        <ListBill />
                    </Route>
                    <Route path={`${path}/AddProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/UpdateProduct/:productId`}>
                        <UpdateProduct />
                    </Route>
                </Switch>
            </div>

        </div>
    )
}