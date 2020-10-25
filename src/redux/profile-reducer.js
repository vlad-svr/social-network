import { ADD_POST, SET_STATUS, SET_USER_PROFILE } from './types'
import { profileAPI } from '../api/api'
import { setStatus, setUserProfile } from './actions'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how  are you?', likesCount: 123 },
    { id: 2, message: "Hi, i'm good!", likesCount: 27 },
    { id: 3, message: 'Чем занимаешься?', likesCount: 2 },
  ],
  profile: null,
  status: '',
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: action.newPost,
        likesCount: 0,
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
      }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }

    case SET_STATUS:
      return { ...state, status: action.status }

    default:
      return state
  }
}

export function getUserProfile(userId) {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data))
    })
  }
}

export function getStatus(userId) {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setStatus(data))
    })
  }
}

export function updateStatus(status) {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer
