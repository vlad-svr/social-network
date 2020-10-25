import React from 'react'
import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import { reduxForm } from 'redux-form'
import { compose } from 'redux'
import { authLogin } from '../../redux/auth-reducer'
import { connect } from 'react-redux'

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  function onSubmit(formData) {
    console.log(formData)
    props.authLogin(formData)
  }

  return (
    <div className={s.container}>
      <div className={'card ' + s.card_login}>
        <h1 className={s.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default compose(connect(mapStateToProps, { authLogin }))(Login)
