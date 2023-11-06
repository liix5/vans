import { useOutletContext } from "react-router-dom"

export default function Detailes(){
 const van = useOutletContext()
 console.log(van)
  return(
    <div className=" text-[#161616] font-inter gap-5 flex flex-col">
      <p><span className=" font-bold">Name:</span> {van.name}</p>
      <p><span className=" font-bold">Category:</span> {van.category}</p>
      <p><span className=" font-bold">Description:</span> {van.description}</p>
      <p><span className=" font-bold">Visibility:</span> Public</p>
     
    </div>
  )
}