import logo from './logo.svg';
import './App.css'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = 'Maria'

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Frase frase="Bom dia!" />
      <Frase frase="Boa noite!" />
      <SayMyName nome="Daniel" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Daniel" idade={28} profissao="estudante" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
