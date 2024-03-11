import React from 'react'
import {useSelector} from 'react-redux'

const Cartpage= () => {

    const data = useSelector((state) =>{
         return state.myCart;
    })
    console.log(data)

  return (
    <>
    <h1>Mycart</h1>
    <div>
      {data.map((item,id)=>(
         <div key={id}>
          <div>{item.name}</div>
          <div>{item.quantity}</div>
        </div>
      )
      )}
    </div>
    </>
  )
}

export default Cartpage;