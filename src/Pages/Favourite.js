import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Components/Product';
import { IoClose } from "react-icons/io5";
import { removeFromFavourite } from '../rtk/FavouriteSlice'
import { Helmet } from 'react-helmet';


const Favourite = () => {
 
    const products=useSelector((state)=>state.Favourite)
    const dispatch=useDispatch()
 

  //------------------------------------------------------------------------
  return (
   <>
     <Helmet>
      <title>favourite</title>
    </Helmet>
    <div className="container py-4">
        <div className="row g-1">
     
          
                {
                    products.length==0?<div  style={{height:"50em"}}><h4 className='color-orange text-center'>No Products Added To Favourite</h4></div>:null

                }
                  {
                   products.map((product)=>{
                      return(<div key={product.id} className="col-xl-3 col-6 position-relative hover-d-block">
                        <IoClose  className='fs-4 m-2 text-dark position-absolute bg-hover cursor-pointer' onClick={()=>{dispatch(removeFromFavourite(product))}} /> 
                        <Product product={product} image={product.image} text={product.title} price={product.price}/>
                        </div>)
                        
                    })
               }
        </div>
    </div>
   
   
   
   
   </>
  )
}

export default Favourite