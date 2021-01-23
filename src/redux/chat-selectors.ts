import { AppStateType } from './redux-store'
import { ChatMessageType } from '../types/types'

export const getMessagesSelector = (state: AppStateType): ChatMessageType[] => state.chat.messages

export const isLoadingSelector = (state: AppStateType): boolean => state.chat.isLoading
