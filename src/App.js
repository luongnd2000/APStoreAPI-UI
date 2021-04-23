import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Header from './Component/Client/Header';
import MainContent from './Component/Client/MainContent';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <MainContent></MainContent>
    </div>
  );
}

export default App;
