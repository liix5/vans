import { useRouteError } from "react-router-dom"


export default function error(){

const error =useRouteError()
console.log(error)
  return <div className="h-[83vh] p-8 bg-[#FFF7ED]">
    <h1 className=" font-inter font-bold  text-2xl  text-orange-950">Error: {error.message} </h1>
    <pre>{error.status} - {error.statusText}</pre>
  
  </div>
}