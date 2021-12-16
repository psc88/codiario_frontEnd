import './App.css';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './Pages/Contacto';
import Footer from './Common/Footer';
import Admin from './Pages/Admin';
import AgregarNoticia from './AdminNoticias/AgregarNoticia';
import EditarNoticia from './AdminNoticias/EditarNoticia';

function App() {

  const [noticias, setNoticias] = useState ([]);
  const URL = process.env.REACT_APP_API_URL;
  
  useEffect(()=>{
    consultarAPI();
  },[]);

  const consultarAPI = async()=>{
    try{
      
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
    
      setNoticias(datos);
    }catch(error){
      console.log(error);
    }
  }

  return (
    
    <Router>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='/admin' element={<Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>}></Route>
        <Route exact path='/admin/nuevaNoticia' element={<AgregarNoticia consultarAPI={consultarAPI}></AgregarNoticia>}></Route>
        <Route exact path='/admin/nuevaNoticia/editar/:id' element={<EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
