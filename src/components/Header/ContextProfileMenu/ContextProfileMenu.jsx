import React from 'react'
import s from './ContextProfileMenu.module.css'
import { NavLink } from 'react-router-dom'

const ContextProfileMenu = (props) => {
  return (
    <div
      className={s.context_menu + ' card ' + (props.isMenuActive && s.active)}
    >
      <NavLink to="/" className={s.link + ' ' + s.item_title}>
        <img
          className={'mini_avatar_34 ' + s.menu_ava}
          src={props.photo}
          alt="avatar"
        />
        <span>{props.login}</span>
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
        <div onClick={props.logout} className={s.link}>
          <span className={s.link_item}>Выйти</span>
        </div>
      </nav>
    </div>
  )
}

export default ContextProfileMenu
