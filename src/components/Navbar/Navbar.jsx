import React from 'react';
import './Navbar.module.css'
import c from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <NavLink className={c.link} to="/profile">
                <div className={c.item}>
                    Моя страница
                </div>
            </NavLink>
            <NavLink className={c.link} to='/users'>
                <div className={c.item}>
                    Люди
                </div>
            </NavLink>
            <NavLink className={c.link} to="/news">
                <div className={c.item}>
                    Новости
                </div>
            </NavLink>
            <NavLink className={c.link} to="/dialogs">
                <div className={c.item}>
                    Сообщения
                </div>
            </NavLink>
            <NavLink className={c.link} to="/friends">
                <div className={c.item}>
                    Друзья
                </div>
            </NavLink>
            <NavLink className={c.link} to="/photos">
                <div className={c.item}>
                    Фотографии
                </div>
            </NavLink>
            <NavLink className={c.link} to="/audio">
                <div className={c.item}>
                    Музыка
                </div>
            </NavLink>
            <NavLink className={c.link} to="/video">
                <div className={c.item}>
                    Видео
                </div>
            </NavLink>
            <div className="line"/>
            <NavLink className={c.link} to="/settings">
                <div className={c.item}>
                    Настройки
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar
