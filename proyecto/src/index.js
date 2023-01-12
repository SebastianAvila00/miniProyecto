import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//ROUTER
import { BrowserRouter } from 'react-router-dom';
//STYLES CALENDAR
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import esLocale from "date-fns/locale/es"
//FIREBASE
import { FirebaseAppProvider } from "reactfire"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>

      <App />

    </MuiPickersUtilsProvider>
  </BrowserRouter>
);


