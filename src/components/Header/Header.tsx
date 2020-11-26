import React, {useEffect, useRef, useState} from 'react'
import cn from 'classnames'
import s from './Header.module.css'
import defaultPhoto from '../../assets/images/no-avatar.png'
import { NavLink } from 'react-router-dom'
import ContextProfileMenu from './ContextProfileMenu/ContextProfileMenu'


export type MapStatePropsType = {
  photo?: string | null
  login: string | null
  isAuth: boolean
}
export type MapDispatchPropsType = {
  logout: () => void
}


const Header: React.FC<MapStatePropsType & MapDispatchPropsType> =
    ({isAuth, login, logout, photo}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const onToggleProfileMenu = () => setOpenMenu(!openMenu)
  const clickOutside = (e: MouseEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return
      setOpenMenu(false)
  }

  useEffect(() => {
    if (openMenu) {
      document.addEventListener('click', clickOutside);
    } else {
      document.removeEventListener('click', clickOutside);
    }
    return () => document.removeEventListener('click', clickOutside);
  }, [openMenu])

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
            {
              isAuth ? <div ref={menuRef} onClick={onToggleProfileMenu}
                  className={cn(s.profile, {[s.active]: openMenu})}
                  >
                  <span className={s.login}>{login}</span>
                  <img className="mini_avatar_02" src={photo || defaultPhoto} alt="avatar"/>
                  <ContextProfileMenu
                      isMenuActive={openMenu}
                      login={login}
                      logout={logout}
                      photo={photo || defaultPhoto}
                  />
                </div>
                : <NavLink className={s.profile} to="/login">
                    <span className={s.login}>Войти</span>
                </NavLink>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
