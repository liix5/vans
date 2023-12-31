import { Link, NavLink } from "react-router-dom"
import vanlife from '/src/assets/vanlife.png'
import { useState } from "react"
import loginIcon from '/src/assets/user-circle.png'
import logOutIcon from '/src/assets/logOut.png'
export default function Header(){
  
  function fakeLogOut(){
    localStorage.removeItem("loggedin");
    
  }
  
  
  return(
  <nav className=' shadow-sm flex justify-between md:px-5 px-3 py-10 bg-[#FFF7ED] items-center'>
  <Link  to="."><img className=' w-32' src={vanlife} alt="logo"  /></Link>

  <div className=' text-[#4D4D4D] font-semibold flex gap-3 '>
  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="host">Host</NavLink>

  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="about">About</NavLink>

  <NavLink className={({isActive})=>isActive? 'link':'hover:underline'} to="vans">Vans</NavLink>


   <Link to="login">
    <img src={loginIcon} alt="log in" />
  </Link>
  <button onClick={fakeLogOut}>
  <img  src={logOutIcon} alt="log out" />
  </button>
 
  
  </div>
  
</nav>)
}