import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { IoGitCompareOutline } from "react-icons/io5"
import { HiOutlineShoppingCart } from "react-icons/hi";
import {  useDispatch } from 'react-redux'
import {addToFavourite} from "../rtk/FavouriteSlice"
import {addToCompare} from "../rtk/CompareSlice"
import { addToCart } from '../rtk/CartSlice';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


const RightIcons = (props) => {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const product=props.product
  const [Alertshow,setAlertShow]=useState(false)

// ----------------------------------------------------------------showaler------------------------
  function showAlert(){
    setAlertShow(true)
      setTimeout(()=>{
        setAlertShow(false)
      },1000)
  }
 
//  ---------------------------------------------------------------
  return (
    <>
               <Alert key="success" variant="success" className={Alertshow?'position-fixed top-0 w-auto fs-6 fs-lg-3 fw-bold text-success text-center ':'d-none position-fixed  w-auto fs-6 fs-lg-3 fw-bold text-success text-center '} style={{right:"0%"}}>
                   Product Added 
              </Alert>
               <MdOutlineFavoriteBorder  className='fs-sm-5 fs-6 position-absolute cursor-pointer hover-d-block ' onClick={()=>{dispatch(addToFavourite(product));showAlert()}} style={{top:"5%",right:"5%"}}/>
               <BiShow  onClick={()=>{navigate('/productView', { state: { product} });}}  className='fs-5 position-absolute fs-6 cursor-pointer  right-icons d-none'  style={{top:"14%",right:"5%"}} />
               <IoGitCompareOutline  className='fs-sm-5 fs-6 position-absolute cursor-pointer right-icons d-none' onClick={()=>{dispatch(addToCompare(product));showAlert();}} style={{top:"23%",right:"5%"}}/>
               <HiOutlineShoppingCart className='fs-sm-5 fs-6 position-absolute cursor-pointer right-icons  d-none ' style={{top:"33%",right:"5%"}} onClick={()=>{dispatch(addToCart(product));showAlert()}}/>
              
    </>
  )
}

export default RightIcons