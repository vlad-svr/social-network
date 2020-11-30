import React from 'react'
import cn from 'classnames'
import s from './ContextProfileMenu.module.css'
import {Link} from 'react-router-dom'


type PropsType = {
    isMenuActive: boolean
    photo: string
    login: string | null
    logout: () => void
}


const ContextProfileMenu: React.FC<PropsType> = ({isMenuActive, photo, login, logout}) => {
    return (
        <div className={cn(s.context_menu, 'card', {[s.active]: isMenuActive})}>
          <Link to="/" className={cn(s.link, s.item_title)}>
            <img
              className={cn('mini_avatar_34', s.menu_ava)}
              src={photo}
              alt="avatar"
            />
            <span>{login}</span>
          </Link>
          <div className={cn('line', s.menu_line)}/>
          <nav className={s.nav}>
            <Link to="#" className={s.link}>
              <span className={s.link_item}>Настройки</span>
            </Link>
            <Link to="#" className={s.link}>
              <span className={s.link_item}>Помощь</span>
            </Link>
            <div className={cn('line', s.menu_line)}/>
            <div onClick={logout} className={s.link}>
              <span className={s.link_item}>Выйти</span>
            </div>
          </nav>
        </div>
    )
}

export default ContextProfileMenu
