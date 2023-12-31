import { Link, Outlet,NavLink } from "react-router-dom"

 

export default function Host(){
  return(<div className=" bg-[#FFF7ED] min-h-[83vh] ">
    <div className="  font-inter text-[#4D4D4D]  flex gap-7 py-8 px-6">

      <NavLink
       to={'.'}
        className={({isActive})=>isActive? 'link':'hover:underline'}
        end
        >Dashboard</NavLink>

      <NavLink to={'income'} className={({isActive})=>isActive? 'link':'hover:underline'}>Income</NavLink>

      <NavLink to={'vans'} className={({isActive})=>isActive? 'link':'hover:underline'}>Vans</NavLink>

      <NavLink to={'reviews'} className={({isActive})=>isActive? 'link':'hover:underline'}>Reviews</NavLink>

    </div>

    <Outlet/>
    </div>

  )
}