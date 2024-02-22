import React from 'react'
import {useSelector} from 'react-redux'

const Cartpage= () => {

    const data = useSelector((state) =>{
        state.cart
    })

  return (
    <>
    <div>${data}</div>
    </>
  )
}

export default Cartpage;