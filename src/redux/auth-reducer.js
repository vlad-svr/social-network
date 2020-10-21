import { SET_AUTH_USER_DATA } from './types'
import { authAPI, profileAPI } from '../api/api'
import { setAuthUserData } from './actions'

const initialState = {
  userId: null,
  email: null,
  login: null,
  profile: {},
  isAuth: false,
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default:
      return state
  }
}

export function getAuthUserData() {
  return (dispatch) => {
    authAPI.isAuth().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        profileAPI.getProfile(id).then((profile) => {
          dispatch(setAuthUserData(id, email, login, profile))
        })
      }
    })
  }
}

export default authReducer
