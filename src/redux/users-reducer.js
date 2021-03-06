import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState = { 
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW: 
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: 
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING: 
            return {
                ...state, 
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW, 
        userId: userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, 
        users: users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        // dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.unfollow(userId);
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}
