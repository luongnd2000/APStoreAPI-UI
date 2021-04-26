import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './Route';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
  ShowRoutes = (routes) => {
    var result = null;

    result = routes.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact} component={() => route.main(this.props)}></Route>
      );
    })
    return result;
  }
}

export default App;
