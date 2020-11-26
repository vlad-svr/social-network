import React from 'react';
import s from './User.module.css';
import cn from 'classnames'
import userPhoto from '../../../assets/images/no-avatar.png';
import {NavLink} from 'react-router-dom';
import {stringsToUpperCase} from '../../../utils/core';
import {UserType} from "../../../types/types";


type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    toggleFollow: (userId: number) => void
}


const User: React.FC<PropsType> = React.memo(({user: u, followingInProgress, toggleFollow}) => {
    return (
        <div className={s.users_card}>
            <NavLink to={'/profile/' + u.id}>
                <img className='mini_avatar_80' src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"/>
            </NavLink>
            <div className={s.users_info}>
                <div className={s.label}>
                    <NavLink to={'/profile/' + u.id} className={cn("link_normalize", s.name)}>
                        {stringsToUpperCase(u.name)}
                    </NavLink>
                </div>
                <span className={s.label}>{`user.location.city, user.location.country`}</span>
                <span className={s.label}>{u.status}</span>
            </div>
            <div>
                <button
                    disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => toggleFollow(u.id)}
                    className='button_blue'>{u.followed ? 'Отписаться' : 'Подписаться'}
                </button>
            </div>
        </div>
    )
})

export default User
