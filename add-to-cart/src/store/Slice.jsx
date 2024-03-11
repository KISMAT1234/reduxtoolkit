import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState:[
        {
            name: 'Apple',
            quantity: 10
        }
    ],
    reducers:{
        addToCart(state, action){
            state.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer