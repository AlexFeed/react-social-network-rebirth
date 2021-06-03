import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';

let initialState = {
    usersData: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            };


        case SET_USERS :
            return {...state, usersData: action.usersData};

        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage};

        case SET_USERS_TOTAL_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFollowingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default :
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const setUsersAC = (usersData) => ({type: SET_USERS, usersData});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const toggleIsFollowingInProgressAC = (isFollowingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFollowingInProgress,
    userId
});

export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize).then(
            data => {
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
                dispatch(toggleIsFetchingAC(false));
            }
        );
    }
}

export const followClick = (userId, type) => {
    return dispatch => {
        dispatch(toggleIsFollowingInProgressAC(true, userId));
        usersAPI.followUsers(userId, type).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                } else {
                    alert('Что-то пошло ни так. Попробуйте войти на сайт');
                }
                dispatch(toggleIsFollowingInProgressAC(false, userId));
            }
        );
    }
}


export default usersReducer