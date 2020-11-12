import {usersAPI} from '../api/api';


const TOGGLE_FOLLOW = 'social-network/users/TOGGLE_FOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const CURRENT_PAGE = 'social-network/users/CURRENT_PAGE'
const TOTAL_USERS = 'social-network/users/TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'


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
        case CURRENT_PAGE:
        case TOTAL_USERS:
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.payload}

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

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


const toggleFollowSuccess = (userId) => ({type: TOGGLE_FOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, payload: {currentPage}})

export const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS, payload: {totalUsersCount}})

const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})

export const toggleFollowingInProgress = (data, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: data,
    userId,
})


export function requestUsers(page, pageSize) {
    return async dispatch => {
        try {
            dispatch(toggleIsFetching(true))
            dispatch(setCurrentPage(page))
            const data = await usersAPI.getUsers(page, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        } catch (e) {
            throw e
        }
    }
}

export function toggleFollow(userId) {
    return async dispatch => {
        try {
            dispatch(toggleFollowingInProgress(true, userId))
            const isFollowed = await usersAPI.checkFollower(userId)
            const data = isFollowed
                ? await usersAPI.unfollow(userId)
                : await usersAPI.follow(userId)

            data.resultCode === 0 && dispatch(toggleFollowSuccess(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        } catch (e) {
            dispatch(toggleFollowingInProgress(false, userId))
            throw e
        }
    }
}

export default usersReducer
