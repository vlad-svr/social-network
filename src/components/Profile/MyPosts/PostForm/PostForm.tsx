import React from 'react'
import { Form, Field } from 'react-final-form'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../../../utils/validators'
import { Textarea } from '../../../common/FormsControl/FormsControl'
import cn from 'classnames'
import s from './PostForm.module.css'


export type AddPostFormDataType = { newPost: string }
type PropsType = { onSubmit: (data: AddPostFormDataType) => Promise<void> }


const PostForm: React.FC<PropsType> = ({onSubmit}) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting}) => (
        <form className={s.form} onSubmit={(e) => {
            const promise = handleSubmit(e);
            promise && promise.then(() => form.reset())
            return promise;
        }}>
          <Field<string>
            component={Textarea}
            name="newPost"
            className={cn('textarea', s.message)}
            validate={composeValidators(required, minLength(5), maxLength(30))}
            placeholder="Что у Вас нового..."
          />
          <button disabled={submitting} type="submit" className={cn('button_blue', s.button)}>
            Опубликовать
          </button>
        </form>
      )}
    />
  )
}

export default PostForm
