import React from 'react'
import cn from 'classnames'
import s from './Header.module.css'
import defaultPhoto from '../../assets/images/no-avatar.png'
import { NavLink } from 'react-router-dom'
import ContextProfileMenu from './ContextProfileMenu/ContextProfileMenu'


export type MapStatePropsType = {
  isMenuActive: boolean
  photo?: string | null
  login: string | null
  isAuth: boolean
}
export type MapDispatchPropsType = {
  logout: () => void
  toggleProfileMenu: (data: boolean) => void,
}


const Header: React.FC<MapStatePropsType & MapDispatchPropsType> =
    ({isAuth, toggleProfileMenu, isMenuActive, login, logout, photo}) => {
  function authBlock() {
    const onToggleProfileMenu = () => toggleProfileMenu(!isMenuActive)

    if (isAuth) {
      return (
        <div
          onClick={onToggleProfileMenu}
          className={cn(s.profile, {[s.active]: isMenuActive})}
        >
          <span className={s.login}>{login}</span>
          <img
            className="mini_avatar_02"
            src={photo || defaultPhoto}
            alt="avatar"
          />
          <ContextProfileMenu
            isMenuActive={isMenuActive}
            login={login}
            logout={logout}
            photo={photo || defaultPhoto}
          />
        </div>
      )
    }

    return (
      <NavLink className={s.profile} to="/login">
        <span className={s.login}>Войти</span>
      </NavLink>
    )
  }

  return (
    <header className={s.header}>
      <div className="scroll-fix">
        <div className="wrapper">
          <div className={s.container}>
            <img
              className={s.logo}
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/vk-256.png"
              alt="logo"
            />
            {authBlock()}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
