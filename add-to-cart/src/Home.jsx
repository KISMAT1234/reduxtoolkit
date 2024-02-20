import React from 'react'
import {useDispatch} from "react-redux"
// import {useNavigate} from "react-router-dom"
import {data} from "./Item"

const Homepage = () => {

    const dispatch = useDispatch()
    // const navigate = useNavigate()
   
  return (
    <>
  
    <div>Homepage</div>
    <div>
        {data.map((cartdata)=>(
        <div>
         <h1>{cartdata.name}</h1>
        <button onClick={()=>dispatch(cartClick(cartdata))}>Add to cart</button>
        </div>
        ))}
        
        <div>
            <button onClick={()=>navigate("/cart")}>Cart</button>
        </div>
    </div>
    </>
  )
}

export default Homepage