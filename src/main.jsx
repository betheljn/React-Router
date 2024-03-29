import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar.jsx';
import MainSection from './Components/MainSection.jsx';
import Footer from './Components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <NavBar />
      <MainSection />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
