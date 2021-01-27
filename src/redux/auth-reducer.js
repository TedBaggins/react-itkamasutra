import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}
export const getCaptchaUrlAC = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl: captchaUrl
    }
}

// export const getAuthUserData = () => {
//     return (dispatch) => {
//         return authAPI.authMe()
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     let {id, login, email} = response.data.data;
//                     dispatch(setAuthUserData(id, email, login, true));
//                 }
//             });
//     }
// }
export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}
export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            // dispatch(stopSubmit("login", {_error: "Incorrect email or password"}));
            dispatch(stopSubmit("login", {_error: message}));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}
export const getCaptchaUrlTC = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl();
        let captchaUrl = response.data.url;
        dispatch(getCaptchaUrlAC(captchaUrl));
    }
}