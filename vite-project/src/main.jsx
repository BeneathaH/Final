import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import * as React from "react";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

);