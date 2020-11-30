import React from 'react'
import cn from 'classnames'
import s from './Login.module.css'
import LoginForm from './LoginForm/LoginForm'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {LoginFormValuesType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import { login } from '../../redux/auth-reducer'
import {RouterManager} from "../../RouterManager";



const Login: React.FC = () => {
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

  const dispatch = useDispatch()

  function onSubmit(formData: LoginFormValuesType) {
    const { email, password, rememberMe, captcha } = formData
    return dispatch(login(email, password, rememberMe, captcha))
  }

  if (isAuth) return <Redirect to={RouterManager.profile.my.path} />
  return (
    <div className={s.container}>
      <div className={cn('card', s.card_login)}>
        <h1 className={s.title}>Login</h1>
        <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Login
