import React from 'react'
import { createSlice } from "@reduxjs/toolkit";


const CompareSlice= createSlice({
    initialState: [],
    name:"CompareSlice",
    reducers:{
        addToCompare:(state,action)=>{

               if(state.find((product)=>product.id==action.payload.id))
                 return
               else
                 state.push(action.payload)
               
        },

        removeFromCompare:(state,action)=>{
          const indextoremove=state.findIndex((product,index)=>product.id==action.payload.id)
          state.splice(indextoremove,1) 
          
        }
    }
   

})

export const{addToCompare, removeFromCompare}=CompareSlice.actions
export default CompareSlice.reducer
