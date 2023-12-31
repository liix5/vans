import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import { Suspense, useEffect, useState } from "react"
import { Link, useLoaderData,defer,Await } from 'react-router-dom'
import Loading from '/src/components/loading.jsx'
import star from'/src/assets/star.svg'

export function loader({request}){
  //*  same as vans.jsx
  requireAuth(request)
  return defer({hostVans:getHostVans()}) 
}

export default function Dashboard(){

  const vanPromise = useLoaderData()
  
  const renderHostVan=(van)=>{
     let vans = van.map((van)=>{
   return(
    
        <div key={van.id}  className=" font-inter flex items-center px-7 md:flex-col justify-between rounded-md bg-white  md:h-96 h-28">
          <div className="flex items-center px-7 md:flex-col gap-5">
            <img className="  md:mt-6 md:w-64 rounded w-16" src={van.imageUrl} alt={van.name} />
            <div className=" md:items-center md:justify-center md:flex flex-col">
              <p className=" text-[#161616] font-semibold">{van.name}</p>
              <p className=" text-[#4D4D4D]">${van.price}/day</p>
            </div>
          </div>
          <Link className="py-3 text-[#161616] font-medium" to={`vans/${van.id}`}>View</Link>
        </div>
    
   )
  })
return vans}

return(
  <div className=" flex flex-col gap-8"> 
    <div>
      <div className=" flex justify-between h-52 px-7 py-9 bg-[#FFEAD0] font-inter text-[#161616] items-center">
        <div className=" flex flex-col gap-6">
          <p className=" font-bold text-4xl">Welcome!</p>
          <p className="text-[#4D4D4D]">Income last <span className=" font-bold underline">30 days</span></p>
          <p className=" font-extrabold text-5xl">$2,260</p>
        </div>
        <Link className="font-medium" to={'income'}>Details</Link>
      </div>
      <div className=" flex justify-between h-28 px-7 py-9 bg-[#FFDDB2] font-inter text-[#161616] items-center">
        <div className="flex gap-3">
          <p className=" font-bold text-2xl">Review score</p>
          <div className="flex items-center gap-1">
            <img src={star} alt="" />
            <p className=" font-bold text-xl">5.0<span className=" text-[#4D4D4D] font-medium">/5</span></p>
          </div>
        </div>
        <Link className="font-medium" to={'reviews'}>Details</Link>
      </div>
    </div>

      <div>
        <div className=" m-4 text-[#161616] font-semibold font-inter flex items-center justify-between">
          <p className=" font-bold text-2xl">Your listed vans</p>
          <Link className=" underline" to={'vans'}>View all</Link>
        </div>
      
        <div className=" mx-3 mb-9 justify-center flex gap-6 flex-col md:flex-row">
          <Suspense fallback={<Loading/>}>
            <Await resolve={vanPromise.hostVans}>
              {renderHostVan}
            </Await>
          </Suspense>
        </div>
    </div>
  </div>
  
)
}