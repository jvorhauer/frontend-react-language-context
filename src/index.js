import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LangContextProvider from "./context/LangContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
