import React from 'react'
import cn from 'classnames'
import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import { compose } from 'redux'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {AppStateType} from "../../redux/redux-store";
import {LoginFormValuesType} from "../../types/types";




const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {
  function onSubmit(formData: LoginFormValuesType) {
    const { email, password, rememberMe, captcha } = formData
    return login(email, password, rememberMe, captcha)
  }

  if (isAuth) return <Redirect to="/profile" />
  return (
    <div className={s.container}>
      <div className={cn('card', s.card_login)}>
        <h1 className={s.title}>Login</h1>
        <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      </div>
    </div>
  )
}


type MapStatePropsType = {
  isAuth: boolean
  captchaUrl: string | null
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe?: boolean, captcha?: string | null) => void
}
function mapStateToProps(state: AppStateType): MapStatePropsType {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  }
}


export default compose(connect(mapStateToProps, { login }))(Login)
