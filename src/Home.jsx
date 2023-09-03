import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
function Home(){
  return <div className=" h-[75vh] font-inter m-0 p-0">
  <div 
   className=" bg-no-repeat h-[100%] flex justify-center items-center bg-cover back ">

    <div className=" flex flex-col justify-center items-center p-7 max-w-[752px]  gap-6">

    <p className=" text-left text-white font-extrabold text-3xl leading-10">You got the travel plans, we got the travel vans.</p>
    <p className="text-left text-white font-medium  leading-7">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
    <Link className="w-full" to="/vans"> <button className=" font-bold text-white w-full   bg-[#FF8C38] p-2 rounded ">Find your van</button></Link>
   
    </div>
   
  </div>


 
  
  </div>
}
export default Home