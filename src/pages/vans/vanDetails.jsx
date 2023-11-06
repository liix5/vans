import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import arrow from '/src/assets/arrow-1.svg'

function vanDetails(){
  const pram = useParams()
  const [van, setVan] = useState(null)
  
  
  
  useEffect(() => {
    console.log(pram)
    fetch(`/api/vans/${pram.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
  }, [pram.id])

  return (
  <div className=" p-7 bg-[#FFF7ED]">
    {van? (<>
     
    <Link className=" pb-6 w-fit flex items-center cursor-pointer"
     to={'..'}
     relative="path"
     > <img src={arrow} alt="" />
      <button className='pl-3 underline text-[#4D4D4D]'>Back to all vans</button></Link>
      

    <div className="  md:flex-row font-inter gap-7  flex flex-col justify-center items-center">
      <img className=" lg:m-8 lg:w-5/12 md:w-1/2 rounded-md" src={van.imageUrl} alt="" />

      <div className="text-[#161616] md:gap-7 lg:gap-16  flex flex-col gap-4">
      <div className={ `capitalize flex justify-center items-center text-[#FFEAD0] w-20 h-8 rounded  ${van.type === 'simple'? 'bg-[#E17654]': van.type=== 'luxury'? 'bg-[#161616]': van.type ==='rugged'? 'bg-[#115E59]': 'bg-white'}`}>
          {van.type}
        </div>
      <h1 className=" font-bold text-2xl ">{van.name}</h1>
      <p className=" font-bold">${van.price} <span className=' font-medium text-sm'>/ day</span></p>
      <p className=" font-medium">{van.description}</p>
      <button className=" text-white rounded h-11 w-full bg-[#FF8C38]">Rent this van</button>
      </div>
    </div> </>): <h2>Loading...</h2>}
  </div> )
}

export default vanDetails