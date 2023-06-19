import {usersAPI} from "../api/api.js"

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const USERS_SUM = "USERS_SUM";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const PAGE_IS_ACTIVE = "PAGE_IS_ACTIVE";
const FIRST_NUMBER = "FIRST_NUMBER";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = { 
    users: [],
    pageSize: 7,
    usersSum: 0,
    currentPage: 1,
    firstNumberPanel: 1,
    isFetching: false,
    followingInProgress: 0,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => {
				if(u.id === action.userID){
				return {...u, followed: true};
				}	
				return u;			    
            })
            }
        case UNFOLLOW:
            return {...state, users: state.users.map(u => {
                if (u.id === action.userID){
                    return {...u, followed: false}
                }
				return u;
            })
            }
            case SET_USERS:
                // return {...state, users: [...state.users, ...action.users]}
                return {...state, users: action.users}

            case CURRENT_PAGE:
                // return {...state, users: [...state.users, ...action.users]}
                return {...state, currentPage: action.currentPage}

            case USERS_SUM:
                // return {...state, users: [...state.users, ...action.users]}
                return {...state, usersSum: action.usersSum}

            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.value}    

            case PAGE_IS_ACTIVE:
                return {...state, active: action.value}

            case FIRST_NUMBER:
                return {...state, firstNumberPanel: action.value}

            case TOGGLE_IS_FOLLOWING_PROGRESS:
                return {...state, followingInProgress: action.value}

        default: 
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage});
export const setUsersSum = (usersSum) => ({type: USERS_SUM, usersSum});
export const setIsFetching = (value) => ({type: TOGGLE_IS_FETCHING, value});
export const setFirstNumberPanel = (value) => ({type: FIRST_NUMBER, value});
export const toggleIsFollowingProgress = (value) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, value});

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsFetching(true));		
    usersAPI.getUsers(currentPage, pageSize)
    .then(data => {				
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));			
        dispatch(setUsersSum(data.totalCount));
    });
}

export const unfollowThunkCreator = (userID) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(userID));
    usersAPI.unfollowUser(userID)
    .then(data => {
        if (data.resultCode == 0){
            dispatch(unfollow(userID));
        }
        dispatch(toggleIsFollowingProgress(0));
    })			
}

export const followThunkCreator = (userID) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(userID));
    usersAPI.followUser(userID)
    .then(data => {										
        if (data.resultCode == 0){
            dispatch(follow(userID));
        }	
        dispatch(toggleIsFollowingProgress(0));						
    });
}

export default usersReducer;