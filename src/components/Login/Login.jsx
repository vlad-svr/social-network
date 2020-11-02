import React from 'react'
import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import { compose } from 'redux'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
  function onSubmit(formData) {
    const { email, password, rememberMe, captcha } = formData
    return props.login(email, password, rememberMe, JSON.stringify(captcha))
  }

  if (props.isAuth) return <Redirect to="/profile" />
  return (
    <div className={s.container}>
      <div className={'card ' + s.card_login}>
        <h1 className={s.title}>Login</h1>
        <LoginForm captcha={props.captcha} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  }
}

export default compose(connect(mapStateToProps, { login }))(Login)
