import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/no-avatar.png';
import Filters from './Filters/Filters';
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';


const Users = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = new Array(pagesCount)
        .fill('')
        .map((_, index) => ++index)

    const pagesTemplate =  (
        <div className={s.search + ' ' + s.pagination}>
            <ul className={s.page_list}>
                {pages.map(item => {
                    const selected = (item === props.currentPage) ? s.selected_page : ''
                    return <li className={s.page_li + ' ' + selected}
                               key={item}
                               onClick={() => props.onPageChanged(item)}
                    >{item}</li>
                })}
            </ul>
        </div>
    )

    return (
        <div className={s.users}>
            <div className={'card ' + s.user_card}>
                <div className={s.header}>
                    Люди
                    <span className={s.count_people}>{props.totalUsersCount}</span>
                </div>
                <div className={s.search}>
                    Search
                </div>
                {pagesTemplate}
                <div className={s.users_list}>
                    {
                        props.isFetching
                            ? <Preloader />
                            : props.users.map(user => (
                                <div key={user.id} className={s.users_card}>
                                    <NavLink to={'/profile/' + user.id}><img className='mini_avatar_80' src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/></NavLink>
                                    <div className={s.users_info}>
                                        <div className={s.label}>
                                            <NavLink to={'/profile/' + user.id} className={"link_normalize " + s.name}>{user.name}</NavLink>
                                        </div>
                                        <span className={s.label}>{`${"user.location.city"}, ${"user.location.country"}`}</span>
                                        <span className={s.label}>{user.status}</span>
                                    </div>
                                    <div className={s.users_control}>
                                        {user.followed
                                            ? <button
                                                disabled={props.followingInProgress}
                                                onClick={() => {
                                                    props.toggleFollowingInProgress(true)
                                                    usersAPI.unfollow(user.id).then(data => {
                                                        data.resultCode === 0 && props.unfollow(user.id)
                                                        props.toggleFollowingInProgress(false)
                                                    })
                                                }}
                                                className='button_blue'>Отписаться</button>

                                            : <button
                                                disabled={props.followingInProgress}
                                                onClick={() => {
                                                    props.toggleFollowingInProgress(true)
                                                    usersAPI.follow(user.id).then(data => {
                                                        data.resultCode === 0 && props.follow(user.id)
                                                        props.toggleFollowingInProgress(false)

                                                    })
                                                }}
                                                className='button_blue'>Подписаться</button>
                                        }
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div className={s.show_btn}>
                    <button className="button_blue">Показать еще</button>
                </div>
            </div>
            <div className='card '>
                <Filters />
            </div>
        </div>
    )
}

export default Users
