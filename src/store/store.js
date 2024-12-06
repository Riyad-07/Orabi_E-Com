import { configureStore } from "@reduxjs/toolkit";
import  addCartSlice  from "../featchers/addCartSlice";

export const store = configureStore({
    reducer:{
        allCart: addCartSlice
    }
})

export default store