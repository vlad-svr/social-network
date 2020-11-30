import React from 'react'
import cn from 'classnames'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import MessageForm, { NewMessageFormType } from './MessageForm/MessageForm'
import {useDispatch, useSelector} from "react-redux";
import {getDialogsSelector, getMessagesSelector} from "../../redux/dialogs-selectors";
import {actions} from "../../redux/dialogs-reducer";



const Dialogs: React.FC = () => {
    const dispatch = useDispatch()
    const messages = useSelector(getMessagesSelector)
    const dialogs = useSelector(getDialogsSelector)

  const dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))

  const messagesElements = messages.map((m) => (
    <Message key={m.id} message={m.message} myMessage={m.myMessage} />
  ))

  function onSendMessage(data: NewMessageFormType):Promise<void> {
        dispatch(actions.sendMessage(data.newMessageBody))
        return Promise.resolve()
  }

  return (
    <div className={cn('card', s.dialogs)}>
      <div className={s.title}>
        <h1>Диалоги</h1>
      </div>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages_items}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.form_message}>
          <MessageForm onSubmit={onSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
