import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function sum(a, b){
  return a + b
}

const url = 'https://via.placeholder.com/150'

function App() {
  const nome = 'Luis Felipe'
  return (
    <div className="App">
      <h1>Ola</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

export default App;
