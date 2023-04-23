import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName'


function App() {

  const nome = 'Daniel'

  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <Pessoa nome={nome} idade="18" profissao="Estudante" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
