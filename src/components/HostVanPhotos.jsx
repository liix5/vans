import { useOutletContext } from "react-router-dom"

export default function Photos(){
  
  const van = useOutletContext()
  return(

      <img className=" w-32 rounded" src={van.imageUrl} alt="" />
    
  )
}