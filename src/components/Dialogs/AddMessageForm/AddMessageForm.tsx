import React from 'react'
import { Form, Field } from 'react-final-form'
import cn from 'classnames'
import { composeValidators, maxLength, required } from '../../../utils/validators'
import { Textarea } from '../../common/FormsControl/FormsControl'
import s from './AddMessageForm.module.css'
import { StatusType } from '../../../redux/chat-reducer'

export type NewMessageFormType = { newMessageBody: string }
type PropsType = {
  onSubmit: (data: NewMessageFormType) => Promise<void>
  readyStatus?: StatusType
}

const AddMessageForm: React.FC<PropsType> = ({ onSubmit, readyStatus = 'ready' }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, hasValidationErrors }) => {
        return (
          <form
            className={s.form}
            onSubmit={e => {
              const promise = handleSubmit(e)
              promise && promise.then(() => form.reset())
              return promise
            }}
          >
            <Field<string>
              name="newMessageBody"
              component={Textarea}
              validate={composeValidators(required, maxLength(150))}
              placeholder="Напишите сообщение..."
              className={cn('textarea', s.textarea)}
              autoFocus
            />
            <button
              disabled={readyStatus !== 'ready' || submitting || hasValidationErrors}
              type="submit"
              className={cn('button_blue', s.button)}
            >
              Отправить
            </button>
          </form>
        )
      }}
    />
  )
}

export default AddMessageForm
