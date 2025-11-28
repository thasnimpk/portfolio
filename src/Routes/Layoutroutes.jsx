import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from '../components/Contactus'
import Projects from '../components/Projects'


function Layoutroutes() {
  return (
  <div>
      
<BrowserRouter>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
</BrowserRouter>
    
</div>
  )
}

export default Layoutroutes