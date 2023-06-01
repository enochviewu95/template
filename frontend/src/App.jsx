//import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'
import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />} />
         </Routes>
  {/* Additional routes */}
       </BrowserRouter>
    
  )
}

export default App
