import React from 'react'
import s from './FormsControl.module.css'

const FormControl = ({ input, meta, children, ...props }) => {
  const error = (meta.error || meta.submitError) && meta.touched && input.value
  return (
    <div className={s.form_control + ' ' + (error ? s.error : '')}>
      {children}
      {error ? (
        <span className={s.span}>{meta.error || meta.submitError}</span>
      ) : (
        ''
      )}
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
