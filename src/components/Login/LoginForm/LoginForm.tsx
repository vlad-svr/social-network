import React from 'react'
import styleFormControl from '../../common/FormsControl/FormsControl.module.css'
import cn from 'classnames'
import s from './LoginForm.module.css'
import { Form, Field } from 'react-final-form'
import { Input } from '../../common/FormsControl/FormsControl'
import {
  composeValidators,
  maxLength,
  minLength,
  required,
} from '../../../utils/validators'
import {LoginFormValuesType} from "../../../types/types";


type PropsType = {
  onSubmit: (formData: LoginFormValuesType) => void
  captchaUrl: string | null
}
const LoginForm: React.FC<PropsType> = ({onSubmit, captchaUrl}) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ submitError, form, handleSubmit, hasValidationErrors, submitting }) => {
        return (
          <form onSubmit={(e) => {
              const promise = handleSubmit(e);
              promise && promise.then(() => form.change('captcha', undefined))
              return promise;
          }}>
            <div className={s.item}>
              <Field<string>
                name='email'
                className={cn('input', s.input_login)}
                type='text'
                placeholder='Login'
                validate={composeValidators(
                  required,
                  minLength(5),
                  maxLength(40)
                )}
                component ={Input}
              />
            </div>
            <div className={s.item}>
              <Field<string>
                name='password'
                className={cn('input', s.input_login)}
                type='password'
                validate={composeValidators(required, minLength(4))}
                placeholder='Password'
                component={Input}
              />
            </div>
            {captchaUrl && (
              <div className={s.item}>
                <img className={s.captcha} src={captchaUrl} alt='Captcha' />
                <Field<string>
                  name='captcha'
                  className={cn('input', s.input_login)}
                  type='text'
                  validate={required}
                  placeholder='Введите что написано на картинке'
                  component={Input}
                />
              </div>
            )}
            <div className={cn(s.item, s.control)}>
              <button
                disabled={submitting || hasValidationErrors}
                className={cn('button_blue', s.submit)}
                type="submit"
              >
                Войти
              </button>
              <label className={s.remember_me} htmlFor="remember_me">
                <Field<boolean>
                  name="rememberMe"
                  defaultValue={false}
                  id="remember_me"
                  type="checkbox"
                  component="input"
                />{' '}
                Remember Me
              </label>
            </div>
            {submitError && (
              <div>
                <span className={cn(styleFormControl.span, s.span)}>{submitError}</span>
              </div>
            )}
          </form>
        )
      }}
    />
  )
}

export default LoginForm
