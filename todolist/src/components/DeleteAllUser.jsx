import {clearAllUsers} from "../store/slices/UserSlice"; 
import {useDispatch} from "react-redux"


const DeleteAllUser = () => {
   const dispatch= useDispatch()

const deleteUsers = () => {
    dispatch(clearAllUsers());
}



    return (<>
       <button onClick={deleteUsers}>Delete All</button>
    </>
    )
}
export default DeleteAllUser;