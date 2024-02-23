import {configureStore} from '@reduxjs/toolkit'
import addToCart from './Slice'

export const store = configureStore({
    reducer:{
       myCart:addToCart,
    }
})

