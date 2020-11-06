import { authAPI, profileAPI } from '../api/api'
import { FORM_ERROR } from 'final-form'


const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA = 'social-network/auth/SET_CAPTCHA'


const initialState = {
  userId: null,
  email: null,
  login: null,
  profile: {},
  captcha: false,
  isAuth: false,
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {...state, ...action.payload}

    case SET_CAPTCHA:
      return {...state, captcha: action.captcha}

    default:
      return state
  }
}


export const setAuthUserData = (userId, email, login, profile, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, profile, isAuth },
})

export const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})


export function getAuthUserData() {
  return async (dispatch) => {
    try {
      const data = await authAPI.isAuth()
      if (data.resultCode === 0) {
        const {id, email, login} = data.data
        const profile = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, profile, true))
      }
    } catch (e) {
      throw Error(e)
    }
  }
}

export function login(email, password, rememberMe, captcha) {
  return async (dispatch) => {
    try {
      const data = await authAPI.login(email, password, rememberMe, captcha)
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else if (data.resultCode === 10) {
        const captcha = await authAPI.captcha()
        dispatch(setCaptcha(captcha.url))
        return { [FORM_ERROR]: data.messages[0] }
      } else {
        const message =
            data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка'
        return { [FORM_ERROR]: message }
      }
    } catch (e) {
      throw Error(e)
    }
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      const data = await authAPI.logout()
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, {}, false))
      }
    } catch (e) {
      throw Error(e)
    }
  }
}

export default authReducer
