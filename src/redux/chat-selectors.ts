import { AppStateType } from './redux-store'
import { ChatMessageType, StatusType } from './chat-reducer'

export const getMessagesSelector = (state: AppStateType): ChatMessageType[] => state.chat.messages

export const statusSelector = (state: AppStateType): StatusType => state.chat.status
