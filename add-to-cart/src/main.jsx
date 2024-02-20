import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Home.jsx'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
// import {Link } from "react-router-dom"
import {Route, Routes,BrowserRouter} from "react-router-dom";
import Cartpage from "./Cart"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Homepage/>
    </Provider>
  </React.StrictMode>,

  <BrowserRouter>
    <Routes>
        <Route path="/cart" element={<Cartpage/>}/>
    </Routes>
  </BrowserRouter>
)
