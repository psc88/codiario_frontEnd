import './App.css';
import NavbarAdmin from './Components/Common/NavbarAdmin';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Contacto from './Pages/Contacto';
import Footer from './Components/Common/Footer';
import Admin from './Pages/Admin';
import AgregarNoticia from './AdminNoticias/AgregarNoticia';
import EditarNoticia from './AdminNoticias/EditarNoticia';
import Error404 from './Pages/Error404'
import Detalle from './Pages/Detalle';

function App() {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL + "/noticias";


console.log(URL)
  useEffect(() => {
    consultarAPI();
  },[]);

  const consultarAPI = async() => {
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
        <Route exact path='/' element={<Inicio consultarAPI={consultarAPI} noticias={noticias}></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='/admin' element={<Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>}></Route>
        <Route exact path='/admin/nuevaNoticia' element={<AgregarNoticia consultarAPI={consultarAPI}></AgregarNoticia>}></Route>
        <Route exact path='/admin/editarNoticia/:id' element={<EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
        <Route exacth path='/nota/:id' element={<Detalle noticias={noticias}/>}></Route>
      </Routes>
        <Footer></Footer>
    </Router>
  );
}

export default App;
