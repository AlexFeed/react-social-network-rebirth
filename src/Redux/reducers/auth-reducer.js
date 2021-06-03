import {authAPI, profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photo: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {...state, ...action.data}

        default :
            return state
    }
}

export const setAuthUserDataAC = (userId, email, login, photo, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, photo, isAuth}
});

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


export const login = (email, password, rememberMe) => {
    return dispatch => {
        authAPI.login(email, password, rememberMe).then(
            loginData => {
                if (loginData.resultCode === 0) {
                    dispatch(getAuthData());
                } else {
                    let message = loginData.messages.length > 0 ? loginData.messages[0]  :  'Something went wrong';
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

export default authReducer