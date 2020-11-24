import React from 'react'
import cn from 'classnames'
import s from './FormsControl.module.css'
import { FieldRenderProps } from "react-final-form";


type InputPropsType = FieldRenderProps<string>


const FormControl: React.FC<InputPropsType> = ({ input, showSpan = true, meta: {error, submitError, touched}, children }) => {
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


export const Textarea: React.FC<InputPropsType> = (props) => {
  const { input, meta, showSpan, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}


export const Input: React.FC<InputPropsType> = (props: InputPropsType) => {
  const { input, meta, showSpan, children, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}
