import logo from './logo.svg';
import './App.css'
import {useState} from 'react'
import SeuNome from './components/setNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>   
    </div>
  );
}

export default App;
