import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'
const Todos = (id) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    dispatch(removeTodo(id))
  return (
<>
        {todos.map((todo, id)=>(
            <li key={todo.id}>
                {todo.text}
            <button onClick={()=>dispatch(removeTodo(id))}>remove</button>
            </li>
        ))}
</>    
  )
}

export default Todos