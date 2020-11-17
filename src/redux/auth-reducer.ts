import {authAPI, profileAPI, securityAPI} from '../api/api'
import { FORM_ERROR } from 'final-form'
import {ProfileType} from "../types/types";


const SET_AUTH_USER_DATA: string = 'social-network/auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA: string = 'social-network/auth/SET_CAPTCHA'



const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  profile: null as ProfileType | null,
  captchaUrl: null as string | null,
  isAuth: false,
}

export type InitialStateType = typeof initialState

function authReducer(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_CAPTCHA:
      return {...state, ...action.payload}

    default:
      return state
  }
}


type SetAuthUserDataPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  profile: ProfileType | null,
  isAuth: boolean
}
type SetAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA,
  payload: SetAuthUserDataPayloadType,
}

const setAuthUserData =
    (userId: number | null, email: string | null, login: string | null, profile: ProfileType | null, isAuth: boolean): SetAuthUserDataType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, profile, isAuth },
})

type SetCaptchaType = {
  type: typeof SET_CAPTCHA,
  payload: {captchaUrl: string | null}
}

export const setCaptcha = (captchaUrl: string | null): SetCaptchaType => ({type: SET_CAPTCHA, payload: {captchaUrl}})


export function getAuthUserData() {
  return async (dispatch: any) => {
    try {
      const data = await authAPI.isAuth()
      if (data.resultCode === 0) {
        const {id, email, login} = data.data
        const profile = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, profile, true))
      }
    } catch (e) {
      throw e
    }
  }
}

export function getCaptchaUrl() {
  return async function (dispatch: any) {
    const captcha = await securityAPI.getCaptchaUrl()
    dispatch(setCaptcha(captcha.url))
  }
}

export function login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
  return async (dispatch: any) => {
    try {
      const data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setCaptcha(null))
      } else if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
        return { [FORM_ERROR]: data.messages[0] }
      } else {
        const message =
            data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка'
        return { [FORM_ERROR]: message }
      }
    } catch (e) {
      throw e
    }
  }
}

export function logout() {
  return async (dispatch: any) => {
    try {
      const data = await authAPI.logout()
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, null, false))
      }
    } catch (e) {
      throw e
    }
  }
}

export default authReducer
