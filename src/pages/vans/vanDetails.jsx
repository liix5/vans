import { useEffect, useState,Suspense } from "react"
import { Link,useLoaderData,defer,Await } from "react-router-dom"
import arrow from '/src/assets/arrow-1.svg'
import { getVan } from "../../api"
import Loading from '/src/components/loading.jsx'

export function loader({params}){
  //*  i can make getVans an async func and fetch the data here (i dont need to make the call in a seprate component( the api one ))
  
  return defer({vans: getVan(params.id)}) 
}


function vanDetails(){
  
  const vanPromise = useLoaderData()

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  const renderVan=(van)=>{
    return <>
    <Link className=" pb-6 w-fit flex items-center cursor-pointer"
     to={`..?${search}`}
     relative="path"
     > <img src={arrow} alt="" />
      <button className='pl-3 underline text-[#4D4D4D]'>{`Back to ${type} vans`}</button></Link>
      
    <div className="  md:flex-row font-inter gap-7  flex flex-col justify-center items-center">
      <img className=" lg:m-8 lg:w-5/12 md:w-1/2 rounded-md" src={van.imageUrl} alt="" />

      <div className="text-[#161616] md:gap-7 lg:gap-16  flex flex-col gap-4">
      <div className={ `capitalize flex justify-center items-center text-[#FFEAD0] w-20 h-8 rounded  ${van.type === 'simple'? 'bg-[#E17654]': van.type=== 'luxury'? 'bg-[#161616]': van.type ==='rugged'? 'bg-[#115E59]': 'bg-white'}`}>
          {van.type}
        </div>
      <h1 className=" font-bold text-2xl ">{van.name}</h1>
      <p className=" font-bold">${van.price} <span className=' font-medium text-sm'>/ day</span></p>
      <p className=" font-medium">{van.description}</p>
      <button className=" active:bg-[#ec7f31] text-white rounded h-11 w-full bg-[#FF8C38]">Rent this van</button>
      </div>
    </div> 
    </>  
  }
  
  return (
    <div className=" p-7 bg-[#FFF7ED] min-h-[84vh] ">
      <Suspense fallback={<Loading/>}>
        <Await resolve={vanPromise.vans}>
          {renderVan}
        </Await>
      </Suspense>
    </div> )
}

export default vanDetails