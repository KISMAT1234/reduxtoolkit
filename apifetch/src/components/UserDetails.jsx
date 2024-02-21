import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import {fakeUserData} from "../api/index"
import {useDispatch} from "react-redux";
import {addUser} from "../store/slices/UserSlice";
import DisplayUsers from "../components/DisplayUsers"



const UserDetails = () => {
    const dispatch= useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };


    return(
         <>
            <h1 className="text-8xl">List of users Details</h1>
            <div className="mt-10">
               <button onClick={()=>addNewUser(fakeUserData())} className="mr-10">Add New Users</button>
              <DeleteAllUser/>
            </div>
            <div>
              <ul>
                <DisplayUsers/>
              </ul>
            </div>
           
        </>
    )

}
    export default UserDetails;
