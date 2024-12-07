import React, {  useState  } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {useMyContext} from "../ContextAPI/ContextAPI"
import { CiLogout } from "react-icons/ci";
import {clearCart} from "../rtk/CartSlice"





const Header = () => {

// -------------------------------------------select data-----------------------------------------
   // list is showed for small screens 
   const [showlist,setShowlist]=useState(false); 
   //dispatch actions 
   const dispatch=useDispatch()
   //get products un cart to calculate totalprice and nuber of items at header
   const products=useSelector((state)=>state.Cart)
   //select states and functions from context Api to show in header such as Email,Logout,isLogged.....
   const {isLogged,Logout,shopCategories,setShopCategories,searchHeaderValue,setSearchHeaderValue,Email}=useMyContext()

// ----------------------------------------------------------------------------------


//calculate total price
   const totalPrice=products?.reduce((acc,product)=>{
      return Number(acc)+(Number(product.price)*product.quantity)
   },0)
//calculate number of items in cart 
   const quantity=products?.reduce((acc,product)=>{
    return Number(acc)+Number(product.quantity)
   },0)
   
 
//  -------------------------------------------------------------------------------------

   return(
    <>

       <header className="py-3 tinyBorder" style={{height:"6em"}}>
            <div className="container">
              <div className="row mt-2">
               {/*--------------------------------------------------------------------------------- */}
                  <div className="col-md-6">
                     <p className="text-white"> Free Shiping over 100$ & Free Returns </p>                                  
                  </div>
               {/* ------------------------------------------------------------------------------ */}
                  <div className="col-md-6">
                     <p className="text-white text-md-end"> HotLine: <a className="text-white" href="tel:+91 8264954234">+91 8264954234</a> </p> 
                  </div>
                </div>
                {/* -------------------------------------------------------------------------------- */}
            </div>
        </header>
{/* ------------------------------------------------------------------------------------- */}
       <header className= "py-3 " style={{height:"7em"}}>
           <div className="container">
             <div className="row mt-3">
        {/*--------------------------------------------------------------------------------------------------------------*/}
                <div className="col-lg-2  col-4">
                   <h1 className='text-white'>DevCorner</h1>  
                </div>
        {/*----------------------------------------------------------------------------------------------------------------*/}
                <div className="col-lg-4 col-xxl-5  col-6">
                    <div className="bg-warning rounded d-flex h-75">
                         <input type="text" className="p-2 ps-3 rounded-start w-100  border-0 " onChange={(e)=>{setSearchHeaderValue(e.target.value)}} value={searchHeaderValue} placeholder="Search Product Here..." />
                         <div className='d-flex jusify-content-center align-items-center'>
                            <IoMdSearch  className='fs-2 m-2 cursor-pointer'  />  
                         </div>
                            
                     </div>
                </div>
      {/* -------------------------------------------------------------------------------------------------------- */}
                <div className="col-2 d-lg-none d-block " >    
                      <div   className= {showlist?" w-50 h-100 footerColor rounded-end ":"d-none"} style={{position: "fixed",left:"0px",top:"0px",zIndex:"100"}} >
                        {/* ------------------------------------------------------------------------ */}
                         <div className='d-flex justify-content-end p-3 align-items-end '>
                           <IoClose  className='fs-2 m-2 text-white bg-hover cursor-pointer' onClick={()=>setShowlist(false)} /> 
                          </div> 
                        {/* ------------------------------------------------------------------------ */}
                        <div className="row px-3"> 
                                  
                          <Link className="d-flex text-white bg-hover text-decoration-none"  to="/compare">
                            <IoGitCompareOutline className='fs-5 me-1 mt-1'/>
                            <p> Compare <br/>Products</p>
                         </Link>
                        {/* ------------------------------------------------------------------------------ */}
                         <Link className="d-flex text-white bg-hover text-decoration-none d-flex"  to="/favourite">
                            <MdFavoriteBorder className='fs-5 me-1 mt-1' />
                           <p >Favourite <br/> Wishlist</p>
                        </Link>
                       {/* -------------------------------------------------------------------------- */}
                        <Link className={isLogged?"d-flex  text-white text-decoration-none":"d-flex bg-hover text-white text-decoration-none"} to={!isLogged?"/login":null}>
                           {isLogged?<CiLogout onClick={()=>{ Logout(); dispatch(clearCart())}} className='fs-5 me-1' title='logout'/>:<LuUser  className='fs-5 me-1'/>} 
                           {isLogged?<p>{Email.substring(0,Email.indexOf("@"))}</p>:<p>Login<br/> Acount</p>}
                      </Link>
                      {/* --------------------------------------------------------------------------------------- */}
                      <Link to="/cart" className="d-flex  pt-1   text-decoration-none">
                            
                            <div className='d-flex flex-coulmn gap-10'>
                                  <HiOutlineShoppingCart className='fs-5 me-1 text-white bg-hover'/>
                                  <h4 className='mx-1 text-white ' >{quantity?quantity:0}</h4>
                                  <p className='text-white' >{totalPrice?totalPrice.toFixed(2):0}</p>
                 
                            </div>
                        </Link>
                       {/* ------------------------------------------------------------------------------ */}

                          </div>
                      </div>

                      <BsList className='fs-2 m-2 text-white bg-hover cursor-pointer'  onClick={()=>setShowlist(true)}/>
                       
                </div>
              
        {/*----------------------------------------------------------------------------------------------------------------*/  }              
                <div className="col-lg-6  col-xxl-5 d-lg-block d-none">
                    <div className="row">
                      <div className='col-3'> 
                        {/* ------------------------------------------------------ */}
                         <Link className="d-flex text-white bg-hover text-decoration-none"  to="/compare">
                            <IoGitCompareOutline className='fs-2 m-2 '/>
                            <p className='mt-1'> Compare <br/>Products</p>
                         </Link>
                         {/* ------------------------------------------------------------------ */}
                      </div>
                     {/* --------------------------------------------------------------------- */}
                    <div className='col-3'>
                       <Link className="d-flex text-white bg-hover  text-decoration-none d-flex"  to="/favourite">
                            <MdFavoriteBorder className='fs-2 m-2' />
                           <p className='mt-1'>Favourite <br/> Wishlist</p>
                        </Link>
                   </div>
                   {/* ------------------------------------------------------------------- */}
                   <div className='col-3'>
                      <Link className={isLogged?"d-flex  text-white text-decoration-none ":"d-flex bg-hover  text-white text-decoration-none "} to={!isLogged?"/login":null}>
                            {isLogged?<CiLogout onClick={()=>{Logout(); dispatch(clearCart()) }} className='fs-2 m-2' title="logout"/>:<LuUser  className='fs-2 m-2'/>}
                            {isLogged?<p className='w-50 mt-1'>{Email.substring(0,Email.indexOf("@"))}</p>:<p>Login<br/> Acount</p>}
                      </Link>
                   </div>
                   {/* ----------------------------------------------------------------------- */}
                  <div className='col-3'>
                        <Link to="/cart"className="d-flex align-items-center justify-content-center pt-1  text-white text-decoration-none">
                            
                             <div className='d-flex flex-coulmn gap-10'>
                                   <HiOutlineShoppingCart className='fs-2 ms-2 bg-hover '/>
                                   <span className='badge bg-white text-dark ms-1 h-25'>{quantity?quantity:0}</span>
                                   <p className='ms-2'>{totalPrice?totalPrice.toFixed(2):0}</p>
                  
                             </div>
                         </Link>
                   </div>
                  {/* --------------------------------------------------------------------------- */}
              </div>
                </div>
        {/*----------------------------------------------------------------------------------------------------------------*/}
             </div>
           </div>
       </header>
{/* -------------------------------------------------------------------------------------- */}
        <nav className="py-3 footerColor" style={{height:"4.5em"}}>
        <div className="container">
          <div className="row">
            {/* ------------------------------------------------------------- */}
            <div className="col-5 col-lg-4 ">
              <div className="d-flex align-items-center"> 
                  <div className="dropdown  w-100">
                      
                         <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsList className='fs-6  d-sm-block  text-white'/>
                           <h4 className='ms-1 mt-2 fs-normal'>Shop Categories</h4>
                        </button>
                     <ul className="dropdown-menu headerColor"  aria-labelledby="dropdownMenuButton1">
                         <li className="dropdown-item tinyBorder bg-hover-top-list tinyBorder text-white" onClick={()=>{setShopCategories("men's clothing")}}>{shopCategories=="men's clothing"?<h4 className='color-yellow'>men's clothing</h4>:<h4>men's clothing</h4>}</li>
                          <li  className="dropdown-item tinyBorder bg-hover-top-list tinyBorder text-white" onClick={()=>{setShopCategories("women's clothing")}}>{shopCategories=="women's clothing"?<h4 className='color-yellow'>women's clothing</h4>:<h4>women's clothing</h4>}</li>
                         <li className="dropdown-item tinyBorder bg-hover-top-list tinyBorder text-white" onClick={()=>{setShopCategories("jewelery")}}>{shopCategories=="jewelery"?<h4 className='color-yellow'>jewelery</h4>:<h4>jewelery</h4>}</li>
                         <li className="dropdown-item tinyBorder bg-hover-top-list  tinyBorder text-white"  onClick={()=>{setShopCategories("ALL Products")}}>{shopCategories=="ALL Products"?<h4 className='color-yellow'>ALL Products</h4>:<h4>ALL Products</h4>}</li>
                      </ul>
                   </div>
              </div>
            </div>
            {/* --------------------------------------------------------------- */}
              <div className='col-7 col-lg-8 mt-3 '>
                   <div className='d-flex gap-3   gap-xl-5'>
                      <Link className="text-white text-decoration-none fw-bold bg-hover" to="/"><h4>Home</h4></Link>
                      <Link className="text-white text-decoration-none fw-bold bg-hover" to="/store"><h4>OurStore</h4></Link>
                      <Link className="text-white text-decoration-none fw-bold bg-hover" to="/blogs"><h4>Blogs</h4></Link>
                      <Link className="text-white text-decoration-none fw-bold bg-hover" to="/contact"><h4>Contact</h4></Link>
                   </div>
                </div> 
            {/* ----------------------------------------------------------------------- */}
          </div>
        </div>
         </nav>

    </>
   )
}

export default Header