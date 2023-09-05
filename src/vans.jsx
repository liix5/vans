import { useEffect, useState } from 'react'
import './server'
import { Link } from 'react-router-dom'

function Vans(){
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVansData(data.vans))
  }, [])

  

  const vanElemnt = vansData.map((van)=>{
      return  <Link className="w-full" to={`/vans/${van.id}`}>
        <div className=' cursor-pointer h-72 w-48' key={van.id}>
      <img className=' rounded w-52' src={van.imageUrl
      } alt={van.name} />
      <div className=' flex flex-col'>
        <div className=' flex justify-between font-semibold'>
          <p>{van.name}</p>
          <p>${van.price} <br></br> <span className=' font-medium text-sm'>/ day</span></p>
        </div>
        <div className={ `capitalize flex justify-center items-center text-[#FFEAD0] w-20 h-8 rounded -translate-y-3 ${van.type === 'simple'? 'bg-[#E17654]': van.type=== 'luxury'? 'bg-[#161616]': van.type ==='rugged'? 'bg-[#115E59]': 'bg-white'}`}>
          {van.type}
        </div>
      </div>
    </div>
         </Link>
       
    
  })

  return <div className=' font-inter'>
    <div className=' flex flex-col gap-4 p-5'>
     <h1 className=' text-3xl font-bold'>Explore our van options</h1>
     <div className=' flex gap-4'>
      <button className=' flex justify-center items-center bg-[#FFEAD0] text-[#4D4D4D] w-28 rounded-md  font-medium h-9'>Simple</button>
      <button className=' flex justify-center items-center bg-[#FFEAD0] text-[#4D4D4D] w-28 rounded-md  font-medium h-9'>Luxury</button>
      <button className=' flex justify-center items-center bg-[#FFEAD0] text-[#4D4D4D] w-28 rounded-md  font-medium h-9'>Rugged</button>

      <button className='pl-3 underline text-[#4D4D4D]'>Clear filters</button>
     </div>
    </div>
    <div className=' grid gap-8 grid-cols-2  md:grid-cols-4 lg:grid-cols-5 py-6  px-9'>
      {vanElemnt}
    </div>
    
  </div>
}

export default Vans