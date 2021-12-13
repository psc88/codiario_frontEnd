import './App.css';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './Pages/Contacto';
import Footer from './Common/Footer';
import Error404 from './Pages/Error404'


function App() {

  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
