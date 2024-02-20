import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
// import {Link } from "react-router-dom"
import {Route, Routes,BrowserRouter} from "react-router-dom";
import Cartpage from "./Cart"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,

  <BrowserRouter>
    <Routes>
        <Route path="/cart" element={<Cartpage/>}/>
    </Routes>
  </BrowserRouter>
)
