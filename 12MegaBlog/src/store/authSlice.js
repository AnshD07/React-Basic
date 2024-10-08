import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    status: false,
    userData: null
} 

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;   //! you are logout
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions; //! reducers ni andar na method chhe aene action kevay bhai

export default authSlice.reducer;

