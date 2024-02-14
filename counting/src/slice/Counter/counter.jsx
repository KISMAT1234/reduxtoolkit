import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Counterslice'



 function Counter() {
  const count = useSelector((data) => {
    return data.counter.value
  })
  const dispatch = useDispatch()

  return (
    <>
    <div>
      <div className="">
        
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button><br></br>
        <span>{count}</span>

      </div>
    </div>
  </>
  )
}

export default Counter;