import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="app-wrapper">
                <div className="header__container">
                    <img className="header__logo" src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/vk-256.png" alt="logo"/>
                    <div className="header__profile">
                        <span className="header__username">Владислав</span>
                        <img className="mini-avatar-02" src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=50x0&quality=88&crop=412,564,1001,1001&sign=7057b5ff7fe1ecd59942f3b439037efc&ava=1" alt="avatar"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
