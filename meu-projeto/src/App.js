import logo from './logo.svg';
import './App.css'
import Evento from './components/evento/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero='1'/>
      <Form />
    </div>
  );
}

export default App;
