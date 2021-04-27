import { Component } from "react";

var baseurl = "http://localhost:3000/";

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div className="scrollbar-inner">
                    {/* Brand */}
                    <div className="sidenav-header  align-items-center">
                        <a className="navbar-brand" href="#">
                            <img src={baseurl + "argon-dashboard-master/assets/img/brand/blue.png"} className="navbar-brand-img" alt="..." />
                        </a>
                    </div>
                    <div className="navbar-inner">
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            {/* Nav items */}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href={baseurl + "Admin/DashBoard"}>
                                        <i className="ni ni-tv-2 text-primary" />
                                        <span className="nav-link-text">Dashboard</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Icons"}>
                                        <i className="ni ni-planet text-orange" />
                                        <span className="nav-link-text">Icons</span>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Maps"}>
                                        <i className="ni ni-pin-3 text-primary" />
                                        <span className="nav-link-text">Google</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="profile.html">
                                        <i className="ni ni-single-02 text-yellow" />
                                        <span className="nav-link-text">Profile</span>
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-bullet-list-67 text-default" />
                                        <span className="nav-link-text">Product</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "admin/login"}>
                                        <i className="ni ni-key-25 text-info" />
                                        <span className="nav-link-text">Login</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "admin/Register"}>
                                        <i className="ni ni-circle-08 text-pink" />
                                        <span className="nav-link-text">Register</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="upgrade.html">
                                        <i className="ni ni-send text-dark" />
                                        <span className="nav-link-text">Upgrade</span>
                                    </a>
                                </li>
                            </ul>
                            {/* Divider */}
                            <hr className="my-3" />
                            {/* Heading */}
                            <h6 className="navbar-heading p-0 text-muted">
                                <span className="docs-normal">Documentation</span>
                            </h6>
                            {/* Navigation */}
                            <ul className="navbar-nav mb-md-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                                        <i className="ni ni-spaceship" />
                                        <span className="nav-link-text">Getting started</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                                        <i className="ni ni-palette" />
                                        <span className="nav-link-text">Foundation</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                                        <i className="ni ni-ui-04" />
                                        <span className="nav-link-text">Components</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                                        <i className="ni ni-chart-pie-35" />
                                        <span className="nav-link-text">Plugins</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active active-pro" href="upgrade.html">
                                        <i className="ni ni-send text-dark" />
                                        <span className="nav-link-text">Upgrade to PRO</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default SideNav;