import React from 'react'
import AddMessageForm, {
  NewMessageFormType,
} from '../../../components/Dialogs/AddMessageForm/AddMessageForm'

export type ReadyStatusType = 'pending' | 'ready'
type PropsType = { wsChannel?: WebSocket | null }

const SendMessage: React.FC<PropsType> = ({ wsChannel }) => {
  const [readyStatus, setReadyStatus] = React.useState<ReadyStatusType>('pending')

  const onSendMessage = (data: NewMessageFormType) => {
    wsChannel?.send(data.newMessageBody)
    return Promise.resolve()
  }

  React.useEffect(() => {
    const openHandler = () => setReadyStatus('ready')

    wsChannel?.addEventListener('open', openHandler)
    return () => {
      wsChannel?.removeEventListener('open', openHandler)
    }
  }, [wsChannel])

  return <AddMessageForm wsChannel={wsChannel} onSubmit={onSendMessage} readyStatus={readyStatus} />
}

export default SendMessage
