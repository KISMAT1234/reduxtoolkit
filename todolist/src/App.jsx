
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {Link} from "react-router-dom"

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      {/* <Link to ="/">
        <button>Cart</button>
      </Link> */}
      <Link to ="">Cart</Link>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
