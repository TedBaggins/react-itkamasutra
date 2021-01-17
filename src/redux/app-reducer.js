import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION-SUCCESS';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializationSuccess = () => {
    return {
        type: INITIALIZATION_SUCCESS
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
                dispatch(initializationSuccess());
            });
    }
}
