import {profileAPI, ResultCodesEnum} from '../api/api'
import {FORM_ERROR} from 'final-form';
import React from "react";
import {firstLetterToLowerCase} from '../utils/core';
import {ErrorType, PhotosType, PostsType, ProfileType } from '../types/types';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: '',
  isFetching: false,
  editModeProfile: false
}
export type InitialStateType = typeof initialState


function profileReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case SET_USER_PROFILE:
    case SET_STATUS:
    case TOGGLE_IS_FETCHING:
    case EDIT_MODE_PROFILE:
      return { ...state, ...action.payload }

    case ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: action.newPostMessage,
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
        profile: {...state.profile, photos: action.photos} as ProfileType
      }

    default:
      return state
  }
}


type ActionsTypes = SetStatusType | SetUserProfileType | AddPostType | DeletePostType | SavePhotoSuccessType | ToggleIsFetchingType | EditModeProfileType

type SetStatusType = {
  type: typeof SET_STATUS
  payload: {status: string}
}
type SetUserProfileType = {
  type: typeof SET_USER_PROFILE
  payload: {profile: ProfileType | null}
}
type AddPostType = {
  type: typeof ADD_POST
  newPostMessage: string
}
type DeletePostType = {
  type: typeof DELETE_POST
  id: number
}
type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  payload: {isFetching: boolean}
}
type EditModeProfileType = {
  type: typeof EDIT_MODE_PROFILE
  payload: {editModeProfile: boolean}
}


export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, payload: {status}})
export const setUserProfile = (profile: ProfileType | null): SetUserProfileType => ({type: SET_USER_PROFILE, payload: {profile}})
export const addPost = (newPostMessage: string): AddPostType => ({type: ADD_POST, newPostMessage})
export const deletePost = (id: number): DeletePostType => ({type: DELETE_POST, id: id})
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})
const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingType  => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})
export const editModeProfile = (editModeProfile: boolean): EditModeProfileType => ({type: EDIT_MODE_PROFILE, payload: {editModeProfile}})


type ThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

export function getUserProfile(userId: number): ThunkType {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getProfile(userId)
      dispatch(setUserProfile(data))
    } catch (e) {
      throw e
    }
  }
}

export function getStatus(userId: number): ThunkType {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getUserStatus(userId)
      dispatch(setStatus(data))
    } catch (e) {
      throw e
    }
  }
}

export function updateStatus(status: string): ThunkType {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.updateStatus(status)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status))
      }
    } catch (e) {
      throw e
    }
  }
}

export function savePhoto(photo: Blob): ThunkType {
  return async (dispatch: any) => {
    try {
      dispatch(toggleIsFetching(true))
      const data = await profileAPI.savePhoto(photo)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(data.data.photos))
        dispatch(toggleIsFetching(false))
      }
    } catch (e) {
      throw e
    }
  }
}

export function saveProfile(profile: ProfileType): ThunkType<Promise<void | ErrorType>> {
  return async (dispatch: any, getState: any) => {
    try {
      const data = await profileAPI.saveProfile(profile)

      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(getState().auth.userId))
        dispatch(editModeProfile(false))
      } else if (data.resultCode === ResultCodesEnum.Error) {
        const messages = data.messages.map((msg: any, ind: any) => <span key={ind}>{msg}</span>)
        const fieldsErrors = data.messages.reduce((acc: any, msg: any) => {
          const index = msg.indexOf('->') + 2
          const contact = firstLetterToLowerCase(msg.slice(index, -1))
          acc[contact] = true
          return acc
        }, {})
        return { [FORM_ERROR]: messages, contacts: fieldsErrors }
      }
    } catch (e) {
      throw e
    }
  }
}



export default profileReducer
