import './App.css';
import NavbarAdmin from '../src/Components/common/NavbarAdmin';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {useState, useEffect} from 'react';
import Contacto from './Pages/Contacto';
import Footer from '../src/Components/common/Footer';
import Error404 from './Pages/Error404'
import Detalle from './Pages/Detalle';

function App() {
   const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL + "/noticias";


  useEffect(() => {
    consultarApi();
  },[]);

  const consultarApi = async() => {
    try{
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setNoticias(datos);
    } catch(error){
      console.log(error);
    }
  }

  return (
    <Router>
      <NavbarAdmin></NavbarAdmin>
      <Routes>
        <Route exact path='/' element={<Inicio noticias={noticias}></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
        <Route exacth path='/nota/:id' element={<Detalle noticias={noticias}/>}></Route>
      </Routes>
        <Footer></Footer>
    </Router>
  );
}

export default App;
