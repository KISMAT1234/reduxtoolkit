import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
name:"user",
initialState:[],
reducers:{
    addUser(state,action){
        state.push(action. payload );
     },
    removeUser(state, action){},
    deleteUser(state, action){},
},
});

export default userSlice.reducer;
export const {addUser}  = userSlice.actions;  //we can export specific actions using this syntax
