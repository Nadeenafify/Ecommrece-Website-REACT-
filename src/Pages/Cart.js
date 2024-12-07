import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart,clearCart} from "../rtk/CartSlice"
import Table from 'react-bootstrap/Table';
import { IoClose } from "react-icons/io5";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {useMyContext} from "../ContextAPI/ContextAPI"


const Cart = () => {


 
    //get products
    const products=useSelector((state)=>state.Cart) 
    //get value of loged 
    const {isLogged}=useMyContext()


    const dispatch=useDispatch()
    const navigate=useNavigate()
   

   //get total price
   const totalPrice=products?.reduce((acc,product)=>{
              return Number(acc)+(Number(product.price)*product.quantity)
    },0)
  
//-------------------------------------------------------------------------------------
  
    return (
        
     <>
        <Helmet>
         <title>cart</title>
       </Helmet>


         <div className="container py-4">
             <div className="row g-1">

                   {
                         products.length==0?<div style={{height:"50em"}}><h4 className='color-orange text-center'>No Products Added To Cart</h4></div>:
                        <>
                        <Table striped bordered hover className='p-2'>
                         <thead>
                           <tr>
                          
                           <th>image</th>
                           <th>quantity</th>
                           <th>price</th>
                           <th>remove</th>
                         </tr>
                         </thead>
                         <tbody>
                      {

                     
                      products.map((product)=>{
                      return(   
                         <tr>
                           
                           <td><img  srcSet={`${product.image} 500w, ${product.image} 1000w, ${product.image} 2000w`}    loading="lazy"  src={product.image} className="p-4"style={{width: "8em",height: "8em"}}/></td>
                           <td>{product.quantity}</td>
                           <td>{(product.price*product.quantity)}</td>
                           <td><div className='d-flex justify-content-center' onClick={()=>{dispatch(removeFromCart(product))}}><IoClose  className='fs-4 m-2  bg-danger text-white  cursor-pointer rounded'  /></div> </td>

                         </tr>
                       )
                        
                    })  
                   
               }
                    <tr >
                    <td colSpan={4}  className='fw-bold'>total Price : {totalPrice.toFixed(2)}$</td>  
                    </tr> 
                </tbody>
                </Table>
                <button className='p-2 rounded w-auto' onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
                <button className='p-2 rounded w-auto ms-2'  onClick={()=>{navigate(!isLogged?"/login":"/payments", { state: {price:totalPrice} });}}>Buy Now</button>
                </>
               
     
                     }

                       
             </div>
         </div>
        
        
        
        
        </>
       )
}

export default Cart