import { Suspense, useEffect, useState } from "react"
import { Link, useLoaderData,defer,Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import Loading from '/src/components/loading.jsx'

export function loader({request}){
  //*  same as vans.jsx
  requireAuth(request)
  return defer({hostVans:getHostVans()}) 
}




export default function Vans(){
  const vanPromise = useLoaderData()
  
  const renderHostVan=(van)=>{
     let vans = van.map((van)=>{
   return(
    <Link key={van.id} to={van.id}>
        <div  className=" hover:shadow-lg flex items-center px-7 md:flex-col rounded-md bg-white gap-5 md:h-96 h-28">
          <img className="  md:mt-6 md:w-64 rounded w-16" src={van.imageUrl} alt={van.name} />
          <div className=" md:items-center md:justify-center md:flex flex-col">
            <p className=" text-[#161616] font-semibold">{van.name}</p>
            <p className=" text-[#4D4D4D]">${van.price}/day</p>
          </div>

        </div>
    </Link>
   )
  })
return vans}
  return(
    <div className="flex  flex-col gap-7 md:h-[80vh] px-6  bg-[#FFF7ED] font-inter"> 
      
      <h1 className=" tetx-[#161616] font-bold text-3xl">Your listed vans</h1>
      
      <div className=" mb-9 justify-center flex gap-6 flex-col md:flex-row">
        <Suspense fallback={<Loading/>}>
          <Await resolve={vanPromise.hostVans}>
            {renderHostVan}
          </Await>
        </Suspense>
      </div>
      
      
    </div>
    
  )
  }