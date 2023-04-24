import logo from './logo.svg';
import './App.css'
import Condicional from './components/Condicional';

function App() {

  const nome = 'Daniel'

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
