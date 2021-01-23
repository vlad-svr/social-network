import React from 'react'
import cn from 'classnames'
import s from './ChatPage.module.css'
import Messages from './components/Messages/Messages'
import SendMessage from './components/SendMessage'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { useDispatch } from 'react-redux'
import { offMessagesListening, onMessagesListening } from '../../redux/chat-reducer'

const ChatPage: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(onMessagesListening())
    return () => {
      dispatch(offMessagesListening())
    }
  }, [dispatch])

  return (
    <div className={cn('card', s.container)}>
      <div className={s.messages_items}>
        <Messages />
        <div className={s.form_message}>
          <SendMessage />
        </div>
      </div>
    </div>
  )
}

export default withAuthRedirect(ChatPage)
