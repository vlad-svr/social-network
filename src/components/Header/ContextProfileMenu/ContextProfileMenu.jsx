import React from 'react'
import cn from 'classnames'
import s from './ContextProfileMenu.module.css'
import { NavLink } from 'react-router-dom'

const ContextProfileMenu = ({isMenuActive, photo, login, logout}) => {
  return (
    <div className={cn(s.context_menu, 'card', {[s.active]: isMenuActive})}>
      <NavLink to="/" className={cn(s.link, s.item_title)}>
        <img
          className={cn('mini_avatar_34', s.menu_ava)}
          src={photo}
          alt="avatar"
        />
        <span>{login}</span>
      </NavLink>
      <div className={cn('line', s.menu_line)}/>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>
          <span className={s.link_item}>Настройки</span>
        </NavLink>
        <NavLink to="/" className={s.link}>
          <span className={s.link_item}>Помощь</span>
        </NavLink>
        <div className={cn('line', s.menu_line)}/>
        <div onClick={logout} className={s.link}>
          <span className={s.link_item}>Выйти</span>
        </div>
      </nav>
    </div>
  )
}

export default ContextProfileMenu
