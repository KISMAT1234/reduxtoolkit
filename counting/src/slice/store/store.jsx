import {configureStore} from "@reduxjs/toolkit"
import {counterSlice} from "../Counterslice"

export const store = configureStore({
    reducer:{
       counter : counterSlice
    },
})