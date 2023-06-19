import userPhoto from "../assets/images/user.png"
import {profileAPI} from "../api/api.js"

const PROFILE_POST = "PROFILE-POST";
const UPDATE_AVA = "UPDATE_AVA";
const ABOUT_ME = "ABOUT_ME";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const UPDATE_USER_ID = "UPDATE_USER_ID";
const SET_STATUS = "SET_STATUS";
const TEXT_FROM_TEXTAREA_TO_POST = "TEXT_FROM_TEXTAREA_TO_POST";
const DELETE_POST_BY_ID = "DELETE_POST_BY_ID"

let initialState = {
    userID: 2,
    myAva: userPhoto,
    aboutMe:"здесь ничего не написано",    
    postsInMainPage: [
        "прив",     
    ],
    profile: {photos: {small: "https://s1.narvii.com/image/ryjgek6wsqpdydpjxwl5xm3irpibcxzc_hq.jpg"}},
    status: "пока нет статуса",
}


const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_AVA:{
            return {...state, myAva: action.picture}
        }
        case ABOUT_ME:{ 
            return {...state, aboutMe: action.value};
        }
        case UPDATE_PROFILE:{                                       
            return {...state, profile: action.value};
        }
        case UPDATE_USER_ID:{
            return {...state, userID: action.number};
        }  
        case SET_STATUS:{
            return {...state, status: action.status};
        }
        case TEXT_FROM_TEXTAREA_TO_POST:{                    
            return {...state, postsInMainPage: state.postsInMainPage.filter(i => i != action.id)};
        }
        case DELETE_POST_BY_ID: {
            let stateCopy = {...state};
            stateCopy.postsInMainPage = [...state.postsInMainPage]
            stateCopy.postsInMainPage.splice((action.id), 1);                       
            return stateCopy;
        }        
        default: return state;
    }
}

export const clickOnPostButton = (text) => ({type: TEXT_FROM_TEXTAREA_TO_POST, text});
export const updateAva = (picture) => ({type: UPDATE_AVA, picture});
export const updateAboutMe = (value) => ({type: ABOUT_ME, value});
export const updateProfile = (value) => ({type: UPDATE_PROFILE, value});
export const updateUserID = (number) => ({type: UPDATE_USER_ID, number});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePostById = (id) => ({type: DELETE_POST_BY_ID, id});

export const getProfileThunkCreator = (userId) => (dispatch) => {    
    return profileAPI.getProfile(userId).then(data => dispatch(updateProfile(data)));
}
export const getProfileStatusThunkCreator = (userId) => (dispatch) => {       
    return profileAPI.getStatus(userId).then(data =>  {             
        dispatch(setStatus(data))}
        );
}
export const updateProfileStatusThunkCreator = (status) => (dispatch) => {    
    return profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(data))
            }
        }        
        );
}
export const updateAvaThunkCreator = (file) => (dispatch) => {         
    return profileAPI.updateAva(file).then(data => {        
        console.log(data)
        if (data.resultCode === 0) {           
            alert("картинка на сервере")
            }
        }        
        );
}

export default profileReducer;
