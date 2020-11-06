import React from 'react'
import s from './Header.module.css'
import defaultPhoto from '../../assets/images/no-avatar.png'
import { NavLink } from 'react-router-dom'
import ContextProfileMenu from './ContextProfileMenu/ContextProfileMenu'

const Header = (props) => {
  function authBlock() {
    if (props.isAuth) {
      return (
        <div
          onClick={props.toggleProfileMenu}
          className={s.profile + ' ' + (props.isMenuActive && s.active)}
        >
          <span className={s.login}>{props.login}</span>
          <img
            className="mini_avatar_02"
            src={props.profile?.photos.small || defaultPhoto}
            alt="avatar"
          />
          <ContextProfileMenu
            isMenuActive={props.isMenuActive}
            login={props.login}
            logout={props.logout}
            photo={props.profile?.photos.small || defaultPhoto}
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
