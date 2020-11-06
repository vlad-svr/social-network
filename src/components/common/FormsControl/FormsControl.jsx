import React from 'react'
import s from './FormsControl.module.css'

const FormControl = ({ input, meta: {error, submitError, touched}, children }) => {
  const hasError = (error || submitError) && touched && input.value
  return (
    <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
      {children}
      {hasError
        ? <span className={s.span}>{error || submitError}</span>
        : ''}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
