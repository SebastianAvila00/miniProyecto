import './App.css';
import { Route, Routes } from 'react-router-dom';

//IMPORTACION DE RUTAS
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';

//LOGIN Y REGISTRO CON FORMIK
import LoginPage from './pages/LoginPage';
import RegisterPage1 from './pages/Register1Page';
import RegisterPage2 from './pages/Register2Page';
import RegisterPage3 from './pages/Register3Page';

//LOGIN Y REGISTRO CON FIREBASE
import BisLoginPage from './pages/BisLogin';
import BisRegisterPage2 from "./pages/BisRegister2"

import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectRoute';


function App() {
  return (

    <AuthProvider>
      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/pokedex' element={

          // RUTA PRIVADA
          <ProtectedRoute>
            <Pokedex />
          </ProtectedRoute>
        } />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/loginBis' element={<BisLoginPage />} />

        <Route path='/register1' element={<RegisterPage1 />} />

        <Route path='/register2' element={<RegisterPage2 />} />
        <Route path='/register2Bis' element={<BisRegisterPage2 />} />

        <Route path='/register3' element={

          // RUTA PRIVADA
          <ProtectedRoute>
            <RegisterPage3 />
          </ProtectedRoute>
        } />

      </Routes>
    </AuthProvider>


  );
}

export default App;
