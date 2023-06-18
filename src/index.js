import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import '../src/assets/sass/style.scss'
import  './i18n/i18n';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

