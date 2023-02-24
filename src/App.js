import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './component/Header.js';
import Home from './component/Home.js'; 
import Footer from './component/Footer.js';
import Contact from './component/Contact.js'; 
import Services from './component/Services.js';
import "./style/App.scss";
import "./style/mQ.scss";
function App() { 
  return (
    <Router>
      <Header/>
  <Routes> 
    <Route path="/" element={<Home/>}/> 
    <Route path="/contact" element={<Contact/>}/> 
    <Route path="/services" element={<Services/>}/> 
 </Routes>
    <Footer/>
 </Router>

  );
}

export default App;
