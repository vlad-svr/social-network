import React from 'react'
import s from './ContextProfileMenu.module.css'
import { NavLink } from 'react-router-dom'

const ContextProfileMenu = ({isMenuActive, photo, login, logout}) => {
  return (
    <div className={s.context_menu + ' card ' + (isMenuActive && s.active)}>
      <NavLink to="/" className={s.link + ' ' + s.item_title}>
        <img
          className={'mini_avatar_34 ' + s.menu_ava}
          src={photo}
          alt="avatar"
        />
        <span>{login}</span>
      </NavLink>
      <div className={'line ' + s.menu_line}/>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>
          <span className={s.link_item}>Настройки</span>
        </NavLink>
        <NavLink to="/" className={s.link}>
          <span className={s.link_item}>Помощь</span>
        </NavLink>
        <div className={'line ' + s.menu_line}/>
        <div onClick={logout} className={s.link}>
          <span className={s.link_item}>Выйти</span>
        </div>
      </nav>
    </div>
  )
}

export default ContextProfileMenu
