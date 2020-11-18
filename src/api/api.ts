import axios, {AxiosResponse} from 'axios'
import {ProfileType} from "../types/types";

const API_URL = 'https://social-network.samuraijs.com/api/1.0'
const API_KEY = '7a7d1094-bcd3-422b-83b0-47a00337a368'


const getData = (response: AxiosResponse) => response.data

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    'API-KEY': API_KEY,
  },
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum{
  CaptchaIsRequired = 10
}

type IsAuthType = {
  resultCode: ResultCodesEnum
  messages: Array<string>
  data: {
    id: number
    email: string
    login: string
  }
}
type LoginType = {
  resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum
  messages: Array<string>
  data: {
    userId: number
  }
}

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then(getData)
  },

  checkFollower(id: number) {
    return instance.get(`/follow/${id}`).then(getData)
  },

  follow(id: number) {
    return instance.post(`/follow/${id}`).then(getData)
  },

  unfollow(id: number) {
    return instance.delete(`/follow/${id}`).then(getData)
  },
}

export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`/profile/${id}`).then(getData)
  },

  getUserStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`).then(getData)
  },

  updateStatus(status: string) {
    return instance.put(`/profile/status`, { status }).then(getData)
  },

  savePhoto(imageFile: Blob) {
    const formData = new FormData();
    formData.append('image', imageFile)
    return instance.put('/profile/photo', formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(getData)
  },

  saveProfile(profile: ProfileType) {
    return instance.put('/profile', profile).then(getData)
  }
}

export const authAPI = {
  isAuth() {
    return instance.get(`/auth/me`).then<IsAuthType>(getData)
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe, captcha })
      .then<LoginType>(getData)
  },

  logout() {
    return instance.delete(`/auth/login`).then(getData)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`).then(getData)
  },
}
