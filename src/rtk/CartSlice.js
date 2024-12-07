import React from 'react'
import { createSlice } from "@reduxjs/toolkit";


const CartSlice= createSlice({
    initialState: [],
    name:"CartSlice",
    reducers:{
        addToCart:(state,action)=>{

          const finalproduct=state.find((prouct)=>prouct.id===action.payload.id)
          // if user set quantity
          if(action.payload.quantity){
            let productClone={... action.payload,quantity:Number(action.payload.quantity)}
            state.push(productClone)
            sessionStorage.setItem("products",JSON.stringify(state))
            console.log(action.payload.quantity)
          }
          // if quantity not setted and user add same product many time
          else if(finalproduct){
               finalproduct.quantity+=1
          }
          // if user add product one time
          else{
              let productClone={... action.payload,quantity:1}
              state.push(productClone)
              sessionStorage.setItem("products",JSON.stringify(state))
          }
               
        },

        removeFromCart:(state,action)=>{
          const indextoremove=state.findIndex((product,index)=>product.id==action.payload.id)
          state.splice(indextoremove,1) 
          sessionStorage.setItem("products",JSON.stringify(state))
          
        },
        clearCart:(state,action)=>{
          state.length=0
          sessionStorage.setItem("products",JSON.stringify(state))
        },
        
       
        
    },
   
   

})

export const{addToCart, removeFromCart,clearCart,updateQuantity}=CartSlice.actions
export default CartSlice.reducer
