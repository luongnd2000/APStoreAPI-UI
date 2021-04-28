import { Component } from "react";

var baseurl = "http://localhost:3000/";

class SideNav extends Component {
    componentDidMount () {
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/jquery/dist/jquery.min.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/js-cookie/js.cookie.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.min.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/vendor/chart.js/dist/Chart.extension.js")
        this.addScript(baseurl+ "argon-dashboard-master/assets/js/argon.js?v=1.2.0")
    }
    addScript=(url)=>{
        var script = document.createElement("script");
    
        script.src = url;
        script.async = true;
    
        document.body.appendChild(script);
    }
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
                                        <i className="ni ni-chart-bar-32 text-primary" />
                                        <span className="nav-link-text">Biểu đồ</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-bullet-list-67 text-primary" />
                                        <span className="nav-link-text">Đơn hàng</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-cart text-primary" />
                                        <span className="nav-link-text">Sản phẩm</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-book-bookmark text-primary" />
                                        <span className="nav-link-text">Danh mục sản phẩm</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-money-coins text-primary" />
                                        <span className="nav-link-text">Khuyến mãi</span>
                                    </a>
                                    <a className="nav-link" href={baseurl + "admin/Category"}>
                                        <i className="ni ni-bullet-list-67 text-default" />
                                        <span className="nav-link-text">Category</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "admin/Discount"}>
                                        <i className="ni ni-circle-08" />
                                        <span className="nav-link-text">Discount</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={baseurl + "Admin/Products"}>
                                        <i className="ni ni-circle-08 text-primary" />
                                        <span className="nav-link-text">Khách hàng</span>
                                    </a>
                                </li>                                  
                            </ul>
                            {/* Divider
                            <hr className="my-3" /> */}
                            {/* Heading */}
                            {/* <h6 className="navbar-heading p-0 text-muted">
                                <span className="docs-normal">Documentation</span>
                            </h6> */}
                            {/* Navigation */}
                            <ul className="navbar-nav mb-md-3">
                            
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default SideNav;