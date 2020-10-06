import React from 'react';
import s from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={s.main_avatar}>
            <a href="/">
                <img className={s.img} src="https://sun9-26.userapi.com/impf/c837737/v837737799/2b977/eRmA60iM_p0.jpg?size=200x0&quality=90&crop=275,166,1308,1864&sign=8cdbcaf2541ab8dc1f2948e324563ba0&ava=1" alt="avatar"/>
            </a>
            <button className={'button_gray ' + s.button}>Редактировать</button>
        </div>
    )
}

export default Avatar
