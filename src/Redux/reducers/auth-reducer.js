import {authAPI, profileAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL';
const SET_SUBMIT_BUTTON_DISABLED ='SET-SUBMIT-BUTTON-DISABLED'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photo: null,
    captchaURL: null,
    isLoginButtonDisabled: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {...state, ...action.data}

        case GET_CAPTCHA_URL :
            return {...state, captchaURL: action.captchaURL}

        case SET_SUBMIT_BUTTON_DISABLED :
            return {...state, isLoginButtonDisabled: action.isButtonDisabled}

        default :
            return state
    }
}

const setAuthUserDataAC = (userId, email, login, photo, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, photo, isAuth}
});
const getCaptchaURLAC = (captchaURL) => ({type: GET_CAPTCHA_URL, captchaURL});
const loginButtonDisabledAC = (isButtonDisabled) => ({type: SET_SUBMIT_BUTTON_DISABLED, isButtonDisabled});

export const getAuthData = () => {
    return dispatch => {
        return authAPI.getAuthUserData().then(
            authData => {
                if (authData.resultCode === 0) {
                    const outerDispatch = dispatch
                    return profileAPI.getProfileData(authData.data.id).then(
                        profileData => {
                            outerDispatch(setAuthUserDataAC(authData.data.id, authData.data.email, authData.data.login, profileData.photos.small, true));
                        }
                    )
                }
            }
        )
    };
};


export const login = (email, password, rememberMe, captcha) => {
    return dispatch => {
        dispatch(loginButtonDisabledAC(true));
        authAPI.login(email, password, rememberMe, captcha).then(
            loginData => {
                dispatch(loginButtonDisabledAC(false));
                if (loginData.resultCode === 0) {
                    dispatch(getAuthData());
                } else {
                    if (loginData.resultCode === 10) {
                        dispatch(getCaptchaURL());
                    }
                    const message = loginData.messages[0] ? loginData.messages[0] : 'Something went wrong';
                    dispatch(stopSubmit('login', {_error: message}));
                }
            }
        )
    };
};

export const logout = () => {
    return dispatch => {
        authAPI.logout().then(
            loginData => {
                if (loginData.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, null, false));
                }
            }
        )
    };
};

export const getCaptchaURL = () => {
    return dispatch => {
        dispatch(loginButtonDisabledAC(true));
        securityAPI.getCaptchaUrl().then(
            captchaData => {
                dispatch(getCaptchaURLAC(captchaData.url));
                dispatch(loginButtonDisabledAC(false));
            }
        )
    };
};

export default authReducer;