import React from 'react'
import styleFormControl from '../../common/FormsControl/FormsControl.module.css'
import s from './LoginForm.module.css'
import { Form, Field } from 'react-final-form'
import { Input } from '../../common/FormsControl/FormsControl'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../../utils/validators'

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ submitError, handleSubmit, hasValidationErrors, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className={s.item}>
              <Field
                name="email"
                className={'input ' + s.input_login}
                type="text"
                placeholder="Login"
                validate={composeValidators(
                  required,
                  minLength(5),
                  maxLength(40)
                )}
                component={Input}
              />
            </div>
            <div className={s.item}>
              <Field
                name="password"
                className={'input ' + s.input_login}
                type="password"
                validate={composeValidators(required, minLength(4))}
                placeholder="Password"
                component={Input}
              />
            </div>
            {props.captcha && (
              <div className={s.item}>
                <img className={s.captcha} src={props.captcha} alt="Captcha" />
                <Field
                  name="captcha"
                  className={'input ' + s.input_login}
                  type="text"
                  validate={required}
                  placeholder="Введите что написано на картинке"
                  component={Input}
                />
              </div>
            )}
            <div className={s.item + ' ' + s.control}>
              <button
                disabled={submitting || hasValidationErrors}
                className={'button_blue ' + s.submit}
                type="submit"
              >
                Войти
              </button>
              <label className={s.remember_me} htmlFor="remember_me">
                <Field
                  name="rememberMe"
                  id="remember_me"
                  type="checkbox"
                  component="input"
                />{' '}
                Remember Me
              </label>
            </div>
            {submitError && (
              <div>
                <span className={styleFormControl.span + ' ' + s.span}>{submitError}</span>
              </div>
            )}
          </form>
        )
      }}
    />
  )
}

export default LoginForm
