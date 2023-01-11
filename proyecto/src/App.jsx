import './App.css';
import { Route, Routes } from 'react-router-dom';

//IMPORTACION DE RUTAS
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage1 from './pages/Register1Page';
import RegisterPage2 from './pages/Register2Page';
import Pokedex from './pages/Pokedex';



function App() {
  return (

    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/pokedex' element={<Pokedex />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register1' element={<RegisterPage1 />} />
      <Route path='/register2' element={<RegisterPage2 />} />

    </Routes>


  );
}

export default App;
