import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans(){

  const [van, setVan] = useState([])
  
  useEffect(() => {
    fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVan(data.vans))
  }, [])

  console.log(van)


  let vans = van.map((van)=>{
   return(
    
    <Link to={van.id}>
        <div className=" hover:shadow-lg flex items-center px-7 md:flex-col rounded-md bg-white gap-5 md:h-96 h-28">
          <img className="  md:mt-6 md:w-64 rounded w-16" src={van.imageUrl} alt={van.name} />
          <div className=" md:items-center md:justify-center md:flex flex-col">
            <p className=" text-[#161616] font-semibold">{van.name}</p>
            <p className=" text-[#4D4D4D]">${van.price}/day</p>
          </div>

        </div>
    </Link>
   )
  })
  return(
    <div className="flex flex-col gap-7  px-6 h-full bg-[#FFF7ED] font-inter"> 
      
      <h1 className=" tetx-[#161616] font-bold text-3xl">Your listed vans</h1>
      { van.length>0?
      <div className=" mb-9 flex gap-6 flex-col md:flex-row">
      {vans}
      </div>:
        <h1>Loading...</h1>
      }
      
      
    </div>
    
  )
  }