import {AppStateType} from "./redux-store";


export const getMessagesSelector = (state: AppStateType) => {
    return state.dialogsPage.messages
}

export const getDialogsSelector = (state: AppStateType) => {
    return state.dialogsPage.dialogs
}
