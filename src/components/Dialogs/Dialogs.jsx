import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm'
import { reduxForm } from 'redux-form'

const MessageReduxForm = reduxForm({ form: 'messageForm' })(MessageForm)

const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))

  const messagesElements = props.messages.map((m) => (
    <Message key={m.id} message={m.message} myMessage={m.myMessage} />
  ))

  function onSendMessage(data) {
    props.sendMessage(data.newMessageBody)
  }

  return (
    <div className={'card ' + s.dialogs}>
      <div className={s.title}>
        <h1>Диалоги</h1>
      </div>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages_items}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.form_message}>
          <MessageReduxForm onSubmit={onSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
