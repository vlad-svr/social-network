import {DialogType, MessagesType } from "../types/types"
import {InfernActionsTypes} from "./redux-store";

const SEND_MESSAGE = 'SN/DIALOGS/SEND_MESSAGE'


const initialState = {
  messages: [
    { id: 1, message: 'Привет, хорошо', myMessage: false },
    { id: 2, message: 'Привет, как дела?', myMessage: true },
    { id: 3, message: 'Чем занимаешься?', myMessage: false },
    { id: 4, message: 'Ура!', myMessage: true },
    { id: 5, message: 'Хорошо!', myMessage: false },
    { id: 6, message: 'Привет, хорошо', myMessage: false },
    { id: 7, message: 'Привет, как дела?', myMessage: true },
    { id: 8, message: 'Чем занимаешься?', myMessage: false },
    { id: 9, message: 'Ура!', myMessage: true },
    { id: 10, message: 'Хорошо!', myMessage: false },
  ] as Array<MessagesType>,
  dialogs: [
    { id: 1, name: 'Nastya' },
    { id: 2, name: 'Vladislav' },
    { id: 3, name: 'Yana' },
    { id: 4, name: 'Ira' },
    { id: 5, name: 'Alena' },
  ] as Array<DialogType>
}


function dialogsReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        message: action.newMessage,
        myMessage: true,
      }

      return {
        ...state,
        messages: [...state.messages, newMessage],
      }

    default:
      return state
  }
}


export const actions = {
  sendMessage: (newMessage: string) => ({
    type: SEND_MESSAGE,
    newMessage,
  } as const)
}


export default dialogsReducer


export type InitialStateType = typeof initialState
type ActionsTypes = InfernActionsTypes<typeof actions>
