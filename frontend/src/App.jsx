//import { useState } from 'react'
import Home from './pages/Home/Home';
import Prescription_form from './pages/Prescription_form/Prescription_form';
import Appointment from './pages/Appointment/Appointment';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
function App() {

  return (
    
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="appointment" element={<Appointment />} />
         <Route path="prescription_form" element={<Prescription_form />} />
         </Routes>
  {/* Additional routes */}
       </BrowserRouter>
    
  )
}

export default App
