import { useEffect, useState,Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import arrow from '/src/assets/arrow-1.svg'
import { getVan } from "../../api"
import { requireAuth } from "../../utils"
import Loading from '/src/components/loading.jsx'

export function loader({params, request}){
  requireAuth(request)
  return defer({vans: getVan(params.id)}) 
}

export default function VansDetails(){
  
  const currVanPromise= useLoaderData()
  
  const renderVanDtails=(currVan)=>{
    return <> 
    <Link className="pl-6 pb-6 w-fit flex items-center cursor-pointer"
      to={'..'}
     relative="path"> 
      <img src={arrow} alt="" />
      <button className='pl-3 underline text-[#4D4D4D]'>Back to all vans</button>
   </Link>

    <div className=" h-full flex justify-center">
    <div className=" bg-white mb-8 rounded-md w-11/12 flex flex-col  p-5 gap-8 ">

    <div className=" flex items-center gap-6">
      <img className="  rounded w-44" src={currVan.imageUrl} alt={currVan.name} />
      <div>
        <div className={ `capitalize flex justify-center items-center text-[#FFEAD0] w-20 h-8 rounded -translate-y-3 ${currVan.type === 'simple'? 'bg-[#E17654]': currVan.type=== 'luxury'? 'bg-[#161616]': currVan.type ==='rugged'? 'bg-[#115E59]': 'bg-white'}`}>
          {currVan.type}
        </div>
        <p className=" text-2xl text-[#161616] font-bold">{currVan.name}</p>
        <p className=" text-[#4D4D4D]">${currVan.price}/day</p>
      </div>
    </div>

    <div className=" flex gap-5 text-[#4D4D4D]">
        <NavLink
         to={'.'} 
          end
          className={({isActive})=>isActive? 'link':'hover:underline'}>Details</NavLink>
        <NavLink to={'Pricing'}  className={({isActive})=>isActive? 'link':'hover:underline'}>Pricing</NavLink>
        <NavLink to={'Photos'}  className={({isActive})=>isActive? 'link':'hover:underline'}>Photos</NavLink>
    </div>
   
    <Outlet context={currVan}/>
  </div>
  </div>
  </>
  }

  
  return(
      <div className=" bg-[#FFF7ED]  font-inter  ">
        <Suspense fallback={<Loading/>}>
          <Await resolve={currVanPromise.vans}>
            {renderVanDtails}
          </Await>
        </Suspense>
      </div>
  )
  }

  