import {connect} from "react-redux";
import UsersApiClassComponent from "./UsersApiClassComponent";
import {follow, unfollow, setCurrentPage, 
    setFirstNumberPanel, getUsersThunkCreator, 
    unfollowThunkCreator, followThunkCreator} from "../../redux/users-reducer";
import {getUsers, getPageSize, getUsersSum, 
    getCurrentPage, getFirstNumberPanel, getIsFetching, getFollowingInProgress} from "../../redux/users-selectors.js"

let mapStateToProps = (state) => {    
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        usersSum: getUsersSum(state),
        currentPage: getCurrentPage(state),
        firstNumberPanel: getFirstNumberPanel(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),          
        }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followActionCreator(userID));
//         },        
//         unfollow: (userID) => {
//              dispatch(unfollowActionCreator(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (CurrentPage) => {
//             dispatch(setCurrentPageActionCreator(CurrentPage));
//         },
//         setUsersSum: (usersSum) => {
//             dispatch(usersSumActionCreator(usersSum));
//         },
//         setIsFetching: (value) => {
//             dispatch(toggleIsFetchingActionCreator(value));
//         }
//     }
// }
export default connect(mapStateToProps, 
    {
        follow,        
        unfollow,        
        setCurrentPage,                
        setFirstNumberPanel,        
        getUsersThunkCreator,
        unfollowThunkCreator,
        followThunkCreator      
    }
    )(UsersApiClassComponent);