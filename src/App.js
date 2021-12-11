import './App.css';
import NavbarUsuario from './components/common/NavbarUsuario';
import Login from './Pages/Login';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';




function App() {
   
    return (
    <Router>
      <NavbarUsuario></NavbarUsuario>
      <Login></Login>
        <Routes>
              <Route exact path='/' element={<Inicio></Inicio>}></Route>
              <Route exact path='/login' element={<Login></Login>}></Route>
              <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
