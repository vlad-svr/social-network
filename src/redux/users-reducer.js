import {
    CURRENT_PAGE,
    FOLLOW,
    SET_USERS,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
    TOTAL_USERS,
    UNFOLLOW,
} from './types';
import {usersAPI} from '../api/api';
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching, unfollowSuccess,
} from './actions';

const initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export function requestUsers(page, pageSize) {
    return dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export function follow(userId) {
    return dispatch => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            data.resultCode === 0 && dispatch(followSuccess(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export function unfollow(userId) {
    return dispatch => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unfollow(userId).then(data => {
            data.resultCode === 0 && dispatch(unfollowSuccess(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export default usersReducer
