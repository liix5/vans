import { Suspense, useEffect, useState } from 'react'
import '/src/server.jsx'
import { Link, useLoaderData, useParams, useSearchParams, defer, Await } from 'react-router-dom'
import { getVans } from '../../api'
import Loading from '/src/components/loading.jsx'


// ? why is using a loaderf is better than doing it the normal way by useEffect? 
//*  Don't need to worry about handling loading state in the component
//* Don't need to have lengthy/confusing useEffect code in ourcomponent
//* Don't need to handle error state in the component

export function loader(){
  //*  i can make this an async func and fetch the data here (i dont need to make the call as a seprate component)
  
  return defer({vans: getVans()})
}

function Vans(){
 
  const [searchParam, setSearchParam]=useSearchParams()
  const vansPromise = useLoaderData()



  const typeFilter = searchParam.get('type')


  // * ما نحتاجة لكنة يتاكد انه اذا اضفنا فلتر ما يحذف الفلتر الي كان موجود قبلة اذا كان فية
  function handleFilterChange(key, value) {
    setSearchParam(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

  const butStyle='flex justify-center items-center  text-[#4D4D4D] w-28 rounded-md hover:text-[#FFF7ED]   font-medium h-9'
  
  function renderVanElement (vansData){

    const displyedVans = typeFilter?
    vansData.filter(van=> van.type == typeFilter):
    vansData

    const vanElemnt = displyedVans.map((van)=>{
    return <Link key={van.id} className=" h-fit"
    //* to save the filtring data even if we move to the van details page 
          to={van.id} state={{search: searchParam.toString(),
          type: typeFilter}}>
    
          <div className=' cursor-pointer h-72 w-48' key={van.id}>
            <img className=' mb-2 rounded w-52' src={van.imageUrl} alt={van.name} />
            <div className=' flex flex-col'>
              <div className=' flex justify-between font-semibold'>
                <p>{van.name}</p>
                <p>${van.price} <br></br> <span className=' font-medium text-sm'>/ day</span></p>
              </div>
              <div className={ `capitalize flex justify-center items-center text-[#FFEAD0] w-20 h-8 rounded -translate-y-3 ${van.type === 'simple'? 'bg-[#E17654]': van.type=== 'luxury'? 'bg-[#161616]': van.type ==='rugged'? 'bg-[#115E59]': 'bg-white'}`}>
                {van.type}
              </div>
          </div>
        </div>
      </Link>  })


    return <>
              <div className=' flex flex-col gap-4 p-5'>
                <h1 className=' text-3xl font-bold'>Explore our van options</h1>
                <div className=' flex gap-4'>

                  <button onClick={()=> handleFilterChange('type', 'simple')} className= { typeFilter=='simple'? butStyle+' bg-[#E17654] text-[#FFF7ED]': butStyle+' hover:bg-[#E17654] bg-[#FFEAD0]'}>Simple</button>

                  <button onClick={()=> handleFilterChange('type','luxury')} className={ typeFilter=='luxury'? butStyle+' bg-[#161616] text-[#FFF7ED]': butStyle+' hover:bg-[#161616] bg-[#FFEAD0]'}>Luxury</button>

                  <button onClick={()=> handleFilterChange('type', 'rugged')} className={ typeFilter=='rugged'? butStyle+' bg-[#115E59] text-[#FFF7ED]': butStyle+' hover:bg-[#115E59] bg-[#FFEAD0]'}>Rugged</button>

                  {typeFilter?
                  <button onClick={()=>  handleFilterChange('type', null)} className='pl-3 underline text-[#4D4D4D]'>Clear filters</button>
                  :null}
                  
                </div>
              </div>
              <div className=' gap-8 flex justify-center items-center py-6 flex-wrap  px-8'>
                {vanElemnt}  
              </div>
              
              </>
    }

  return( 
  <div className=' min-h-[85vh] font-inter bg-[#FFF7ED]'>
    <Suspense fallback={<Loading/>}>
      <Await resolve={vansPromise.vans}>
        {renderVanElement }
      </Await>
    </Suspense>
    
  </div>)
    
  
}

export default Vans