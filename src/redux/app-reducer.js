import {authAPI} from "../api/api.js"
import { stopSubmit } from "redux-form";
import {getAuthUserDataThunkCreator} from "./auth-reducer"

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = { 
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}       
        default: 
            return state;
    }
}



export const initializedSuccess = () => ({type: SET_INITIALIZED});
export const initializeThunkCreator = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    promise.then(() => {dispatch(initializedSuccess())})    
} 


export default appReducer;