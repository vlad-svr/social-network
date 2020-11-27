import {AppStateType} from "./redux-store";


export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

export const getIsFetchingSelector = (state: AppStateType) => {
    return state.profilePage.isFetching
}

export const getIsEditModeProfileSelector = (state: AppStateType) => {
    return state.profilePage.editModeProfile
}

