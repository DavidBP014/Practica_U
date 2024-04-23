import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // La ruta debe ser relativa al lugar donde tienes tu componente App
import reportWebVitals from './reportWebVitals'; // Esta es una función opcional que se crea con Create React App

ReactDOM.render(
  <React.StrictMode>
    {/* <MyProvider> Esto sería si estás usando un contexto o proveedor de estado */}
      <App />
    {/* </MyProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
