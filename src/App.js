import './App.css';
import Inicio from './Pages/Inicio';
import AcercaNosotros from './Pages/AcercaNosotros';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

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
        <Route exact path='/' element={<Inicio noticias={noticias}></Inicio>}></Route>
        <Route exact path='/nosotros' element={<AcercaNosotros></AcercaNosotros>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
