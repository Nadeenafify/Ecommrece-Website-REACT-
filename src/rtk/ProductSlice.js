import React from 'react'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchProducts=createAsyncThunk("ProductSlice/FetchProducts",async()=>{

    const res=await fetch("https://fakestoreapi.com/products")
    const data=await res.json();
    return data;
})
const ProductSlice=createSlice({
    name:"ProductSlice",
    initialState: [],
    reducers:{},

    extraReducers:(builder)=>{
         builder.addCase(FetchProducts.fulfilled,(state,action)=>{
            return action.payload
         })

    }


})

export const {}=ProductSlice.actions;
export default ProductSlice.reducer;
