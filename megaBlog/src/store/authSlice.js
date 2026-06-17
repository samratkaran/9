import {creatSlice} from "@reduxjs/toolkit"

const intialState = {
    status:false,
    userData:null
}

const authSlice = creatSlice({
    name:"auth",
    intialState,
    reducers:{
        login: (state ,action)=>{
            state.status = true;
            state.userData = action.payload.userData
        },
        logout:(state)=>{
            state.status = false
            state.userData = null
        }
    }

})

export const {login , logout} = authSlice.actions

export default authSlice.reducers