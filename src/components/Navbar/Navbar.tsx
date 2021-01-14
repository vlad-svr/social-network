import React from 'react';
import './Navbar.module.css'
import c from './Navbar.module.css'
import {Link} from 'react-router-dom';
import {RouterManager} from "../../RouterManager";


const Navbar: React.FC = React.memo(() => {
    return (
        <nav className={c.nav}>
            <Link className={c.link} to={RouterManager.profile.my.path}>
                <div className={c.item}>
                    Моя страница
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.users.list.path}>
                <div className={c.item}>
                    Люди
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.news.list.path}>
                <div className={c.item}>
                    Новости
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.dialogs.list.path}>
                <div className={c.item}>
                    Сообщения
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.chat.index.path}>
                <div className={c.item}>
                    Чат
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.friends.list.path}>
                <div className={c.item}>
                    Друзья
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.photos.list.path}>
                <div className={c.item}>
                    Фотографии
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.audio.list.path}>
                <div className={c.item}>
                    Музыка
                </div>
            </Link>
            <Link className={c.link} to={RouterManager.video.list.path}>
                <div className={c.item}>
                    Видео
                </div>
            </Link>
            <div className="line"/>
            <Link className={c.link} to={RouterManager.settings.list.path}>
                <div className={c.item}>
                    Настройки
                </div>
            </Link>
        </nav>
    )
})

export default Navbar
