import {authAPI} from "../api/api.js"
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = { 
    email: null,
    userId: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}       
        default: 
            return state;
    }
}



export const setAuthUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, data: {email, userId, login, isAuth} });
export const getAuthUserDataThunkCreator = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (data.resultCode === 0){					
            let {email, id, login} = data.data;
            dispatch(setAuthUserData(email, id, login, true));			
        }	
    })    
} 
export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {       
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0){					
            dispatch(getAuthUserDataThunkCreator());
        } else {
            dispatch(stopSubmit('login', {_error: data.messages[0]}));
        }	
    })		
} 
export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0){					
            dispatch(setAuthUserData(null, null, null, false));
        }	
        authAPI.sberBot().then(data => {console.log(data)})
    })		
} 

export default authReducer;