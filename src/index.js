import React from 'react';
import './Styles/index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Apropos from './Pages/Apropos'
import Footer from './Components/Footer'
import FicheLoc from './Pages/FicheLoc'
import LocationsIcons from './Components/Location';
import Error from './Components/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/" element={<LocationsIcons />} />
        <Route
          path="/logement/:id"
          element={
            <>
              <FicheLoc />
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
