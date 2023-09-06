import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from "react-router-dom"
import vanlife from './assets/vanlife.png'
import Home from './Home'
import About from './about'
import Vans from './vans'
import VanDetails from './vanDetails'






function App() {
  
 
  const [selctedRoute, setSelctedRoute]= useState('home')

  return (
    <BrowserRouter>
    
    
     <nav className=' shadow-sm flex justify-between px-5 py-10 bg-[#FFF7ED] items-center'>
      <Link onClick={()=> setSelctedRoute('home')} to="/"><img className=' w-32' src={vanlife} alt="logo"  /></Link>

      <div className=' text-[#4D4D4D] font-semibold flex gap-3 '>
      <Link onClick={()=> setSelctedRoute('about')} className={`${selctedRoute==='about'&& 'underline decoration-solid text-[#161616]'}`} to="/about">About</Link>

      <Link className={`${selctedRoute==='vans'&& 'underline decoration-solid text-[#161616]'}`} onClick={()=> setSelctedRoute('vans')} to="/vans">Vans</Link>
      </div>
      
    </nav>
    
    <Routes>
      
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/vans" element={<Vans />} />
    <Route path="/vans/:id" element={<VanDetails />} />
    </Routes>
    
    {
    // footer
    }

    <div className=" bottom-0 absloute  h-20 bg-[#252525] flex justify-center items-center text-[#AAAAAA] font-medium text-sm">
    <p>
    Ⓒ 2022 #VANLIFE by Layan
    </p>

  </div>
  
  </BrowserRouter>
  
  )
}

export default App
