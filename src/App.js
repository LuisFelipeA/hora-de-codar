import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function sum(a, b){
  return a + b
}

const url = 'https://via.placeholder.com/150'

function App() {
  const nome = 'Luis Felipe'
  return (
    <div className="App">
      <h1>Soma{sum(3, 2)}</h1>
      <img src={url} alt="Minha Imagem"></img>
      <HelloWorld />
      <Frase />
      <SayMayName nome="Luis"/>
      <SayMayName nome="Felipe"/>
      <SayMayName nome={nome}/>
      <Pessoa nome="Maria" idade="22" profissao="Programador(a)" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
