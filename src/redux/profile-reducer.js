import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = { 
    postsData: [
        {id: 1, message: 'Hello there!', likesCount: 24},
        {id: 2, message: 'Your focus determines your reality.', likesCount: 3}
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost: newPost
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId: postId
    }
}


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data));
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}

export default profileReducer;

