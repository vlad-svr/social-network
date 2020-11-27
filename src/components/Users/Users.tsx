import React, {useEffect} from 'react';
import s from './Users.module.css';
import cn from 'classnames'
import Filters from './Filters/Filters';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import UsersSearch from './UsersSearch/UsersSearch';
import {FilterUsersType, requestUsers, toggleFollowUnfollow} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFilter, getFollowingInProgress,
    getIsFetching,
    getIsModeSearch,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import { useHistory } from 'react-router-dom';
import * as queryString from "query-string";


type QueryParamsType = {
    term?: string
    friend?: string
    page?: string
}

const Users: React.FC = React.memo(() => {
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const isFetching = useSelector(getIsFetching)
    const isModeSearch = useSelector(getIsModeSearch)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search) as QueryParamsType
        const actualPage = parsed.page || currentPage
        let actualFilter = filter
        if (parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if (parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true'}
        dispatch(requestUsers(+actualPage, pageSize, actualFilter))
    }, [])

    const onPageChanged = (pageNum: number) => dispatch(requestUsers(pageNum,  pageSize, filter))
    const onFilterChanged = (filter: FilterUsersType) => dispatch(requestUsers(1, pageSize, filter))

    const toggleFollow = (userId: number) => {
        dispatch(toggleFollowUnfollow(userId))
    }


    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage, history])



    const usersBlock = users.map(user => (
        <User key={user.id} user={user} followingInProgress={followingInProgress} toggleFollow={toggleFollow} />
    ))

    const noUsersBlock = <div className={s.no_users}>
        <p>{isModeSearch ? 'Пользователей не найдено' : 'Ваш запрос не дал результатов'}</p>
    </div>

    return (
        <div className={s.users}>
            <div className={cn('card', s.user_card)}>
                <div className={s.header}>
                    Люди
                    <span className={s.count_people}>{totalUsersCount}</span>
                </div>
                <div className={s.search}>
                    <UsersSearch onFilterChanged={onFilterChanged} />
                </div>
                <div className={s.paginator}>
                    <Paginator
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalValueCount={totalUsersCount}
                        pageSize={pageSize}
                    />
                </div>

                <div className={s.users_list}>
                    {users.length === 0 ? noUsersBlock : ''}
                    {isFetching ? <Preloader /> : usersBlock}
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
