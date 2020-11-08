import { profileAPI } from '../api/api'


const ADD_POST = 'social-network/profile/ADD_POST'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'


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

      return {...state, posts: [...state.posts, newPost]}

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id)
      }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }

    case SET_STATUS:
      return { ...state, status: action.status }

    default:
      return state
  }
}


export const setStatus = (status) => ({type: SET_STATUS, status})

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  profile: data,
})

export const addPost = (newPost) => ({type: ADD_POST, newPost})

export const deletePost = (idPost) => ({
  type: DELETE_POST,
  id: idPost
})


export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const data = await profileAPI.getProfile(userId)
      dispatch(setUserProfile(data))
    } catch (e) {
      throw Error(e)
    }
  }
}

export function getStatus(userId) {
  return async (dispatch) => {
    try {
      const data = await profileAPI.getUserStatus(userId)
      dispatch(setStatus(data))
    } catch (e) {
      throw Error(e)
    }
  }
}

export function updateStatus(status) {
  return async (dispatch) => {
    try {
      const data = await profileAPI.updateStatus(status)
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    } catch (e) {
      throw Error(e)
    }
  }
}

export default profileReducer
