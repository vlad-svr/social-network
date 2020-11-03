import { SET_AUTH_USER_DATA, SET_CAPTCHA } from './types'
import { authAPI, profileAPI } from '../api/api'
import { setAuthUserData, setCaptcha } from './actions'
import { FORM_ERROR } from 'final-form'

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
      return {
        ...state,
        ...action.payload,
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      }

    default:
      return state
  }
}

export function getAuthUserData() {
  return (dispatch) => {
    return authAPI.isAuth().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        return profileAPI.getProfile(id).then((profile) => {
          dispatch(setAuthUserData(id, email, login, profile, true))
        })
      }
    })
  }
}

export function login(email, password, rememberMe, captcha) {
  return (dispatch) => {
    return authAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else if (data.resultCode === 10) {
        authAPI.captcha().then((data) => {
          dispatch(setCaptcha(data.url))
        })
        return { [FORM_ERROR]: data.messages[0] }
      } else {
        const message =
          data.messages.length > 0 ? data.messages[0] : 'Какая-то ошибка'
        return { [FORM_ERROR]: message }
      }
    })
  }
}

export function logout() {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, {}, false))
      }
    })
  }
}

export default authReducer
