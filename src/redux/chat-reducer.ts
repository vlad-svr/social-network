import { ChatMessageType } from '../types/types'
import { BaseThunkType, InfernActionsTypes } from './redux-store'
import { chatAPI } from '../api/chat-api'
import { Dispatch } from 'redux'

const MESSAGES_RECEIVED = 'SN/CHAT/MESSAGES_RECEIVED'
const LOADING_SET = 'SN/CHAT/LOADING_SET'

const initialState = {
  messages: [] as ChatMessageType[],
  isLoading: true,
}

function chatReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
        isLoading: false,
      }

    case LOADING_SET:
      return {
        ...state,
        isLoading: action.payload,
      }

    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({ type: MESSAGES_RECEIVED, payload: messages } as const),
  loadingSetted: (payload: boolean) => ({ type: LOADING_SET, payload } as const),
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(actions.messagesReceived(messages))
    }
  }

  return _newMessageHandler
}

export const onMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.start()
  chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const offMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async dispatch => {
  chatAPI.sendMessage(message)
}

export default chatReducer

export type InitialStateType = typeof initialState
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType<R = Promise<void>> = BaseThunkType<ActionsTypes, R>
