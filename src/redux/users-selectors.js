export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getUsersSum = (state) => {
    return state.usersPage.usersSum
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFirstNumberPanel = (state) => {
    return state.usersPage.firstNumberPanel
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

