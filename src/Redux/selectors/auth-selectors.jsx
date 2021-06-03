export const authSelectors = {
    getUserId: (state) => {
        return state.auth.userId
    },

    getIsAuth: (state) => {
        return state.auth.isAuth
    },

    getLogin: (state) => {
        return state.auth.login
    }
}



