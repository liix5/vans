import { Link } from "react-router-dom"

export default function notFound(){
  
  return(
    <div className=" items-center  flex-col flex justify-center h-[83vh] bg-[#FFF7ED]">
      <p className=" m-7 mb-12 font-bold font-inter text-4xl text-[#161616]">
      Sorry, the page you were looking for was not found.
      </p>
      <Link to={'/'}>
      <button  className="  rounded font-inter font-bold h-14 w-[90vw]  text-white bg-[#161616]">
      Return to home
      </button>
      </Link>
      
    </div>
  )
}