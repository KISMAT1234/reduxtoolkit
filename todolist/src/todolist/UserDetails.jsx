import React from "react";
// import {DeleteAllUser} from "./DeleteAllUser";
import {fakeUserData} from "../api/index"
import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/UserSlice";

const UserDetails = () => {
    const dispatch= useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };


    return(
         <>
            <h1>List of users Details</h1>
            <button onClick={()=>addNewUser(fakeUserData())}>Add New Users</button>
           {/* <DeleteAllUser/> */}
        </>
    )

}
    export default UserDetails;