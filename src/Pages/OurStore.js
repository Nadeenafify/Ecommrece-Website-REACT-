import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FetchProducts} from"../rtk/ProductSlice"
import Product from '../Components/Product'
import RightIcons from '../Components/RightIcons'
import { Helmet } from 'react-helmet';
import {useMyContext} from "../ContextAPI/ContextAPI"


const OurStore = () => {

  const {shopCategories,searchHeaderValue}=useMyContext()
  const products=useSelector((state)=>state.Products) 
  // max price to set toprice as initial value to get all products if user not select
  const maxPrice = Number(products.reduce((max, product) => Math.max(max, product.price), 0)).toFixed(0)
  const dispatch=useDispatch()
 


  // inputs of price range from to
  const [fromPrice,setfromPrice]=useState(1)
  const [toPrice,settoPrice]=useState(maxPrice)


//------------------------------------------------------------------------------------------ filter products depend on price
  let filteredProducts=products.filter((product)=>{
    return product.price>=fromPrice && product.price<=toPrice
})

if(shopCategories != "ALL Products"){

  filteredProducts=filteredProducts.filter((product)=>{

     return product.category==shopCategories
  })
}
if(searchHeaderValue!=""){

  filteredProducts=filteredProducts.filter((product)=>{
    return product.title.includes(searchHeaderValue)
  })
}
// --------------------------------------------------------------------------
 
// get products and set max price as react take first value from reduce function  which is initial value 0
  useEffect(()=>{
    dispatch(FetchProducts())
    settoPrice(maxPrice)
},[maxPrice])



  return (
  <>
  <Helmet>
      <title>ourStore </title>
    </Helmet>
    <div className="container py-4">
       <div className="row">
       
          <div className="col-xl-2 col-md-3 col-5" >
            <div className="row bg-white rounded">
             
                <aside className='p-xl-4 p-2'>
                  <h4 className='fw-bold  mt-3'>Filter By</h4>
                    <hr/>
                    <h4 className='fw-bold  p-1 mt-2'>Price</h4>
                    <div className='d-flex  gap-2 '>
                     <input type="number" min={1} onChange={(e)=>{e.target.value<=toPrice&&setfromPrice(e.target.value)}} value={fromPrice} className='w-50 ms-2 mt-1' placeholder='From'/>
                     <input type='number' min={1}  onChange={(e)=>{e.target.value>=fromPrice&&settoPrice(e.target.value)}} value={toPrice} className='w-50   mt-1' placeholder='To'/>
                    </div>             
                    </aside>
                 
                  </div>
             </div>
        
        <main className="col-xl-10  col-md-9 col-7">
          <div className="row g-2">

          {
            
            filteredProducts.map((product)=>{
              return(
                 <div key={product.id} className="col-xxl-3 col-lg-6  position-relative hover-d-block">
                   <RightIcons product={product}/>
                   <Product product={product} key={product.id} image={product.image} text={product.title} price={product.price}/> 
                  </div>
               )
              })
              
         }

          </div>
        </main>
        
       </div>
  
   
    </div>
  </>
  )

  
}

export default OurStore