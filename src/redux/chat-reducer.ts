import { ChatMessageAPIType } from '../types/types'
import { BaseThunkType, InfernActionsTypes } from './redux-store'
import { chatAPI } from '../api/chat-api'
import { Dispatch } from 'redux'
import { v4 as uuidv4 } from 'uuid'

const MESSAGES_RECEIVED = 'SN/CHAT/MESSAGES_RECEIVED'
const SET_STATUS = 'SN/CHAT/SET_STATUS'

export type ChatMessageType = ChatMessageAPIType & { id: string }
export type StatusType = 'pending' | 'ready' | 'error'
const initialState = {
  messages: [] as ChatMessageType[],
  status: 'pending' as StatusType,
}

function chatReducer(state = initialState, action: ActionsTypes): InitialStateType {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.map(m => ({ ...m, id: uuidv4() }))].filter(
          (m, index, array) => index >= array.length - 100
        ),
        status: 'ready',
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      }

    default:
      return state
  }
}

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) =>
    ({ type: MESSAGES_RECEIVED, payload: messages } as const),
  statusChanged: (payload: StatusType) => ({ type: SET_STATUS, payload } as const),
}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(actions.messagesReceived(messages))
    }
  }

  return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = status => {
      dispatch(actions.statusChanged(status))
    }
  }

  return _statusChangedHandler
}

export const onMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.start()
  chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const offMessagesListening = (): ThunkType => async dispatch => {
  chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
  chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
  chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async dispatch => {
  chatAPI.sendMessage(message)
}

export default chatReducer

export type InitialStateType = typeof initialState
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType<R = Promise<void>> = BaseThunkType<ActionsTypes, R>
