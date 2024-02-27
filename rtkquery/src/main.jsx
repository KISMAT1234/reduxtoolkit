import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import  myApi from "./redux/api.jsx"

ReactDOM.createRootimport { myApi } from './features/apiSlice.js'
(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider  api={myApi}>
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
