import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "2ca73e8f-2c96-409b-8210-9225a05a6829"}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
                response => response.data
            )
        )
    },

    followUsers(userId, type) {
        return (
            instance[type](`follow/${userId}`).then(
                response => response.data
            )
        )
    },
}

export const profileAPI = {
    getProfileData(userId) {
        return (
            instance.get(`profile/${userId}`).then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`).then(response => response.data)
        )
    },

    updateStatus(status) {
        return (
            instance.put('profile/status', {status: status}).then(response => response.data)
        )
    }
}

export const authAPI = {
    getAuthUserData() {
        return (
            instance.get(`auth/me`).then(response => response.data)
        )
    },

    login(email, password, rememberMe = false) {
        return (
            instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
        )
    },

    logout() {
        return (
            instance.delete('auth/login').then(response => response.data)
        )
    }
}

