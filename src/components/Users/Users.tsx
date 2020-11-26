import React from 'react';
import s from './Users.module.css';
import cn from 'classnames'
import Filters from './Filters/Filters';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import {UserType} from "../../types/types";
import UsersSearch from './UsersSearch/UsersSearch';
import {FilterUsersType} from "../../redux/users-reducer";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
    isModeSearch: boolean
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterUsersType) => void
    toggleFollowUnfollow: (userId: number) => void
}


const Users: React.FC<PropsType> = React.memo((props) => {
    const usersBlock = props.users.map(user => (
        <User key={user.id} user={user} followingInProgress={props.followingInProgress} toggleFollow={props.toggleFollowUnfollow} />
    ))

    const noUsersBlock = <div className={s.no_users}>
        <p>{props.isModeSearch ? 'Пользователей не найдено' : 'Ваш запрос не дал результатов'}</p>
    </div>

    return (
        <div className={s.users}>
            <div className={cn('card', s.user_card)}>
                <div className={s.header}>
                    Люди
                    <span className={s.count_people}>{props.totalUsersCount}</span>
                </div>
                <div className={s.search}>
                    <UsersSearch onFilterChanged={props.onFilterChanged} />
                </div>
                <div className={s.paginator}>
                    <Paginator
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        totalValueCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                    />
                </div>
                <div className={s.users_list}>
                    {props.users.length === 0 ? noUsersBlock : ''}
                    {props.isFetching ? <Preloader /> : usersBlock}
                </div>
                <div className={s.show_btn}>
                    <button className='button_blue'>Показать еще</button>
                </div>
            </div>
            <div className='card'>
                <Filters/>
            </div>
        </div>
    )
})

export default Users
