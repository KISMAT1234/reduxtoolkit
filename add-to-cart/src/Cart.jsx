import React from 'react'
import {useSelector} from 'react-redux'

const Cartpage= () => {

    const data = useSelector((state) =>{
        state.cart.value
    })

  return (
    <>

    <div>Cartpage</div>
    </>
  )
}

export default Cartpage