import * as axios from 'axios'

const API_URL = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = '7a7d1094-bcd3-422b-83b0-47a00337a368'

const getData = (response) => response.data

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'API-KEY': API_KEY,
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then(getData)
  },

  checkFollower(id) {
    return instance.get(`/follow/${id}`).then(getData)
  },

  follow(id) {
    return instance.post(`/follow/${id}`).then(getData)
  },

  unfollow(id) {
    return instance.delete(`/follow/${id}`).then(getData)
  },
}

export const profileAPI = {
  getProfile(id) {
    return instance.get(`/profile/${id}`).then(getData)
  },

  getUserStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then(getData)
  },

  updateStatus(status) {
    return instance.put(`/profile/status`, { status }).then(getData)
  },

  savePhoto(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile)
    return instance.put('/profile/photo', formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(getData)
  },

  saveProfile(profile) {
    return instance.put('/profile', profile).then(getData)
  }
}

export const authAPI = {
  isAuth() {
    return instance.get(`/auth/me`).then(getData)
  },

  login(email, password, rememberMe) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe })
      .then(getData)
  },

  logout() {
    return instance.delete(`/auth/login`).then(getData)
  },

  captcha() {
    return instance.get(`/security/get-captcha-url`).then(getData)
  },
}
