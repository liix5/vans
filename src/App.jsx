import { useState } from 'react'
import { BrowserRouter, RouterProvider,createBrowserRouter, Route, Link, useParams, createRoutesFromElements } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/about'
import Dashboard from './pages/Host/dashboard'
import Income from './pages/Host/income'
import HostVans from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import Reviews from './pages/Host/reviews'
import Vans ,{loader as vansLoader}from  './pages/vans/vans'
import VanDetails from './pages/vans/vanDetails'
import Layout from './components/layout'
import Host from '/src/components/HostLayout.jsx'
import Detailes from '/src/components/HostVanIndex'
import Pricing from '/src/components/HostVanPricing'
import Photos from '/src/components/HostVanPhotos'
import NotFound from './pages/notFound'
import Error from './components/Error'


const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout/>}>
    <Route index  element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" loader={vansLoader} element={<Vans />} errorElement={<Error/>} />
    <Route path="vans/:id" element={<VanDetails />} />

    <Route path="host" element={<Host />} >
    <Route index element={<Dashboard/>}/>
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans"  element={<HostVans />}  />

    <Route path="vans/:id" element={<HostVanDetails />} >
    <Route index element={<Detailes/>}/>
    <Route path="Pricing" element={<Pricing />} />
    <Route path="Photos" element={<Photos />} />
    </Route>

   
    </Route>

    <Route path='*' element={<NotFound/>}/>
    </Route>
))

function App() {
  
  return (
    
       <RouterProvider router={router}/>
   
  )
}

export default App
