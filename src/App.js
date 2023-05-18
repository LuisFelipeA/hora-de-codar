import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function sum(a, b){
  return a + b
}

const url = 'https://via.placeholder.com/150'

function App() {
  return (
    <div className="App">
      <h1>Soma{sum(3, 2)}</h1>
      <img src={url} alt="Minha Imagem"></img>
      <Frase />
      <HelloWorld />
      <Frase />
    </div>
  );
}

export default App;
