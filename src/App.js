import Header from './Component/Client/Home/Header';
import MainContent from './Component/Client/Home/MainContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./Component/Client/Login/Login";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={MainContent}></Route>
        <Route path="/Login" component={Login}></Route>
        {/* <Header></Header>
        <MainContent></MainContent> */}
      </div>
    </Router>
  );
}

export default App;
