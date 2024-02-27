
import React from 'react'
import {useDispatch} from "react-redux"
import {data} from "./Item"
import {Link} from "react-router-dom"
import addToCart from  './store/Slice'

function App() {

    const dispatch = useDispatch()

    const kisData =[kismat]
    const addNewUser = (name) => {
      dispatch(addToCart(name));
    };
   
  return (
    <>
  <sec/>
    <div>Homepage</div>
    <div>
        {data.map((cartdata)=>(
        <div>
         <h1>{cartdata.name}</h1>
        <button onClick={()=>addNewUser(kisData)}>Add to cart</button>
        </div>
        ))}
        
        {/* <div>
            <button onClick={()=>navigate("/cart")}>Cart</button>
        </div> */}
        <Link to="/cart">
            <button>My cart</button>
        </Link>
    
    </div>
    </>
  )
}

export default App
