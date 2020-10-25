import React from 'react'
import { Field } from 'redux-form'
import s from './PostForm.module.css'

const PostForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name="newPost"
        className={s.message}
        placeholder="Что у Вас нового..."
      />
      <button type="submit" className="button_blue">
        Опубликовать
      </button>
    </form>
  )
}

export default PostForm
