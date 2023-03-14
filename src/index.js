import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"
import Calculator from './CaculatorTemperature/Calculator';
import TemperatureInput from './CaculatorTemperature/TemperatureInput';
import NameForm from './Formularios/NameForm';
import NumberList from './Listas/NumberList';
import LoginControl from './Login/LoginControl';
import reportWebVitals from './reportWebVitals';
import Page from './Warning/Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemperatureInput scale="c"/>
  </React.StrictMode>
);

reportWebVitals();
