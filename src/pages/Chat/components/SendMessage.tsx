import React from 'react'
import AddMessageForm, {
  NewMessageFormType,
} from '../../../components/Dialogs/AddMessageForm/AddMessageForm'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../../redux/chat-reducer'
import { statusSelector } from '../../../redux/chat-selectors'

const SendMessage: React.FC = () => {
  const dispatch = useDispatch()
  const status = useSelector(statusSelector)

  const onSendMessage = (data: NewMessageFormType) => {
    dispatch(sendMessage(data.newMessageBody))
    return Promise.resolve()
  }

  return <AddMessageForm onSubmit={onSendMessage} readyStatus={status} />
}

export default SendMessage
