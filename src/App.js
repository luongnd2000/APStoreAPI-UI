import MainContent from './Component/Client/Shop/Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLogin from "./Component/Client/Login/UserLogin";
import NotFound from  './Component/NotFound';
import routes from './Route';
import { render } from '@testing-library/react';
import { Component } from 'react';
class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            {this.ShowRoutes(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  ShowRoutes=(routes)=>{
    var result=null;
    
    result=routes.map((route,index)=>{
      return(
        <Route key ={index} path={route.path} exact={route.exact} component={route.main}></Route>
      );
    })
    return result;
  }
}

export default App;
