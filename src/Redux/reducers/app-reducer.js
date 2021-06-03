import {getAuthData} from "./auth-reducer";

const SET_INITIALIZATION = 'SET-INITIALIZATION';

let initialState = {
    initialization: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION :
            return {...state, initialization: true}

        default :
            return state
    }
}

export const initializationSucsess = () => ({type: SET_INITIALIZATION});

export const initialize = () => {
    return dispatch => {
        let authPromise = dispatch(getAuthData());
        Promise.all([authPromise]).then(
            () => dispatch(initializationSucsess())
        )
    }
}

export default appReducer;

