import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import profileReducer from "./profile-reducer.js"
import messageReducer from "./message-reducer.js"
import usersReducer from "./users-reducer.js"
import authReducer from "./auth-reducer.js";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer.js";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;