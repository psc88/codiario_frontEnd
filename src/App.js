import './App.css';
import Navigation from './components/common/Navigation';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Inicio></Inicio>
            <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
