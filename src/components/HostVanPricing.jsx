import { useOutletContext } from "react-router-dom"

export default function Pricing(){
  const van = useOutletContext()
  return(
    <p className="p-8 text-[#4D4D4D] font-medium font-inter"><span className="text-[#161616]  text-2xl">${van.price}.00</span>/day</p>
  )
}