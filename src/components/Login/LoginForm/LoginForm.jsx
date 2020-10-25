import React from 'react'
import s from './LoginForm.module.css'
import { Field } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.item}>
        <Field
          name={'email'}
          className={'input ' + s.input_login}
          type="text"
          placeholder={'Login'}
          component={'input'}
        />
      </div>
      <div className={s.item}>
        <Field
          name={'password'}
          className={'input ' + s.input_login}
          type="password"
          placeholder={'Password'}
          component={'input'}
        />
      </div>
      <div className={s.item + ' ' + s.control}>
        <button className={'button_blue ' + s.submit} type="submit">
          Войти
        </button>
        <label className={s.remember_me} htmlFor="remember_me">
          <Field
            name={'rememberMe'}
            id="remember_me"
            type="checkbox"
            component={'input'}
          />{' '}
          Remember Me
        </label>
      </div>
    </form>
  )
}

export default LoginForm
