// import {createSlice} from "@reduxjs/toolkit"

// const initialState={
//     currentUser:{
//         username:null
//     },
//     user:""
// }

// const auuthSlice=createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         loginUser:(state,action)=>{
//             state.currentUser.username=action.payload.username
//         },
//         logoutUser:(state)=>{
//             state.currentUser.username=null;
//         }
//     }
// })

// export const {loginUser,logoutUser}=auuthSlice.actions;

// export default auuthSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     currentUser: {
//         username: null,
//         role: null // Adding role field
//     },
//     user: ""
// }

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         loginUser: (state, action) => {
//             state.currentUser.username = action.payload.username;
//             state.currentUser.role = action.payload.role; // Assigning role
//         },
//         logoutUser: (state) => {
//             state.currentUser.username = null;
//             state.currentUser.role = null; // Resetting role
//         }
//     }
// })

// export const { loginUser, logoutUser } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const loadAuthState = () => {
  try {
    const serializedAuthState = localStorage.getItem('authState');
    if (serializedAuthState === null) {
      return undefined;
    }
    return JSON.parse(serializedAuthState);
  } catch (err) {
    return undefined;
  }
};

const saveAuthState = (state) => {
  try {
    const serializedAuthState = JSON.stringify(state);
    localStorage.setItem('authState', serializedAuthState);
  } catch {
    // Ignore write errors
  }
};

const initialState = loadAuthState() || {
  currentUser: {
    username: null,
    role: null
  },
  user: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser.username = action.payload.username;
      state.currentUser.role = action.payload.role;
      saveAuthState(state);
    },
    logoutUser: (state) => {
      state.currentUser.username = null;
      state.currentUser.role = null;
      saveAuthState(state);
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

