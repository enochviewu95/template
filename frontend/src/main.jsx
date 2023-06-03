//import React from 'react'
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { store } from "./store";
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <Provider store ={store}>
      <ToastContainer/>
      <App />
  </Provider>
  </CookiesProvider>
)
