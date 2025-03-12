import React, { Suspense } from 'react'

import Product from "../Components/Product"
import  RightIcons from '../Components/RightIcons'
import ProductDesign2 from '../Components/ProductDesign2'
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/BlogCard'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {useMyContext} from "../ContextAPI/ContextAPI"
import Alert from 'react-bootstrap/Alert';

// -------------------------------------images------------------------------------------------------
const brand1 = "images\\brand-01.png"
const brand2 = "images\\brand-02.png"
const brand3 = "images\\brand-03.png"
const brand4 = "images\\brand-04.png"
const brand5 ="images\\brand-05.png"
const brand6 ="images\\brand-06.png"
const brand7 = "images\\brand-07.png"

const main1 = "images\\main1.jpg"
const main2 = "images\\main2.jpg"
const main3 = "images\\main3.jpg"
const main4 = "images\\main4.jpg"

const service2 = "images\\service-02.png"
const service3 = "images\\service-03.png"
const service4 = "images\\service-04.png"
const service5 = "images\\service-05.png"

// --------------------------------------------------------------------------------------
const Home = () => {


  const navigate=useNavigate()
  const {isLogged}=useMyContext()


  const product= {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}

// --------------------------------------------------------------------
  return (
  <div className='h-75 bg-whitec'>
    
    <Helmet>
      <title>home</title>
    </Helmet>

    <main>


{/* ----------------------------------------------------------------------------- */}
    <section className="py-3 bg-white" >
          <div className="container">
            <div className="row g-1">

            
              {/* ------------------------------------------------------------- */}
              <div className="col-6">
                <div className='position-relative cursor-pointer rounded  main-container '   >
                  
                     <img loading="lazy"   onClick={()=>{navigate('/productView', { state: {product:{...product,image:'https://m.media-amazon.com/images/I/51+owZT5pcL._AC_UL640_FMwebp_QL65_.jpg'} } });}}  src='https://img.freepik.com/premium-photo/headphones-color-background_1003277-4155.jpg' className='w-100 h-100 img-fluid rounded-3'  alt="main-banner-1"/>
                     <div className='position-absolute  p-xl-4 ms-2 px-3' style={{zIndex: "10",top:"10%"}}>
                      <h4 className='color-orange fw-bold'>NEW</h4>
                      <h2 className='mt-1 fw-bold fs-big'>Buy Ipad Air</h2>

                       
                      <p>From $599.00 Or <br/> 49.91/mo.</p>
                      <button className='rounded p-1 main'  onClick={()=>{navigate(!isLogged?"/login":"/payments", { state: {price:product.price} });}}>Buy Now</button>
                     
                    </div>
                   
                 </div>      
              </div>

               {/* --------------------------------------------------------------------------- */}
               <div className="col-6 d-none d-xl-block">
                <div className="row" style={{height:"48%"}}>
                 <div className='col-6  rounded-3  position-relative me-3 ms-3 cursor-pointer' style={{width:"47%"}} onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/51fcrqkSvlL._AC_UL640_FMwebp_QL65_.jpg"} } });}}>
                 <img   loading="lazy"  src={main1} alt='watch-1.jpg'   className='position-absolute  left-0 w-100  h-100 img-fluid rounded-3' />
                 <div className="position-absolute p-3">
                      <h4 className='color-orange fw-bold'>15% OFF</h4>
                     <h2 className='fw-bold'>Smart Watch7</h2>
                     <p className='fs-small'>Shop The Latest Band <br/> Style And Color.</p>   
                    </div>
                 </div>

                 <div className='col-6 rounded-3 position-relative cursor-pointer ' style={{width:"47%"}} onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/41xyw9bDQfL._AC_UL640_FMwebp_QL65_.jpg"} } });}}>
                 <img  loading="lazy"  src={main2} alt='watch-1.jpg'  className='position-absolute left-0 w-100 h-100 img-fluid rounded-3' />
                 <div className="position-absolute p-3">
                     <h4 className='fw-bold color-orange'>SUPER CHARGED</h4>
                     <h2 className='fw-bold'>Head Phones</h2>
                     <p className='fs-small'>From $999.00 Or <br/> 41.62/mo.</p>
                    </div>
                 </div>
                 </div>


                 <div className="row mt-3" style={{height:"48%"}}>
                 <div className='col-6 rounded-3 position-relative  me-3 ms-3 cursor-pointer' style={{width:"47%"}} onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/61vImuizpTL._AC_SL1052_.jpg"} } });}}>
                 <img    loading="lazy" src={main3}  alt='watch-1.jpg'  className='position-absolute left-0 w-100 h-100 img-fluid rounded-3' />
                 <div className="position-absolute p-3">
                     <h4 className='fw-bold color-orange'>SUPER CHARGED</h4>
                     <h2 className='fw-bold'>iPad S13 + Pro</h2>
                     <p className='fs-small'>From $999.00 Or <br/> 41.62/mo.</p>
                    </div>
                 </div>

                 <div className='col-6 rounded-3 position-relative cursor-pointer' style={{width:"47%"}} onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/51HCEOuV1QL._AC_UL640_FMwebp_QL65_.jpg"} } });}} >
                 <img     loading="lazy"  src={main4} alt='watch-1.jpg'  className='position-absolute left-0 w-100 h-100 img-fluid rounded-3' />
                 <div className="position-absolute p-3">

                     <h4 className='fw-bold color-orange'>BEST SALE</h4>
                     <h2 className='fw-bold'>LAPTOP</h2>
                     <p className='fs-small'>From $999.00 Or <br/> 41.62/mo.</p> 
                    </div>
                 </div>
                 </div>        
              </div> 
       
              {/* -------------------------------------------------------------------------------- */}
               <div className='col-6  d-xl-none'>    
                  <div className="position-relative main-container" >      
                    <img   loading="lazy"  src={main1} className='h-100 w-100 cursor-pointer img-fluid position-absolute rounded-3' alt="head-phone-1.jpg" onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/51fcrqkSvlL._AC_UL640_FMwebp_QL65_.jpg"} } });}}/>                  
                    <div className="position-absolute p-xl-4 ms-2 px-3"  style={{zIndex:"10" ,top:"10%"}}>
                       <h4 className='color-orange fw-bold'>15% OFF</h4>
                     <h2 className='fw-bold'>Smart Watch7</h2>
                     <p className='fs-small'>Shop The Latest Band <br/> Style And Color.</p>
                    </div>           
                   </div>
               </div>  

              
             {/* --------------------------------------------------------------- */}
               <div className="col-6 d-xl-none">
                   <div className="position-relative main-container" >       
                    <img loading="lazy" src={main2} onClick={()=>{navigate('/productView', { state: {product:{...product,image:'https://m.media-amazon.com/images/I/41xyw9bDQfL._AC_UL640_FMwebp_QL65_.jpg'} } });}} className='h-100 w-100 cursor-pointer  img-fluid  rounded-3' alt="laptop-1.jpg"/>                
                    <div className="position-absolute p-xl-4 ms-2 px-3"  style={{zIndex:"10" ,top:"10%"}}>
                     <h4 className='fw-bold color-orange'>SUPER CHARGED</h4>
                     <h2 className='fw-bold'>Head Phones</h2>
                     <p className='fs-small'>From $999.00 Or <br/> 41.62/mo.</p>             
                    </div>
                    </div>
               </div> 

              {/* --------------------------------------------------------------------- */}
                 <div className="col-6 d-xl-none">
                <div className="position-relative main-container"  >
                 
                    <img  loading="lazy"src={main3} onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/61vImuizpTL._AC_SL1052_.jpg"} } });}} className='h-100 w-100 cursor-pointer img-fluid rounded-3' alt="laptop-1.jpg"/>                  
                    <div className="position-absolute p-xl-4 ms-2 px-3" style={{zIndex:"10" ,top:"10%"}}>
                     <h4 className='fw-bold color-orange'>SUPER CHARGED</h4>
                     <h2 className='fw-bold'>iPad S13 + Pro</h2>
                     <p className='fs-small'>From $999.00 Or <br/> 41.62/mo.</p>
              
                    </div>
                    </div>
                  </div> 
              {/* ----------------------------------------------------------------------- */}

                
               

          </div>          
       </div>       
   </section>

{/* ---------------------------------------------------------------------------------- */}



       <section className="py-4">
        <div className="container">
          <div className="row ">
           
          {/* -------------------------------------------------------------------- */}
            <div className=" col-xl-3 col-6 " >
                   <div className="d-flex">
                     <img     loading="lazy"  src={service2} className='img-fluid px-4 py-2 p-sm-4 size-small' alt="service1.png" />
                     <div className='mt-3' >
                      <div>
                       <h4 className='fw-bold'>Free Shiping</h4>
                       <p>From All Orders</p>
                    </div>
                 </div>
               </div>
        
            </div>

          {/* --------------------------------------------------------------------- */}
        
            <div className=" col-xl-3 col-6" >
                <div className="d-flex">
                    <img     loading="lazy"  src={service3} className='img-fluid size-small p-sm-4 px-4 py-2 ' alt="service2.png"/>
                   <div className='mt-3'>
                      <h4 className='fw-bold' >Daily Surprise</h4>
                      <p>Save Up To 25% Off</p>
                 </div>
              </div>      
          </div>
        
          {/* ------------------------------------------------------------------------------------ */}
               
          <div className=" col-xl-3 col-6" >
                <div className="d-flex">
                    <img     loading="lazy"  src={service4} className='img-fluid size-small p-sm-4 px-4 py-2' alt="service2.png"/>
                   <div className='mt-3'>
                      <h4 className='fw-bold' >Support 24/7</h4>
                      <p>Shop With Expert</p>
                 </div>
              </div>      
          </div>
       
        {/*-------------------------------------------------------------------------------  */}
          <div className=" col-xl-3 col-6" >
                <div className="d-flex">
                    <img    loading="lazy"  src={service5} className='img-fluid size-small p-sm-4 px-4 py-2' alt="service2.png"/>
                   <div className='mt-3'>
                      <h4 className='fw-bold' >Affortable </h4>
                      <p>Get Factory Direct</p>
                 </div>
              </div>      
          </div>
        {/* ------------------------------------------------------------------------------------- */}
            
            </div>
            </div>
       </section> 

{/* --------------------------------------------------------------------------------------- */}
     
       <section className="py-4">
        <div className="container">
          <div className="row g-1">

        {/* -------------------------------------------------------------------------- */}
            <div className="col-6 col-xl-3">
               <div className='d-flex p-3 bg-white cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/51oao7xTT8L._AC_UY218_.jpg"} } });}}>
                         
                             <img  loading="lazy"  src='https://m.media-amazon.com/images/I/51oao7xTT8L._AC_UY218_.jpg' className="small-image  pe-3 p-2"  alt='camera-image'/>
                       
                   <div>
                      <h4>Cameras & Vedios</h4>
                      <p>10 items</p>
                    </div>
                 
                </div>
               </div>
        {/* ------------------------------------------------------------------------- */}
      
              <div className="col-6 col-xl-3">
               <div className='d-flex p-3 bg-white h-100 cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/81OsEmGZ1dL._AC_UY218_.jpg"} } });}}>
                    
                         <img loading="lazy"  src='https://m.media-amazon.com/images/I/81OsEmGZ1dL._AC_UY218_.jpg' className="small-image  pe-3 p-2" alt='tv-image' />
                       
                     <div>
                        <h4>Smart Televsion</h4>
                        <p>12 items</p>
                     </div>
                     </div>
               </div>

        {/* ----------------------------------------------------------------------- */}
    
               <div className="col-6 col-xl-3">
               <div className='d-flex p-3 bg-white h-100 cursor-pointer'  onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/810y+pi1U-L._AC_UY218_.jpg"} } });}}>
                 
                       <img   loading="lazy"  src="https://m.media-amazon.com/images/I/810y+pi1U-L._AC_UY218_.jpg" className="small-image  pe-3 p-2"  alt='laptop-image' />
                    
                <div>
                  <h4>Computer & Laptop</h4>
                  <p>8 items</p>
                </div>
               </div>
               </div>
     
         {/* ---------------------------------------------------------------------------- */}
           <div className="col-6 col-xl-3">
              <div className='d-flex p-3 bg-white h-100 cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/61h+qeD-qfL._AC_SY300_SX300_.jpg"} } });}}>
               
                   <img     loading="lazy"  src='https://m.media-amazon.com/images/I/61h+qeD-qfL._AC_SY300_SX300_.jpg' className="small-image  pe-3 p-2" alt='tablet'/>
                
                <div>
                  <h4>Tablets</h4>
                  <p>13 items</p>
                 </div>
               </div>
               </div>

        {/* ---------------------------------------------------------------------------------- */}
       
          <div className="col-6 col-xl-3">
            <div className='d-flex p-3 bg-white h-100 cursor-pointer'  onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/71sQYwyaNqL.__AC_SX300_SY300_QL70_FMwebp_.jpg"} } });}}>
               
                   <img    loading="lazy" src='https://m.media-amazon.com/images/I/71sQYwyaNqL.__AC_SX300_SY300_QL70_FMwebp_.jpg' className="small-image  pe-3 p-2"  alt='home-image' />
                 
                <div>
                  <h4>Home Apliances</h4>
                  <p>10 items</p>
                </div>
              </div>
          </div>

      {/* ------------------------------------------------------------------------------------ */}
        

        <div className="col-6 col-xl-3">
            <div className='d-flex p-3 bg-white h-100 cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/41F4LmKQeoL._AC_UY218_.jpg"} } });}}>
                
                   <img     loading="lazy" src='https://m.media-amazon.com/images/I/41F4LmKQeoL._AC_UY218_.jpg' className="small-image  pe-3 p-2"  alt='Accessories-image' />
                  
                <div>
                  <h4>Accessories</h4>
                  <p>10 items</p>
                </div>
              </div>
        </div>
     {/* ---------------------------------------------------------------------------- */}
      <div className="col-6 col-xl-3">
            <div className='d-flex p-3 bg-white h-100 cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/716VzwRy5xL._AC_UY218_.jpg"} } });}}>
                
                   <img  loading="lazy"  src='https://m.media-amazon.com/images/I/716VzwRy5xL._AC_UY218_.jpg' className="small-image  pe-3 p-2" alt='headphone-image' />
                  
                <div>
                  <h4>HeadPhones</h4>
                  <p>5 items</p>
                </div>
              </div>
          </div>
    {/*-------------------------------------------------------------------------------------------  */}
    
      <div className="col-6 col-xl-3">
            <div className='d-flex p-3 bg-white h-100 cursor-pointer' onClick={()=>{navigate('/productView', { state: {product:{...product,image:"https://m.media-amazon.com/images/I/71wGMkZU39L._AC_UY218_.jpg"} } });}}>
                
                   <img   loading="lazy" src='https://m.media-amazon.com/images/I/71wGMkZU39L._AC_UY218_.jpg' className="small-image  pe-3 p-2"  alt='ProtableSpeakers-image' />
                 
                <div>
                  <h4>Protable Speakers</h4>
                  <p>7 items</p>
                </div>
              </div>
          </div>
    {/* ---------------------------------------------------------------------------------- */}
        
       
        </div>
        </div>
       </section> 

{/* ---------------------------------------------------------------------------------------------- */}

     <section className="py-4">  
        <div className="container">
          <div className="row g-2">
      

          {/* ---------------------------------------------------------- */}
            <div className="col-12">
              <h3 className='fw-bold my-5'>Our Popular Products</h3>
            </div>

          {/* ---------------------------------------------------------- */}
         
            <div className="col-xl-3 col-6 position-relative hover-d-block">
            
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/61gC6PBsRPL._SX522_.jpg'}} />  
              <Product  image='https://m.media-amazon.com/images/I/61gC6PBsRPL._SX522_.jpg'   text="Kids HeadPhones Bulk." price="100"/>
           
            </div>
           {/* ---------------------------------------------------------- */}
            <div className="col-xl-3 col-6 position-relative hover-d-block">
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/41Wto44SIFS._AC_SL1500_.jpg'}} />
              <Product  image='https://m.media-amazon.com/images/I/41Wto44SIFS._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
          {/* ---------------------------------------------------------- */}
          <div className="col-xl-3 col-6 position-relative hover-d-block">
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SL1000_.jpg'}}/>
              <Product image='https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SL1000_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
          {/* ---------------------------------------------------------- */}
            <div className="col-xl-3 col-6 position-relative hover-d-block">
               <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/81f6wI3M5FL._AC_SL1500_.jpg'}}/>
              <Product image='https://m.media-amazon.com/images/I/81f6wI3M5FL._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
           {/* ---------------------------------------------------------- */}
          </div>
        </div>
     </section>     
{/* ---------------------------------------------------------------------------------------------------- */}
      <section className="py-4">  
        <div className="container">
          <div className="row g-2">
       

         
            <div className="col-xl-3 col-6 position-relative cursor-pointer" onClick={()=>{navigate('/productView', { state: { product:{...product,image:'https://m.media-amazon.com/images/I/61v64+Cw34L._AC_SL1500_.jpg'}} });}}>    
              <ProductDesign2 black="yes" image='https://m.media-amazon.com/images/I/61v64+Cw34L._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
            <div className="col-xl-3 col-6 position-relative cursor-pointer" onClick={()=>{navigate('/productView', { state: { product:{...product,image:'https://m.media-amazon.com/images/I/61vImuizpTL._AC_SL1052_.jpg'}} });}}>
           
              <ProductDesign2  image='https://m.media-amazon.com/images/I/61vImuizpTL._AC_SL1052_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
         
           <div className="col-xl-3 col-6 position-relative cursor-pointer" onClick={()=>{navigate('/productView', { state: { product:{...product,image:'https://m.media-amazon.com/images/I/718mdRK8TkL._AC_SL1500_.jpg'}} });}}>
              
              <ProductDesign2 image='https://m.media-amazon.com/images/I/718mdRK8TkL._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
         
            <div className="col-xl-3 col-6 position-relative cusor-pointer" onClick={()=>{navigate('/productView', { state: { product:{...product,image:'https://m.media-amazon.com/images/I/716dMJ9stNL._AC_SL1500_.jpg'}} });}}>
            
              <ProductDesign2 image='https://m.media-amazon.com/images/I/716dMJ9stNL._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
         
          </div>
        </div>
     </section>  

{/* ---------------------------------------------------------------------------------------------------- */}
     <section className="py-4">  
        <div className="container">
          <div className="row g-2">
      
            <div className="col-12">
              <h3 className='fw-bold my-5'>Our Popular Products</h3>
            </div>

      
         
            <div className="col-xl-3 col-6 position-relative hover-d-block">
            
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/61gC6PBsRPL._SX522_.jpg'}} />  
              <Product  image='https://m.media-amazon.com/images/I/61gC6PBsRPL._SX522_.jpg'   text="Kids HeadPhones Bulk." price="100"/>
           
            </div>
 
            <div className="col-xl-3 col-6 position-relative hover-d-block">
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/41Wto44SIFS._AC_SL1500_.jpg'}} />
              <Product  image='https://m.media-amazon.com/images/I/41Wto44SIFS._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
         
          <div className="col-xl-3 col-6 position-relative hover-d-block">
              <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SL1000_.jpg'}}/>
              <Product image='https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SL1000_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
        
          <div className="col-xl-3 col-6 position-relative hover-d-block">
               <RightIcons product={{...product,image:'https://m.media-amazon.com/images/I/81f6wI3M5FL._AC_SL1500_.jpg'}}/>
              <Product image='https://m.media-amazon.com/images/I/81f6wI3M5FL._AC_SL1500_.jpg' text="Kids HeadPhones Bulk." price="100"/>
            </div>
        
          </div>
        </div>
     </section> 

{/* -------------------------------------------------------------------------------------------- */}

     <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
    {/* -------------------------------------------------------------------------------- */}
                <Marquee>
                  <div className='d-flex justify-content-center align-items-center'>
              {/* -------------------------------------------------------- */}
                  <div className='ms-5'>
                    <img loading="lazy"  src={brand1} alt="brand-image"/>
                  </div>
              {/* --------------------------------------------------- */}
                  <div className=' ms-5'>
                  <img loading="lazy"  src={brand2} alt="brand-image"/>
                  </div>
              {/* --------------------------------------------------------- */}
                  <div className=' ms-5'>
                   <img loading="lazy"  src={brand3} alt="brand-image"/>
                  </div>
              {/* -------------------------------------------- */}
                  <div className=' ms-5'>
                  <img loading="lazy"  src={brand4} alt="brand-image"/>
              {/* ------------------------------------------------------ */}
                  </div>
                  <div className=' ms-5'>
                  <img src={brand5} alt="brand-image"/>
              {/*-----------------------------------------------------------  */}
                  </div>
                  <div className=' ms-5'>
                  <img loading="lazy" src={brand6} alt="brand-image"/>
              {/*----------------------------------------------------------------  */}
                  </div>
                  <div className=' ms-5'>
                  <img loading="lazy"  src={brand7} alt="brand-image"/>
              {/*---------------------------------------------------------------------------  */}
                  </div>
                 
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      
       </section> 

{/* ------------------------------------------------------------------------------------------------- */}

      <section className="py-4">  
        <div className="container">
          <div className="row g-2">

           
            <div className="col-xl-3 col-6">
               <BlogCard img='https://thumbor.autonomous.ai/n7di5JUzV3ay1qNI2UtkYKJE_wQ=/1600x900/smart/filters:format(webp)/https://storage.googleapis.com/s3-autonomous-upgrade-3/static/upload/images/new_post/smartdesk-4-review-the-ultimate-productivity-hack-708.jpg' />
            </div>
          
            <div className="col-xl-3 col-6">
              <BlogCard img='https://www.html.merku.love/edison/img/library/promoted.jpg' />
            </div>
           
            <div className="col-xl-3 col-6">
               <BlogCard img='https://th.bing.com/th/id/OIP.6e2yPTYrvmd-7EkZvnD3zgHaE8?rs=1&pid=ImgDetMain' />
            </div>
          
            <div className="col-xl-3 col-6">
               <BlogCard img='https://smallbiztrends.com/online-and-offline-marketing-channels/unique-online-marketing-tips.png' />
            </div>
           
          </div>
        </div>
     </section>  
  
{/* ----------------------------------------------------------------------------------------------------- */}

  </main> 
 
  </div>
  )
}

export default Home