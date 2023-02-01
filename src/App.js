import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from'./components/MyNav'
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <MyJumbotron></MyJumbotron>
      <AllTheBooks></AllTheBooks>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
