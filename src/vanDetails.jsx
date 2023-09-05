import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"

function vanDetails(){
  const pram = useParams()
  const [van, setVan] = useState(null)
  
  
  
  useEffect(() => {
    fetch(`/api/vans/${pram.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
  }, [pram.id])

  return (
  <div className=" p-6">
    {van? (<>
    <Link to={'/vans'}><button className='pl-3 underline text-[#4D4D4D]'>Back to all vans</button></Link>
    <div>
      <img src={van.imageUrl} alt="" />
      <h1>{van.name}</h1>
      <p className=" font-bold">${van.price} <span className=' font-medium text-sm'>/ day</span></p>
      <p>{van.description}</p>
      <button className=" text-white rounded h-10 w-full bg-[#FF8C38]">Rent this van</button>
    </div> </>): <h2>Loading...</h2>}
  </div> )
}

export default vanDetails