import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Message from '../../../../components/Dialogs/Message/Message'
import { getUserIdSelector } from '../../../../redux/auth-selectors'
import './Messages.module.css'
import s from './Messages.module.css'
import Preloader from '../../../../components/common/Preloader/Preloader'
import { getMessagesSelector, statusSelector } from '../../../../redux/chat-selectors'

const Messages: React.FC = React.memo(() => {
  const messages = useSelector(getMessagesSelector)
  const myId = useSelector(getUserIdSelector)
  const messagesBlockRef = useRef<HTMLDivElement | null>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const status = useSelector(statusSelector)

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget

    if (element.scrollHeight - element.scrollTop < element.clientHeight + 50) {
      !isAutoScroll && setIsAutoScroll(true)
    } else {
      isAutoScroll && setIsAutoScroll(false)
    }
  }

  React.useEffect(() => {
    if (messagesBlockRef?.current && isAutoScroll) {
      messagesBlockRef!.current!.scrollIntoView({ block: 'end' })
    }
  }, [messages])

  if (status !== 'ready') return <Preloader />
  return (
    <div className={s.messages} onScroll={scrollHandler}>
      {messages.map(m => (
        <Message key={m.id} isMyMessage={m.userId === myId} item={m} />
      ))}
      <div ref={messagesBlockRef} />
    </div>
  )
})

export default Messages
