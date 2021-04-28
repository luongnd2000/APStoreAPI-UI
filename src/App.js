import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Shop from './Component/Client/Shop/Shop';
import UserLogin from './Component/Client/Login/UserLogin';
import Admin from './Component/Admin/MainContent/Admin'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="/Shop">
          <Shop />
        </Route>
        <Route path="/Login">
          <UserLogin />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/topics">
          <UserLogin />
        </Route>
      </Switch>
    </Router>
  )
}
