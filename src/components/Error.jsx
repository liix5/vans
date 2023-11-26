import { useRouteError } from "react-router-dom"


export default function error(){

const error =useRouteError()
console.log(error)
  return <div className="h-[76vh] bg-[#FFF7ED]">
    <h1 className=" font-inter  text-2xl p-8 text-orange-950">Error: {error.message} </h1>
  </div>
}