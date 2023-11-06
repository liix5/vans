import { Link, NavLink } from "react-router-dom"
import vanlife from '/src/assets/vanlife.png'
import { useState } from "react"

export default function Header(){
  
  
 

  return(
  <nav className=' shadow-sm flex justify-between px-5 py-10 bg-[#FFF7ED] items-center'>
  <Link  to="."><img className=' w-32' src={vanlife} alt="logo"  /></Link>

  <div className=' text-[#4D4D4D] font-semibold flex gap-3 '>
  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="host">Host</NavLink>

  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="about">About</NavLink>

  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="vans">Vans</NavLink>
  </div>
  
</nav>)
}