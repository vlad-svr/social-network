import React from 'react';
import s from './Avatar.module.css'
import defaultPhoto from '../../../assets/images/no-avatar.png'

const Avatar = ({avatar}) => {
    return (
        <div className={s.main_avatar}>
            <a href="/">
                <img className={s.img} src={avatar || defaultPhoto} alt="avatar"/>
            </a>
            <button className={'button_gray ' + s.button}>Редактировать</button>
        </div>
    )
}

export default Avatar
