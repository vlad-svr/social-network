import { profileAPI } from '../api/api'
import {FORM_ERROR} from 'final-form';
import {firstLetterToLowerCase} from '../utils/core';
import React from 'react';


const ADD_POST = 'social-network/profile/ADD_POST'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const EDIT_MODE_PROFILE = 'social-network/users/EDIT_MODE_PROFILE'




const initialState = {
  posts: [
    { id: 1, message: 'Hi, how  are you?', likesCount: 123 },
    { id: 2, message: "Hi, i'm good!", likesCount: 27 },
    { id: 3, message: 'Чем занимаешься?', likesCount: 2 },
  ],
  profile: null,
  status: '',
  isFetching: false,
  editModeProfile: false
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
    case SET_STATUS:
    case TOGGLE_IS_FETCHING:
    case EDIT_MODE_PROFILE:
      return { ...state, ...action.payload }

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

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }

    default:
      return state
  }
}


export const setStatus = (status) => ({type: SET_STATUS, payload: {status}})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, payload: {profile}})

export const addPost = (newPost) => ({type: ADD_POST, newPost})

export const deletePost = (id) => ({type: DELETE_POST, id: id})

const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})

export const editModeProfile = (editModeProfile) => ({type: EDIT_MODE_PROFILE, payload: {editModeProfile}})



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

export function savePhoto(photo) {
  return async (dispatch) => {
    try {
      dispatch(toggleIsFetching(true))
      const data = await profileAPI.savePhoto(photo)
      if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
        dispatch(toggleIsFetching(false))
      }
    } catch (e) {
      throw Error(e)
    }
  }
}

export function saveProfile(profile) {
  return async (dispatch, getState) => {
    try {
      const data = await profileAPI.saveProfile(profile)
      if (data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId))
        dispatch(editModeProfile(false))
      } else if (data.resultCode === 1) {
        const messages = data.messages.map((msg, ind) => <span key={ind}>{msg}</span>)
        const fieldsErrors = data.messages.reduce((acc, msg) => {
          const index = msg.indexOf('->') + 2
          const contact = firstLetterToLowerCase(msg.slice(index, -1))
          acc[contact] = true
          return acc
        }, {})
        return { [FORM_ERROR]: messages, contacts: fieldsErrors }
      }
    } catch (e) {
      throw Error(e)
    }
  }
}



export default profileReducer
