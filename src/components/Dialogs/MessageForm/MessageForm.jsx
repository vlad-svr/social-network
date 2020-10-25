import React from 'react'
import { Field } from 'redux-form'
import s from './MessageForm.module.css'

const MessageForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newMessageBody"
        component={'textarea'}
        placeholder="Напишите сообщение..."
        className={s.textarea}
      />
      <button type="submit" className="button_blue">
        Отправить
      </button>
    </form>
  )
}

export default MessageForm
