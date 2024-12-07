import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice"
import FavouriteSlice from "./FavouriteSlice"
import CompareSlice from "./CompareSlice"
import CartSlice from "./CartSlice"

export const Store=configureStore({

    reducer:{
        Products:ProductSlice,
        Favourite:FavouriteSlice,
        Compare:CompareSlice,
        Cart:CartSlice,
    }
})