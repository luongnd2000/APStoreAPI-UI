import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";

export const AdressContext = React.createContext()
class AdressProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCartItem: [],
            listAdress: [],
            listDiscount: [],
            currentAdress: {},
            currentDiscount: {},
            adressToUpdate: null,
            ModalIsOpen: false,
            ModalDiscountIsOpen: false,
            ModalAddAdressIsOpen: false,
            ModalUpdateAdressIsOpen: false,
            TotalPrice: 0,
            TotalProduct: 0
        };
        this.SetCurrentAdress = this.SetCurrentAdress.bind(this);
        this.SetCurrentDiscount = this.SetCurrentDiscount.bind(this);
        this.OpenModalAdress = this.OpenModalAdress.bind(this);
        this.CloseModalAdress = this.CloseModalAdress.bind(this);
        this.OpenModalDiscount = this.OpenModalDiscount.bind(this);
        this.CloseModalDiscount = this.CloseModalDiscount.bind(this);
        this.OpenModalAddAdress = this.OpenModalAddAdress.bind(this);
        this.CloseModalAddAdress = this.CloseModalAddAdress.bind(this);
        this.OpenUpdateAddAdress = this.OpenModalUpdateAdress.bind(this);
        this.CloseModalUpdateAdress = this.CloseModalUpdateAdress.bind(this);

        this.onCheck = this.onCheck.bind(this);
        this.CheckAllProduct = this.CheckAllProduct.bind(this);
        this.OrderProduct = this.OrderProduct.bind(this);

        this.AddToCart = this.AddToCart.bind(this);
        this.DeleteFromCart = this.DeleteFromCart.bind(this);

        this.OnSubtractQuantities = this.OnSubtractQuantities.bind(this);
        this.OnAddQuantities = this.OnAddQuantities.bind(this);
        this.OnChangeQuantities = this.OnChangeQuantities.bind(this);

        this.AddAdress = this.AddAdress.bind(this);
        this.DeleteAdress = this.DeleteAdress.bind(this);

        this.UpdateAdress = this.UpdateAdress.bind(this);
        this.SaveAdress = this.SaveAdress.bind(this);
    }
    OrderProduct() {
        var list = this.state.listCartItem;
        var ok = 0
        list.forEach(element => {
            if (element.IsChecked) {
                ok = 1;
            }
        });
        if (ok == 0) {
            alert("Hãy chọn 1 sản phẩm !");
            return;
        }
        var result = window.confirm("Bạn có muốn đặt các sản phẩm dưới đây không ? ");
        if (!result) return;
        var listBillDetail = []
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        var newBIll = {
            UserName: userlogin.Name,
            DeliveryDetailID: this.state.currentAdress.ID,
            DiscountCode: this.state.currentDiscount.ID === undefined ? "" : this.state.currentDiscount.ID
        }
        axios({
            method: 'Post',
            url: 'https://localhost:44384/api/Bill',
            headers: {},
            data: newBIll
        }).then(function (response) {
            console.log(response.data);
            if (response.data.status = 1) {
                var billID = response.data.data[0].ID;
                console.log(newBIll);
                list.forEach(element => {
                    if (element.IsChecked) {
                        var item = {}
                        item.BillID = billID
                        item.ProductID = element.ProductID
                        item.Quantities = element.Quantities
                        listBillDetail.push(item)
                    }
                });
                console.log(listBillDetail)
                axios({
                    method: 'Post',
                    url: 'https://localhost:44384/api/BillDetail',
                    headers: {},
                    data: listBillDetail
                }).then(function (response) {
                    if (response.data.status == 1) {
                        alert("Đặt hàng thành công hãy chờ để nhận hàng!");
                    }
                });

            }
            else {
                alert("Có lỗi từ server không thêm thêm vào giỏ hàng.");
            }
        });

    }
    CalculateQuantities = () => {
        var totalproduct = 0
        var total = 0
        this.state.listCartItem.forEach(element => {
            if (element.IsChecked) {
                totalproduct += element.Quantities;
                total += element.TotalPrice;
            }
        });
        console.log(this.state.currentDiscount);
        var discount = this.state.currentDiscount.Value === undefined ? 0 : parseFloat(this.state.currentDiscount.Value)
        total = total - total * discount;
        console.log(total);
        this.setState({
            TotalPrice: total - total * discount
        })
        this.setState({
            TotalProduct: totalproduct
        })
    }
    OnChangeQuantities(event, id) {
        if (!event.target.value) return
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        axios({
            method: 'Put',
            url: 'https://localhost:44384/api/cart',
            headers: {},
            data: {
                UserName: userlogin.Name, // This is the body part
                ProductID: id, // This is the body part
                Quantities: parseInt(event.target.value)// This is the body part
            }
        }).then(function (response) {
            console.log(response.data);
        });
        axios.put()
        console.log("On change " + event.target.value + " " + id);
        this.state.listCartItem.forEach(element => {
            if (element.ProductID == id) {
                element.Quantities = parseInt(event.target.value);
                element.TotalPrice = element.Quantities * element.Price;
            }
        });
        this.setState({
            listCartItem: this.state.listCartItem
        })

        this.CalculateQuantities();
    }
    OnAddQuantities(id) {
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        var number = 1
        this.state.listCartItem.forEach(element => {
            if (element.ProductID == id) {
                number = element.Quantities + 1;
            }
        });
        axios({
            method: 'Put',
            url: 'https://localhost:44384/api/cart',
            headers: {},
            data: {
                UserName: userlogin.Name, // This is the body part
                ProductID: id, // This is the body part
                Quantities: number// This is the body part
            }
        }).then(function (response) {
            console.log(response.data);
        });
        console.log("Add quantities " + id);
        this.state.listCartItem.forEach(element => {
            if (element.ProductID == id) {
                element.Quantities = element.Quantities + 1;

                element.TotalPrice = element.Quantities * element.Price;
            }
        });
        this.setState({
            listCartItem: this.state.listCartItem
        })

        this.CalculateQuantities();
    }
    OnSubtractQuantities(id) {
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        var number = 1
        this.state.listCartItem.forEach(element => {
            if (element.ProductID == id) {
                number = element.Quantities - 1;
            }
        });
        axios({
            method: 'Put',
            url: 'https://localhost:44384/api/cart',
            headers: {},
            data: {
                UserName: userlogin.Name, // This is the body part
                ProductID: id, // This is the body part
                Quantities: number// This is the body part
            }
        }).then(function (response) {
            console.log(response.data);
        });
        console.log("Subtract quantities" + id);
        this.state.listCartItem.forEach(element => {
            if (element.ProductID == id) {

                element.Quantities = element.Quantities - 1;
                element.TotalPrice = element.Quantities * element.Price;
            }
        });
        this.setState({
            listCartItem: this.state.listCartItem
        })

        this.CalculateQuantities();
    }
    componentDidMount = () => {
        
        let self = this;
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        axios.get('https://localhost:44384/api/Delivery?userName=' + userlogin.Name)
            .then(function (response) {
                // handle success
                console.log("Adress :" + response);
                self.setState({
                    listAdress: response.data.data
                })
                self.setState({
                    currentAdress: response.data.data[0]
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
        axios.get('https://localhost:44384/api/discount')
            .then(function (response) {
                // handle success
                self.setState({
                    listDiscount: response.data.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
        axios.get('https://localhost:44384/api/cart?UserName=Luong')
            .then(function (response) {
                // handle success
                var data = response.data.data;
                data.forEach(element => {
                    element.IsCheck = false;
                });
                self.setState({
                    listCartItem: data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            });
    }
    CheckAllProduct(event) {
        var list = this.state.listCartItem
        list.forEach(element => {
            element.IsChecked = event.target.checked;
        });
        this.setState({
            cartItems: list
        })
        this.CalculateQuantities();
    }
    AddToCart(product) {
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        if (!userlogin.Name) {
            this.props.history.push('/Login')
            return;
        }
        var result = window.confirm("Thêm " + product.Quantities + " sản phẩm " + product.Products.Name + " vào giỏ hàng");
        if (!result) return;
        console.log('add to cart', product);
        var quantities = product.Quantities ? product.Quantities : 1;
        var cart = {
            ProductID: product.Products.ID,
            NameDisplay: product.Products.Name,
            Price: product.Products.Price,
            Category: product.Products.CategoryID,
            Quantities: quantities,
            ImagePath: product.Products.ImagePath
        }
        var q = cart.Quantities;
        var prID = cart.ProductID;
        var name = userlogin.Name;
        var self = this;
        axios({
            method: 'Post',
            url: 'https://localhost:44384/api/cart',
            headers: {},
            data: {
                UserName: name, // This is the body part
                ProductID: prID, // This is the body part
                Quantities: q// This is the body part
            }
        }).then(function (response) {
            console.log(response.data);
            if (response.data.status = 1) {
                console.log("duyet mang")
                var check = false
                self.state.listCartItem.forEach(element => {
                    if (element.ProductID == prID) {
                        element.Quantities = element.Quantities + q;
                        check = true;
                    }
                });
                console.log(self.state.listCartItem)
                if (!check) {

                    self.setState({
                        listCartItem: self.state.listCartItem.concat(cart)
                    });
                }
                else {
                    self.setState({
                        listCartItem: self.state.listCartItem
                    });
                }
            }
            else {
                alert("Có lỗi từ server không thêm thêm vào giỏ hàng.");
            }
        });
    }
    DeleteFromCart(ProductID, ProductName) {
        var result = window.confirm("Xóa sản phẩm " + ProductName + " khỏi giỏ hàng ?");
        const cookies = new Cookies();
        var userlogin = cookies.get('UserLogin');
        if (result) {
            axios.delete('https://localhost:44384/api/cart?userName=' + userlogin.Name + '&productID=' + ProductID, {
            }).then((response) => {
                console.log(response);
                if (response.data.status == 1) {
                    alert("Xóa thành công sản phẩm " + ProductName + " ra khỏi giỏ hàng ");
                    var arr = this.state.listCartItem.filter(function (item) {
                        return item.ProductID !== ProductID;
                    })
                    this.setState({
                        listCartItem: arr
                    })
                }
            });

        }
    }
    UpdateAdress(e,id){
        this.setState({ModalUpdateAdressIsOpen:true});
        e.preventDefault()
        this.state.listAdress.forEach(element => {
            if(element.ID==id){
                console.log("element "+ element.Name)
                this.setState({
                    adressToUpdate:element
                })
            }
        });
    }
    onCheck(id) {
        var list = this.state.listCartItem

        list.forEach(element => {
            if (element.ProductID == id) {
                element.IsChecked = !element.IsChecked;
            }
        });
        this.CalculateQuantities();
        this.setState({
            cartItems: list
        })
    }
    OpenModalAdress() {
        this.setState({
            ModalIsOpen: true
        })
    }
    CloseModalAdress() {
        this.setState({
            ModalIsOpen: false
        })
    }
    OpenModalUpdateAdress() {
        this.setState({
            ModalUpdateAdressIsOpen: true
        })
    }
    CloseModalUpdateAdress() {
        this.setState({
            ModalUpdateAdressIsOpen: false
        })
    }
    OpenModalDiscount() {
        this.setState({
            ModalDiscountIsOpen: true
        })
    }
    CloseModalDiscount() {
        this.setState({
            ModalDiscountIsOpen: false
        })
    }
    OpenModalAddAdress() {
        this.setState({
            ModalAddAdressIsOpen: true
        })
    }
    CloseModalAddAdress() {
        this.setState({
            ModalAddAdressIsOpen: false
        })
    }
    SetCurrentAdress(id) {
        this.state.listAdress.forEach(element => {
            if (element.ID == id) {
                this.setState({
                    currentAdress: element
                })
            }
        })
        this.setState({
            ModalIsOpen: false
        })
    }
    SetCurrentDiscount(id) {
        console.log(this.state.listDiscount)
        this.state.listDiscount.forEach(element => {
            if (element.ID == id) {
                this.setState({
                    currentDiscount: element
                },function (){
                    this.CalculateQuantities();});
            }
        })
        this.setState({
            ModalDiscountIsOpen: false
        })
    }
    AddAdress(Name,Adress,PhoneNumber){
        console.log(Name)
        console.log(Adress)
        console.log(PhoneNumber)
        var cookies=new Cookies();
        var userLogin=cookies.get("UserLogin");
        var self=this
        axios({
            method: 'Post',
            url: 'https://localhost:44384/api/Delivery',
            headers: {},
            data: {
                Name: Name, // This is the body part
                Adress: Adress, // This is the body part
                UserName: userLogin.Name,
                PhoneNumber:PhoneNumber// This is the body part
            }
        }).then(function (response) {
            console.log(response);
            if(response.data.status==1){
                var adress={
                    ID:response.data.data[0].ID,
                    Name:Name,
                    Adress:Adress,
                    UserName:userLogin.Name,
                    PhoneNumber:PhoneNumber
                    
                }
                console.log(adress)
                var list =self.state.listAdress;
                list.push(adress);
                self.setState({listAdress:list})
                console.log(list);
                self.setState({ModalAddAdressIsOpen:false})
            }
        }
        )
        
    }
    DeleteAdress(e,id){
        e.preventDefault()
        console.log("Delete "+id);
        var result =window.confirm("Bạn có chắc muốn xóa không ?");
        if(!result) return;
        var cookies=new Cookies();
        var userLogin=cookies.get("UserLogin");
         var self=this
        axios({
            method: 'Delete',
            url: 'https://localhost:44384/api/Delivery?userName='+userLogin.Name+'&id='+id,
            headers: {}
        }).then(function (response) {
            if(response.data.status==1){
                alert("Xóa thành công")
                var arr = self.state.listAdress.filter(function (item) {
                    return item.ID !== id;
                })
                self.setState({listAdress:arr})
            }
        })
    }
    SaveAdress(name,adress,phone){
        var ID=this.state.adressToUpdate.ID
        var Name=name==null?this.state.adressToUpdate.Name:name
        var Adress=adress==null?this.state.adressToUpdate.Adress:adress
        var Phone=phone==null?this.state.adressToUpdate.PhoneNumber:phone
        var obj={
            ID:ID,
            Name:Name,
            Adress:Adress,
            PhoneNumber:Phone
        }
        var self=this
        axios({
            method: 'put',
            url: 'https://localhost:44384/api/Delivery',
            headers: {},
            data:obj
        }).then(function (response) {
            console.log(response);
            if(response.data.status==1){
                self.state.listAdress.forEach(element => {
                    if(element.ID==obj.ID){
                        element.Name=obj.Name
                        element.Adress=obj.Adress
                        element.PhoneNumber=obj.PhoneNumber
                    }
                });
                self.setState({
                    listAdress:self.state.listAdress
                })
            }
        })
        console.log(obj);
        this.setState({ModalUpdateAdressIsOpen:false})
    }
    render() {
        return <AdressContext.Provider value={{
            listAdress: this.state.listAdress,
            listDiscount: this.state.listDiscount,
            listCartItem: this.state.listCartItem,
            currentAdress: this.state.currentAdress,
            currentDiscount: this.state.currentDiscount,
            TotalPrice: this.state.TotalPrice,
            ModalIsOpen: this.state.ModalIsOpen,
            ModalAddAdressIsOpen: this.state.ModalAddAdressIsOpen,
            ModalUpdateAdressIsOpen: this.state.ModalUpdateAdressIsOpen,
            ModalDiscountIsOpen: this.state.ModalDiscountIsOpen,
            TotalProduct: this.state.TotalProduct,
            AdressToUpdate: this.state.adressToUpdate,
            SetCurrentAdress: this.SetCurrentAdress,
            SetCurrentDiscount: this.SetCurrentDiscount,
            OpenModalAdress: this.OpenModalAdress,
            CloseModalAdress: this.CloseModalAdress,
            OpenModalDiscount: this.OpenModalDiscount,
            CloseModalDiscount: this.CloseModalDiscount,
            OpenModalAddAdress: this.OpenModalAddAdress,
            CloseModalAddAdress: this.CloseModalAddAdress,
            OpenModalUpdateAdress: this.OpenModalUpdateAdress,
            CloseModalUpdateAdress: this.CloseModalUpdateAdress,
            onCheck: this.onCheck,
            CheckAllProduct: this.CheckAllProduct,
            OrderProduct: this.OrderProduct,
            AddToCart: this.AddToCart,
            OnSubtractQuantities: this.OnSubtractQuantities,
            OnChangeQuantities: this.OnChangeQuantities,
            OnAddQuantities: this.OnAddQuantities,
            DeleteFromCart: this.DeleteFromCart,
            AddAdress:this.AddAdress,
            DeleteAdress:this.DeleteAdress,
            UpdateAdress:this.UpdateAdress,
            SaveAdress:this.SaveAdress,
        }}>
            {this.props.children}
        </AdressContext.Provider>;
    }
}
export default withRouter(AdressProvider);