import axios from "axios";
import { data } from "jquery";
import React from "react";
import { useHistory, withRouter } from "react-router";
import Cookies from 'universal-cookie';
var baseurl = "http://localhost:3000/";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '', Pass: '', ResponseData: {} };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ Name: event.target.value });
    }

    handleChangePass(event) {
        this.setState({ Pass: event.target.value });
    }
    handleSubmit(event) {
        var self = this;
        axios({
            method: 'Post',
            url: 'https://localhost:44384/api/User',
            headers: {},
            data: {
                Name: this.state.Name, // This is the body part
                Pass: this.state.Pass // This is the body part
            }

        }).then(function (response) {
            console.log(response.data);
            self.setState({ ResponseData: response.data })
        });
        event.preventDefault();
    }


    render() {
        if (this.state.ResponseData) {
            if (this.state.ResponseData.message == "Success") {
                
                const cookies = new Cookies();
                cookies.set('UserLogin', this.state.ResponseData.data[0], { path: '/' })
                console.log(this.state.ResponseData.data[0])
                this.props.history.push("/shop")
            }
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mb-3">
                    <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-email-83" /></span>
                        </div>
                        <input className="form-control" placeholder="Tên đăng nhập" type="text" onChange={this.handleChangeName} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group input-group-merge input-group-alternative">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                        </div>
                        <input className="form-control" placeholder="Mật khẩu" type="password" onChange={this.handleChangePass} />
                    </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                        <span className="text-muted">Remember me</span>
                    </label>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary my-4">Sign in</button>
                </div>
            </form>
        );
    }


}
export default withRouter(LoginForm);