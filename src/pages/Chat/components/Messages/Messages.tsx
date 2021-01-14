import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Message from '../../../../components/Dialogs/Message/Message'
import { getUserIdSelector } from '../../../../redux/auth-selectors'
import { ChatMessageType } from '../../../../types/types'
import './Messages.module.css'
import s from './Messages.module.css'
import Preloader from '../../../../components/common/Preloader/Preloader'

export type MessagesType = { wsChannel?: WebSocket | null }

const Messages: React.FC<MessagesType> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const myId = useSelector(getUserIdSelector)
  const messagesBlockRef = useRef<HTMLDivElement | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      setIsLoading(false)
      setMessages(prevMessages => [...prevMessages, ...JSON.parse(e.data)])
    }
    wsChannel?.addEventListener('message', messageHandler)
    return () => {
      wsChannel?.removeEventListener('message', messageHandler)
    }
  }, [wsChannel])

  React.useEffect(() => {
    if (messagesBlockRef?.current) {
      messagesBlockRef!.current!.scrollIntoView({ block: 'end' })
    }
  }, [messages])

  if (isLoading) return <Preloader />
  return (
    <div className={s.messages}>
      {messages.map((m: ChatMessageType, index) => (
        <Message key={index + Date.now()} isMyMessage={m.userId === myId} item={m} />
      ))}
      <div ref={messagesBlockRef} />
    </div>
  )
}

export default Messages
