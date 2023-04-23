import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName'
import Frase from './components/Frase';


function App() {

  const nome = 'Daniel'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade="18" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
