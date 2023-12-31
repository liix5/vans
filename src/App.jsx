import { useState } from 'react'
import {redirect, BrowserRouter, RouterProvider,createBrowserRouter, Route, Link, useParams, createRoutesFromElements } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/about'
import Dashboard , {loader as dashboardLoader} from './pages/Host/dashboard'
import Income from './pages/Host/income'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetails , {loader as hostVansDetailsLoader} from './pages/Host/HostVanDetails'
import Reviews from './pages/Host/reviews'
import Vans ,{loader as vansLoader}from  './pages/vans/vans'
import VanDetails, {loader as vanDetailsLoader} from './pages/vans/vanDetails'
import Layout from './components/layout'
import Host from '/src/components/HostLayout.jsx'
import Detailes from '/src/components/HostVanIndex'
import Pricing from '/src/components/HostVanPricing'
import Photos from '/src/components/HostVanPhotos'
import NotFound from './pages/notFound'
import Error from './components/Error'
import Login,{loginLoader, action as loginAction} from './pages/LoginForm'
import {requireAuth} from './utils'


const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout/>}>
    <Route index  element={<Home />} />
    <Route path="login" action={loginAction} loader={loginLoader} element={<Login />} />
    <Route path="about" element={<About />} />
    <Route path="vans" loader={vansLoader} element={<Vans />} errorElement={<Error/>} />
    <Route path="vans/:id" loader={vanDetailsLoader} element={<VanDetails />} errorElement={<Error/>} />

    <Route path="host" element={<Host />}
     loader={async ({request}) => await requireAuth(request)} >

    <Route index loader={dashboardLoader} element={<Dashboard/>}/>
    <Route path="income" element={<Income />}/>
    <Route path="reviews" element={<Reviews />}/>

    <Route path="vans"  element={<HostVans />} 
    loader ={hostVansLoader} errorElement={<Error/>}/>

    <Route path="vans/:id" element={<HostVanDetails />}
    loader={hostVansDetailsLoader} errorElement={<Error/>} >
      
    <Route index loader={async ({request}) => await requireAuth(request)} element={<Detailes/>}/>
    <Route path="Pricing" element={<Pricing />}
    loader={async ({request}) => await requireAuth(request)} />
    <Route path="Photos" element={<Photos />}
    loader={async ({request}) => await requireAuth(request)} />
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
