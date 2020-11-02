import React from 'react'
import { Form, Field } from 'react-final-form'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../../../utils/validators'
import { Textarea } from '../../../common/FormsControl/FormsControl'
import s from './PostForm.module.css'

const PostForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
        <form className={s.form} onSubmit={handleSubmit}>
          <Field
            component={Textarea}
            name="newPost"
            className={'textarea ' + s.message}
            validate={composeValidators(required, minLength(5), maxLength(30))}
            placeholder="Что у Вас нового..."
          />
          <button type="submit" className={'button_blue ' + s.button}>
            Опубликовать
          </button>
        </form>
      )}
    />
  )
}

export default PostForm