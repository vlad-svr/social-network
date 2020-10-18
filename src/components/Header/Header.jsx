import React from 'react';
import c from './Header.module.css'
import defaultPhoto from '../../assets/images/no-avatar.png'
import {NavLink} from 'react-router-dom';

const Header = props => {
    function authBlock() {
        if (props.isAuth) {
            return  <NavLink className={c.profile} to="/">
                        <span className={c.login}>{props.login}</span>
                        <img className="mini_avatar_02" src={props.profile?.photos.small || defaultPhoto} alt="avatar"/>
                    </NavLink>
        }
        return  <NavLink className={c.profile} to="/login">
                    <span className={c.login}>Войти</span>
                </NavLink>
    }

    return (
        <header className={c.header}>
            <div className="scroll-fix">
            <div className="wrapper">
                <div className={c.container}>
                    <img className={c.logo} src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/vk-256.png" alt="logo"/>
                    {authBlock()}
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header
