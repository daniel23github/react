import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/Navbar';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
