import './App.css';
import { Route, Routes } from 'react-router-dom';

//IMPORTACION DE RUTAS
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage1 from './pages/Register1Page';
import RegisterPage2 from './pages/Register2Page';
import RegisterPage3 from './pages/Register3Page';
import Pokedex from './pages/Pokedex';
import Prueba from './components/Prueba';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectRoute';



function App() {
  return (

    <AuthProvider>
      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/pokedex' element={

          <ProtectedRoute>
            <Pokedex />
          </ProtectedRoute>
        }/>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/register1' element={<RegisterPage1 />} />

        <Route path='/register2' element={<RegisterPage2 />} />

        <Route path='/register3' element={<RegisterPage3 />} />

        <Route path='/register4' element={<Prueba />} />


      </Routes>
    </AuthProvider>


  );
}

export default App;
