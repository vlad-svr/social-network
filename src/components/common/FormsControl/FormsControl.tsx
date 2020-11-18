import React from 'react'
import cn from 'classnames'
import s from './FormsControl.module.css'


type FormsControlPropsType = {
  input: any
  showSpan: boolean
  meta: {
    error: string
    submitError: any
    touched: any
    children: React.FC
  }
}

const FormControl: React.FC<FormsControlPropsType> = ({ input, showSpan = true, meta: {error, submitError, touched}, children }) => {
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

type TextareaPropsType = {
  input: any
  meta: any
  showSpan: boolean
  children: any
}
export const Textarea: React.FC<TextareaPropsType> = (props) => {
  const { input, meta, showSpan, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

type InputPropsType = {
  input: any
  meta: any
  showSpan: boolean
  children: any
}
export const Input: React.FC<InputPropsType> = (props) => {
  const { input, meta, showSpan, children, ...restProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
