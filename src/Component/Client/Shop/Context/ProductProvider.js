import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";

export const ProductContext = React.createContext()
class ProductProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            Categories: [],
            CurrentIDFilter:0,
            SearchString:""
        };
        this.OnSelectCategory=this.OnSelectCategory.bind(this)
        this.OnChangeSearchString=this.OnChangeSearchString.bind(this)
        this.OnSearchProduct=this.OnSearchProduct.bind(this)
    }
    OnSelectCategory(e,id){
        e.preventDefault()
        console.log(id);
        this.setState({CurrentIDFilter:id});
        this.state.Categories.forEach(element => {
            if(element.ID==id){
                element.IsActive=true;
            }
            else{
                element.IsActive=false;
            }
        });
        this.setState({Categories:this.state.Categories});
        let self = this;
        axios.get('https://localhost:44384/api/Product?idFilter='+id+"&searchString="+self.state.SearchString)
            .then(function (response) {
                // handle success

                self.setState({
                    Products: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    OnChangeSearchString(e){
        console.log(e.target.value);
        this.setState({SearchString:e.target.value});
    }
    OnSearchProduct(){
        console.log("Search")
        var search=this.state.SearchString
        var id=this.state.CurrentIDFilter
        var self=this;
        axios.get('https://localhost:44384/api/Product?idFilter='+id+"&searchString="+search)
        .then(function (response) {
            // handle success
            console.log(response.data.data)
            self.setState({
                Products: response.data.data
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
        });
    }
    componentDidMount = () => {
        let self = this;
        console.log(self.state.CurrentIDFilter);
        axios.get('https://localhost:44384/api/Product?idFilter='+self.state.CurrentIDFilter+"&searchString="+self.state.SearchString)
            .then(function (response) {
                // handle success

                self.setState({
                    Products: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
        axios.get('https://localhost:44384/api/ProductCategory')
            .then(function (response) {
                // handle success
                console.log("Test"+self.state.CurrentIDFilter)
                response.data.data.forEach(element => {
                    if(self.state.CurrentIDFilter==element.ID) element.IsActive=true;
                    else element.IsActive=false;
                });
                var category={
                    ID:0,
                    IsActive:true,
                    Name:"Tất cả "
                }
                response.data.data.unshift(category);
                console.log("Provider : "+response)
                self.setState({
                    Categories: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }

    render() {
        return <ProductContext.Provider value={{
            Products: this.state.Products,
            Categories: this.state.Categories,
            CurrentIDFilter: this.state.CurrentIDFilter,
            OnSelectCategory: this.OnSelectCategory,
            OnChangeSearchString:this.OnChangeSearchString,
            OnSearchProduct:this.OnSearchProduct
        }}>
            {this.props.children}
        </ProductContext.Provider>;
    }
}
export default withRouter(ProductProvider);