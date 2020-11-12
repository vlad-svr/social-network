import React from 'react'
import cn from 'classnames'
import s from './FormsControl.module.css'

const FormControl = ({ input, showSpan = true, meta: {error, submitError, touched}, children }) => {
  const hasError = (error || submitError) && touched && input.value
  return (
    <div className={cn(s.form_control, {[s.error]: hasError})}>
      {children}
      {hasError && showSpan
        ? <p className={s.span}>{error || submitError}</p>
        : ''}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, showSpan, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, showSpan, children, ...restProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
