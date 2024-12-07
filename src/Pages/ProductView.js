import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {addToFavourite} from "../rtk/FavouriteSlice"
import {addToCompare} from "../rtk/CompareSlice"
import { addToCart } from '../rtk/CartSlice';
import {useMyContext} from "../ContextAPI/ContextAPI"
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import StarRatings from 'react-star-ratings';


const ProductView = () => {


  const navigate=useNavigate()
  const { state } = useLocation();
  const product = state?.product;
  const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  const {isLogged}=useMyContext()



 //----------------------------------------------set number of elements in cart to input value
  function handlechange(e){
    if(e.target.value<=product?.rating?.count)
      {
        setQuantity(e.target.value)
       
      
      }

  }
  
// ------------------------------------------------------------------------------------------------
  return (
    <>
     <Helmet>
      <title>product view</title>
    </Helmet>
      <div className="container py-4">
        <div className="row bg-white p-2 rounded">
         
             <div  className="col-5 ">        
                 <img  loading="lazy"  src={product.image} className='img-fluid mt-4 ms-4 rounded  h-lg-50  p-lg-5' alt="product-image" /> 
             </div>
           
           {/* --------------------------------------------------------------------------------- */}
             <div className="col-7 px-5">  

                <h4 className='mt-4 fw-bold'>10 Back Multi Colored {product.title}</h4>
                <hr className='px-3'/>
                <p className='mt-2 '>{product.price}$</p>
                <StarRatings
                       rating={product?.rating?.rate || 4}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="0.9em"
                        starSpacing="0.2em"
                      />

                <hr className='px-3'/>
               
                <div className='d-flex flex-wrap'>
                      <h4 className='fw-bold mt-4'>Describtion : </h4> 
                      <p>{product.description}</p> 
                     </div>
               

                     <div className='d-flex flex-wrap mt-4'>
                      <h4 className='fw-bold '>Category : </h4> 
                      <p className='ms-2'> {product.category}</p> 
                     </div>
               
                     <div className='d-flex flex-wrap mt-4'>
                      <h4 className='fw-bold '>Availability : </h4> 
                      <p className='ms-2'> {product?.rating?.count>0?"available":"not available"}</p> 
                     </div>
                

                     <div className='d-flex flex-wrap mt-4'>
                      <h4 className='fw-bold mt-2'>Quantity : </h4> 
                      <input value={quantity} onChange={handlechange} type="number" min={1} className='ms-2 mt-2 mb-2'  style={{height:"10%",width: "15%"}} />
                      <div className='d-flex mt-1 '>
                      <button className='rounded p-1 ms-2 ms-lg-4' onClick={()=>{dispatch(addToCart({...product,quantity:quantity}))}}>Add to chart</button>
                      <button className='rounded p-1 ms-1 ms-lg-3'onClick={()=>{navigate(!isLogged?"/login":"/payments", { state: {price:product.price} });}}>Buy now</button>
                     </div>
                     </div>

              
                     <div className='d-flex flex-wrap mt-4 '>
                      <div className='d-flex'>
                     <MdFavoriteBorder className='fs-6 me-1 ' />  
                     <p className='cursor-pointer' onClick={()=>{dispatch(addToFavourite(product))}}>Add To wishlist</p> 
                     </div>
                     <div className='d-flex'>
                     <IoGitCompareOutline className='fs-6 ms-lg-5 me-1 '/> 
                     <p className='cursor-pointer' onClick={()=>{dispatch(addToCompare(product))}}>Add to compare</p>
                     </div>
                     </div>
        
                     <img 
                      
                        src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/7828547/1820/1214/m1/fpnw/wm0/previewmodel-.png?1582759308&s=4114938e08165bd7163349c2a83f141a" 
                       className='img-fluid' alt="image-payment" loading="lazy" 
                      
                        />


             </div>
             
           
              </div>
      </div>
    
    </>
  )
}

export default ProductView