import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/no-avatar.png';
import Filters from './Filters/Filters';
import Preloader from '../common/Preloader/Preloader';


const Users = props => {
    const pagesCount = Math.trunc(props.totalUsersCount / props.pageSize)

    const pages = new Array(pagesCount)
        .fill('')
        .map((_, index) => ++index)

    const pagesTemplate =  (
        <div className={s.search}>
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
                    <span className={s.count_people}>123</span>
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
                                    <a href="/12323"><img className='mini_avatar_80' src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/></a>
                                    <div className={s.users_info}>
                                        <div className={s.label}>
                                            <a className={"link_normalize " + s.name} href="/12323">{user.name}</a>
                                        </div>
                                        <span className={s.label}>{`${"user.location.city"}, ${"user.location.country"}`}</span>
                                        <span className={s.label}>{user.status}</span>
                                    </div>
                                    <div className={s.users_control}>
                                        {user.followed
                                            ? <button onClick={() => {props.unfollow(user.id)}} className='button_blue'>Отписаться</button>
                                            : <button onClick={() => {props.follow(user.id)}} className='button_blue'>Подписаться</button>
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
