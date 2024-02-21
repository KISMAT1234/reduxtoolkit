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
            return <div className="flex justify-between mt-5" key={id}>
                <div>

                {user}
                </div>
                <div>

                <button className="" onClick={()=> deleteUser(id)}>delete</button>
                </div>
            </div>
          })
        }

        </>
    )
}

export default DisplayUsers;