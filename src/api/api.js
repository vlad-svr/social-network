import * as axios from 'axios';

const API_URL = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = '2a71bb4e-0591-4c51-ba81-021f6841912f'

const getData = response => response.data

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "API-KEY": API_KEY
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(getData)
    },

    follow(id) {
        return instance.post(`/follow/${id}`).then(getData)
    },

    unfollow(id) {
        return instance.delete(`/follow/${id}`).then(getData)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`/profile/${id}`).then(getData)
    },
}

export const authAPI = {
    isAuth() {
        return instance.get(`/auth/me`).then(getData)
    }
}
