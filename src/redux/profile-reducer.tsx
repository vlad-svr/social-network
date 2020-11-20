import {profileAPI, ResultCodesEnum} from '../api/api'
import {FORM_ERROR} from 'final-form';
import React from "react";
import {firstLetterToLowerCase} from '../utils/core';
import {ErrorType, PhotosType, PostsType, ProfileType } from '../types/types';
import {ThunkAction} from "redux-thunk";
import {AppStateType, InfernActionsTypes} from "./redux-store";

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


type ActionsTypes = InfernActionsTypes<typeof actions>


export const actions = {
  setStatus: (status: string) => ({type: SET_STATUS, payload: {status}} as const),
  setUserProfile: (profile: ProfileType | null) => ({type: SET_USER_PROFILE, payload: {profile}} as const),
  addPost: (newPostMessage: string) => ({type: ADD_POST, newPostMessage} as const),
  deletePost: (id: number) => ({type: DELETE_POST, id: id} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const),
  editModeProfile: (editModeProfile: boolean) => ({type: EDIT_MODE_PROFILE, payload: {editModeProfile}} as const)
}



type ThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

export function getUserProfile(userId: number): ThunkType {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getProfile(userId)
      dispatch(actions.setUserProfile(data))
    } catch (e) {
      throw e
    }
  }
}

export function getStatus(userId: number): ThunkType {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getUserStatus(userId)
      dispatch(actions.setStatus(data))
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
        dispatch(actions.setStatus(status))
      }
    } catch (e) {
      throw e
    }
  }
}

export function savePhoto(photo: Blob): ThunkType {
  return async (dispatch: any) => {
    try {
      dispatch(actions.toggleIsFetching(true))
      const data = await profileAPI.savePhoto(photo)
      if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
        dispatch(actions.toggleIsFetching(false))
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
        dispatch(actions.editModeProfile(false))
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
