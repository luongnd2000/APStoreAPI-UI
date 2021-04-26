import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Shop from './Component/Client/Shop/Shop';
import UserLogin from './Component/Client/Login/UserLogin';
import Admin from './Component/Admin/MainContent/Admin'
export default function App () {
    return (
      <Router>
        <Switch>
          <Route  path="/Shop">
            <Shop />
          </Route>
          <Route  path="/Login">
            <UserLogin />
          </Route>
          <Route  path="/Admin">
            <Admin />
          </Route>
          <Route path="/topics">
            <UserLogin />
          </Route>
        </Switch>
    </Router>
    );
  // ShowRoutes = (routes) => {
  //   var result = null;

  //   result = routes.map((route, index) => {
  //     return (
  //       <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
  //     );
  //   })
  //   return result;
  // }
}
