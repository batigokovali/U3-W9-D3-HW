import './App.css';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from'./components/MyNav'
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import FantasyBooks from './books/fantasy.json'
import AllTheBooks from './components/AllTheBooks';



function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <MyJumbotron></MyJumbotron>
      <AllTheBooks FantasyBooks={FantasyBooks}></AllTheBooks>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
