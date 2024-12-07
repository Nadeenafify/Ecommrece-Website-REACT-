import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice= createSlice({
    initialState: [],
    name:"FavouriteSlice",
    reducers:{
        addToFavourite:(state,action)=>{

               if(state.find((product)=>product.id==action.payload.id))
                 return
               else
                 state.push(action.payload)
               
        },

        removeFromFavourite:(state,action)=>{
          const indextoremove=state.findIndex((product,index)=>product.id==action.payload.id)
          state.splice(indextoremove,1) 
        }}
   

})

export const{addToFavourite, removeFromFavourite}=FavouriteSlice.actions
export default FavouriteSlice.reducer
