import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Моя страница
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Новости
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Сообщения
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Друзья
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Фотографии
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Музыка
                </div>
            </a>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Видео
                </div>
            </a>
            <div className="line"/>
            <a className="nav__link" href="/">
                <div className="nav__item">
                    Настройки
                </div>
            </a>
        </nav>
    )
}

export default Navbar
