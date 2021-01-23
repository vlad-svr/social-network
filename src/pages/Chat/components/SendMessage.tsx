import React from 'react'
import AddMessageForm, {
  NewMessageFormType,
} from '../../../components/Dialogs/AddMessageForm/AddMessageForm'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../redux/chat-reducer'

export type ReadyStatusType = 'pending' | 'ready'

const SendMessage: React.FC = () => {
  const [readyStatus, setReadyStatus] = React.useState<ReadyStatusType>('ready')
  const dispatch = useDispatch()

  const onSendMessage = (data: NewMessageFormType) => {
    dispatch(sendMessage(data.newMessageBody))
    return Promise.resolve()
  }

  // React.useEffect(() => {
  //   const openHandler = () => setReadyStatus('ready')
  //
  //   wsChannel?.addEventListener('open', openHandler)
  //   return () => {
  //     wsChannel?.removeEventListener('open', openHandler)
  //   }
  // }, [wsChannel])

  return <AddMessageForm onSubmit={onSendMessage} readyStatus={readyStatus} />
}

export default SendMessage
