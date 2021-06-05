import {getAuthData} from "./auth-reducer";

const SET_INITIALIZATION = 'SET-INITIALIZATION';
const SET_GLOBAL_ERROR = 'SET-GLOBAL-ERROR'

let initialState = {
    initialization: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION :
            return {...state, initialization: true}

        case SET_GLOBAL_ERROR :
            return {...state, globalError: action.globalError}

        default :
            return state
    }
}

const initializationSuccess = () => ({type: SET_INITIALIZATION});
const setGlobalErrorAC = (globalError) => ({type: SET_GLOBAL_ERROR, globalError});


export const initialize = () => {
    return dispatch => {
        const authPromise = dispatch(getAuthData());
        Promise.all([authPromise]).then(
            () => dispatch(initializationSuccess())
        )
    }
}

export const setGlobalError = (globalError) => {
    return dispatch => {
        dispatch(setGlobalErrorAC(globalError));
        window.setTimeout(
            () => dispatch(setGlobalErrorAC(null)),
            5000
        );
    }
}

export default appReducer;

