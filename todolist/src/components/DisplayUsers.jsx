import {useSelector, useDispatch} from "react-redux";
import {removeUser} from "../store/slices/UserSlice";
function DisplayUsers(){

  const dispatch = useDispatch();

const data= useSelector((state)=>{ 
   return state.users;
})

const deleteUser = (id) => {
  dispatch(removeUser(id))
}


    return(
        <>
        {
          data.map((user, id)=>{
            return <li key={id}>
                {user}
                <button className="" onClick={()=> deleteUser(id)}>delete</button>
            </li>
          })
        }

        </>
    )
}

export default DisplayUsers;