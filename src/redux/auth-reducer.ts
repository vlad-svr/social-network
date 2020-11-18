import {authAPI, profileAPI, ResultCodeForCaptchaEnum, ResultCodesEnum, securityAPI} from '../api/api'
import {FORM_ERROR} from 'final-form'
import {ErrorType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA = 'social-network/auth/SET_CAPTCHA'



const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  profile: null as ProfileType | null,
  captchaUrl: null as string | null,
  isAuth: false,
}

export type InitialStateType = typeof initialState

function authReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_CAPTCHA:
      return {...state, ...action.payload}

    default:
      return state
  }
}


type ActionsTypes = SetAuthUserDataType | SetCaptchaType

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
type SetCaptchaType = {
  type: typeof SET_CAPTCHA,
  payload: {captchaUrl: string | null}
}

const setAuthUserData =
    (userId: number | null, email: string | null, login: string | null, profile: ProfileType | null, isAuth: boolean): SetAuthUserDataType => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, profile, isAuth },
})

export const setCaptcha = (captchaUrl: string | null): SetCaptchaType => ({type: SET_CAPTCHA, payload: {captchaUrl}})


type ThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

export function getAuthUserData(): ThunkType {
  return async (dispatch) => {
    try {
      const data = await authAPI.isAuth()
      if (data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = data.data
        const profile = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, profile, true))
      }
    } catch (e) {
      throw e
    }
  }
}

export function getCaptchaUrl(): ThunkType {
  return async function (dispatch) {
    const captcha = await securityAPI.getCaptchaUrl()
    dispatch(setCaptcha(captcha.url))
  }
}

export function login(email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType<Promise<void | ErrorType>> {
  return async (dispatch) => {
    try {
      const data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
        dispatch(setCaptcha(null))
      } else if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
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

export function logout(): ThunkType {
  return async (dispatch) => {
    try {
      const data = await authAPI.logout()
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, null, false))
      }
    } catch (e) {
      throw e
    }
  }
}

export default authReducer
