import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        dataCart:[]
    },
    reducers:{
        addToCart(state, action){
            state.dataCart.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer