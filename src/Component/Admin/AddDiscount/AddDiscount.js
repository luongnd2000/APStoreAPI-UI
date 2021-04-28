import axios from 'axios';
import { Component } from 'react';
import Topnav from '../MainContent/Topnav';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

var baseurl = "http://localhost:3000/";

export default class AddDiscount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NameDiscount: '',
            Code: '',
            Value: 0,
            StartDate: new Date(),
            EndDate: new Date()
        }
        this.convertDateTime = this.convertDateTime(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterNameDiscount = this.handleEnterNameDiscount.bind(this);
        this.handleEnterCodeDiscount = this.handleEnterCodeDiscount.bind(this);
        this.handleEnterValueDisCount = this.handleEnterValueDisCount.bind(this);
        this.handleChooseStartDate = this.handleChooseStartDate.bind(this);
        this.handleChooseEndDate = this.handleChooseEndDate.bind(this);
    }

    componentDidMount() {

    }

    convertDateTime(e) {
        const valueOfInput = moment(e).format('DD-MM-YYYY HH:mm');

        return valueOfInput;
    }

    handleSubmit(e) {
        let self = this;
        console.log(this.state);
        axios({
            type: 'POST',
            url: 'https://localhost:44384/api/Discount',
            data: {
                NameDisplay: self.state.NameDiscount,
                Code: self.state.Code,
                Value: self.state.Value,
                StartDate: self.state.StartDate,
                EndDate: self.state.EndDate
            }
        }).then(function (res) {
            if (res) {
                alert("Thêm Discount thành công");
            }
            else {
                alert("That bai");
            }
        })
    }

    handleEnterNameDiscount(e) {
        let NameDiscount = e.target.value;
        this.setState({ NameDiscount: NameDiscount })
    }

    handleEnterCodeDiscount(e) {
        let Code = e.target.value;
        this.setState({ Code: Code })
    }

    handleEnterValueDisCount(e) {
        let Value = e.target.value;
        this.setState({ Value: Value });
    }

    handleChooseStartDate(e) {
        let StartDate = new Date(e);
        this.setState({ StartDate: StartDate })
    }

    handleChooseEndDate(e) {
        let EndDate = new Date(e);
        this.setState({ EndDate: EndDate });
    }

    render() {
        let category = this.state.category;
        return (
            <div className="main-content" id="panel">
                {/* Topnav */}
                <Topnav />
                {/* Header */}
                <div className="header bg-primary pb-6">
                    <div className="container-fluid">
                        <div className="header-body">
                            <div className="row align-items-center py-4">
                                <div className="col-lg-6 col-7">
                                    <h6 className="h2 text-white d-inline-block mb-0">Discounts</h6>
                                    <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                        <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home" /></a></li>
                                            <li className="breadcrumb-item"><a href="#">Discounts</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Add Discount</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-lg-6 col-5 text-right">
                                    <a href={baseurl + "Admin/Discount"} className="btn btn-sm btn-neutral">List Discount</a>
                                    <a href="#" className="btn btn-sm btn-neutral">Filters</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Discount */}
                <div className="container-fluid mt--6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header border-0">
                                    <h3 className="mb-0">ADD Discount</h3>
                                </div>
                                <div className="card-footer py-4">
                                    <form className="form-horizontal mr-4 ml-4" onSubmit={this.handleSubmit}>
                                        <fieldset className="ml-4 mt-4">
                                            {/* Form Name */}
                                            <legend>ADD Discount</legend>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="Discount_name">Name Display</label>
                                                <div className="col-md-8">
                                                    <input id="Discount_name" name="Discount_name" placeholder="Name Discount" className="form-control input-md" required type="text" onChange={this.handleEnterNameDiscount} />
                                                </div>
                                            </div>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="percentage_discount">Code</label>
                                                <div className="col-md-8">
                                                    <input id="percentage_discount" name="percentage_discount" placeholder="Code" className="form-control input-md" required type="text" onChange={this.handleEnterCodeDiscount} />
                                                </div>
                                            </div>
                                            {/* Text input*/}
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="percentage_discount">Value</label>
                                                <div className="col-md-8">
                                                    <input id="percentage_discount" name="percentage_discount" placeholder="Value" className="form-control input-md" required type="number" onChange={this.handleEnterValueDisCount} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="percentage_discount">Start Date</label>
                                                <div className="col-md-8">
                                                    <DateTimePicker
                                                        onChange={this.handleChooseStartDate}
                                                        value={this.state.StartDate}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-8 control-label" htmlFor="percentage_discount">End Date</label>
                                                <div className="col-md-8">
                                                    <DateTimePicker
                                                        onChange={this.handleChooseEndDate}
                                                        value={this.state.EndDate}
                                                    />
                                                    <div className="form-group">
                                                        <div className="col-md-8">
                                                            <button type="Submit" value="Submit" id="singlebutton" name="singlebutton" className="btn btn-primary">ADD DISCOUNT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}