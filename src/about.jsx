import photo from './assets/about-img.png'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function About() {
  return <div className=' flex flex-col justify-center items-center'>
    <img className=' max-h-[70vh] w-screen max-w-4xl rounded-sm`  object-cover' src={photo} alt="" />

    <div className=' flex flex-col justify-center max-w-4xl m-8 font-inter text-[#161616] gap-6'>
    <h2 className=' leading-9 font-bold text-3xl'>Don’t squeeze in a sedan when you could relax in a van.</h2>
    <div>
    <p className=' font-medium leading-6'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
    (Hitch costs extra 😉)</p>
    <p className=' pt-3 font-medium leading-6'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    </div>
    <div className='p-9  text-[#161616] font-bold h-48 bg-[#FFCC8D] rounded-md text-xl max-w-2xl'>
      <p>Your destination is waiting.</p>
      <p className=' pt-1'>Your van is ready.</p>

      <Link className="w-full" to="/vans">
        <button className=' text-white bg-[#161616] text-lg px-5 mt-6 py-3 rounded-lg'>Explore our vans</button>
      </Link>

    </div>
    </div>

  </div>
}
export default About