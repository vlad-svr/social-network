import {AppStateType} from "./redux-store";


export const getIsAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getLoginSelector = (state: AppStateType) => {
    return state.auth.login
}

export const getPhotoAvatarSelector = (state: AppStateType) => {
    return state.auth.profile?.photos.small
}

export const getUserIdSelector = (state: AppStateType) => {
    return state.auth.userId
}

