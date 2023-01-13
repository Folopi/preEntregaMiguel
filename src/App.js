import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Count/Count';
// import Boton from './components/Boton';
function App() {
  return (
    <div className="App">
      <NavBar  producto="guitarra" />
      <ItemListContainer greeting="¡Bienvenidos a nuestro e commerce de instrumentos muscicales!"/>
     <ItemCount/>
      {/* <Boton boton="comprar"/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;