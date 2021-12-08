import './App.css';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
