import './App.css';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Contacto from './Pages/Contacto';
import Footer from './Common/Footer';
import Error404 from './Pages/Error404'

function App() {
  const [noticias, setNoticias] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

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
      <Routes>
        <Route exact path='/' element={<Inicio noticias={noticias} consultarApi={consultarApi}></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
        <Route exact path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route exact path='*' element={<Error404/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;