import './App.css';
import NavbarAdmin from './common/NavbarAdmin';
import NavbarInicio from './common/NavbarInicio';
import InicioUsuario from './Pages/InicioUsuario'
import Inicio from './PaginaSinLogueo/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Contacto from './Pages/Contacto';
import Footer from './common/Footer';
import Admin from './Pages/Admin';
import AgregarNoticia from './AdminNoticias/AgregarNoticia';
import EditarNoticia from './AdminNoticias/EditarNoticia';
import Error404 from './Pages/Error404'
import Detalle from './Pages/Detalle';
import Categoria from './Pages/Categoria';
import Login from './Pages/Login';
import LoginRegistro from './Pages/LoginRegistro';
import NavbarUsuario from './common/NavbarUsuario';

function App() {
  const [noticias, setNoticias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [noticiaFiltrada, setNoticiaFiltrada] = useState([]);
  const [tituloFiltrado, setTituloFiltrado] = useState("");
  
  const URL = process.env.REACT_APP_API_URL + '/noticias';
  const URLusuarios = process.env.REACT_APP_API_URL + '/usuarios';

  useEffect(() => {
    consultarAPI();
    consultarAPIUIsuarios();
  },[]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      setNoticias(datos);
    } catch (error) {
      console.log(error);
    }
  }

  const consultarAPIUIsuarios = async () => {
    try {
      const respuesta = await fetch(URLusuarios);
      const datos = await respuesta.json();
      setUsuarios(datos);
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleNoticiaFiltrada = (noticiaConFiltro, tituloFiltrado) => {
    setNoticiaFiltrada(noticiaConFiltro);
    setTituloFiltrado(tituloFiltrado);
    consultarAPI();
  }

  return (
    <>
    <Router>
      <NavbarInicio></NavbarInicio>
      <Routes>
        <Route exact path='/' element={<Inicio consultarAPI={consultarAPI} noticias={noticias} handleNoticiaFiltrada={handleNoticiaFiltrada}></Inicio>}></Route>
        <Route exact path='/usuario' element={<InicioUsuario consultarAPI={consultarAPI} noticias={noticias} handleNoticiaFiltrada={handleNoticiaFiltrada}></InicioUsuario>}></Route>
        <Route exact path='/categoria' element={<Categoria tituloFiltrado={tituloFiltrado} noticiaFiltrada={noticiaFiltrada} ></Categoria>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='/login' element={<Login usuarios={usuarios}></Login>}></Route>
        <Route exact path='/loginRegistro' element={<LoginRegistro></LoginRegistro>}></Route>
        <Route exact path='/admin' element={<Admin noticias={noticias} consultarAPI={consultarAPI}></Admin>}></Route>
        <Route exact path='/admin/nuevaNoticia' element={<AgregarNoticia consultarAPI={consultarAPI}></AgregarNoticia>}></Route>
        <Route exact path='/admin/editarNoticia/:id' element={<EditarNoticia consultarAPI={consultarAPI}></EditarNoticia>}></Route>
        <Route exacth path='/nota/:id' element={<Detalle noticias={noticias}/>}></Route>
        <Route exact path='*' element={<Error404 />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
    
  );
}

export default App;
