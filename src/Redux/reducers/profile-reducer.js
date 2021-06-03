import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const DELETE_POST = 'DELETE-POST'
const UPDATE_PHOTO = 'UPDATE-PHOTO'
const UPDATE_PROFILE_DATA = 'UPDATE-PROFILE-DATA'

let initialState = {
    postsData: [
        {
            message: "1 message Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus eget sem eget eleifend.",
            likes: 32,
            id: 1
        },

        {message: "2 message", likes: 14, id: 2}
    ],
    profile: null,
    status: '',
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                message: action.newPostText,
                likes: 0,
                id: state.postsData.length + 1
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }

        case DELETE_POST :
            return {
                ...state, postsData: state.postsData.filter(el => el.id !== action.postId)
            }

        case SET_USER_PROFILE :
            return {...state, profile: action.profile}

        case SET_STATUS :
            return {...state, status: action.status}

        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching};

        case UPDATE_PHOTO :
            return {...state, profile: {...state.profile, photos: action.photo}}

        default:
            return state
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePostAC = (postId) => ({type: ADD_POST, postId});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status) => ({type: SET_STATUS, status});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const updatePhotoAC = (photo) => ({type: UPDATE_PHOTO, photo});

export const setUserProfile = (userId) => {
    return dispatch => {
        profileAPI.getProfileData(userId).then(
            profileData => {
                dispatch(setUserProfileAC(profileData))
            }
        )
    }
};

export const setStatus = (userId) => {
    return dispatch => {
        profileAPI.getStatus(userId).then(
            status => dispatch(setStatusAC(status || 'Здесь нет статуса!'))
        )
    }
};

export const updateStatus = (status) => {
    return dispatch => {
        dispatch(toggleIsFetchingAC(true))
        profileAPI.updateStatus(status).then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(toggleIsFetchingAC(false));
                    dispatch(setStatusAC(status));
                }
            }
        )
    }
};

export const updatePhoto = (photoFile) => {
    return dispatch => {
        profileAPI.updatePhoto(photoFile).then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(updatePhotoAC(response.photos))
                }
            }
        )
    }
};


export const updateProfileData = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await profileAPI.updateProfile(profile);

        if (response.resultCode === 0) {
            dispatch(setUserProfile(userId));
        } else {
            dispatch(stopSubmit("editProfileData", {_error: response.messages[0]}));
            return Promise.reject(response.messages[0]);
        }

    }
};

export default profileReducer;