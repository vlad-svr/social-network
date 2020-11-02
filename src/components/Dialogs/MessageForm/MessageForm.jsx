import React from 'react'
import { Form, Field } from 'react-final-form'
import {
  composeValidators,
  maxLength,
  required,
} from '../../../utils/validators'
import { Textarea } from '../../common/FormsControl/FormsControl'
import s from './MessageForm.module.css'

const MessageForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <Field
            name="newMessageBody"
            component={Textarea}
            validate={composeValidators(required, maxLength(50))}
            placeholder="Напишите сообщение..."
            className={'textarea ' + s.textarea}
          />
          <button type="submit" className={'button_blue ' + s.button}>
            Отправить
          </button>
        </form>
      )}
    />
  )
}

export default MessageForm
