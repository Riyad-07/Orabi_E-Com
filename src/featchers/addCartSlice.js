import { createSlice } from "@reduxjs/toolkit";
import Products from "../axiosData/Products";


const initialState = {
    addCart:[],
    products: Products,
    totalAmmount: 0,
    totalQuantity: 0,
}

export const addCartSlice = createSlice({
    name:'addcart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            state.cart.push(action.payload)
        }
    }
})

export const {addcart} = addCartSlice.actions
export default addCartSlice.reducer