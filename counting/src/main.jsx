import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux"
import {store} from "./slice/store/store";
import Counter from "./slice/Counter/counter"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Counter/>
    </Provider>
)
