import React from 'react';
import s from './Users.module.css';
import cn from 'classnames'
import Filters from './Filters/Filters';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import {UserType} from "../../types/types";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    isFetching: boolean
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    toggleFollowUnfollow: (userId: number) => void
}


const Users: React.FC<PropsType> = (props) => {
    const users = props.users.map(user => (
        <User key={user.id} user={user} followingInProgress={props.followingInProgress} toggleFollow={props.toggleFollowUnfollow} />
    ))

    return (
        <div className={s.users}>
            <div className={cn('card', s.user_card)}>
                <div className={s.header}>
                    Люди
                    <span className={s.count_people}>{props.totalUsersCount}</span>
                </div>
                <div className={s.search}>
                    Search
                </div>
                <div className={s.search}>
                    <Paginator
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        totalValueCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                    />
                </div>
                <div className={s.users_list}>
                    {props.isFetching ? <Preloader /> : users}
                </div>
                <div className={s.show_btn}>
                    <button className='button_blue'>Показать еще</button>
                </div>
            </div>
            <div className='card'>
                <Filters />
            </div>
        </div>
    )
}

export default Users
