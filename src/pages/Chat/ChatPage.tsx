import React from 'react'
import cn from 'classnames'
import s from './ChatPage.module.css'
import Messages from './components/Messages/Messages'
import SendMessage from './components/SendMessage'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { useDispatch, useSelector } from 'react-redux'
import { offMessagesListening, onMessagesListening } from '../../redux/chat-reducer'
import { statusSelector } from '../../redux/chat-selectors'

const ChatPage: React.FC = () => {
  const dispatch = useDispatch()
  const status = useSelector(statusSelector)

  React.useEffect(() => {
    dispatch(onMessagesListening())
    return () => {
      dispatch(offMessagesListening())
    }
  }, [dispatch])

  return (
    <div className={cn('card', s.container)}>
      <div className={s.messages_items}>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <Messages />
        <div className={s.form_message}>
          <SendMessage />
        </div>
      </div>
    </div>
  )
}

export default withAuthRedirect(ChatPage)
