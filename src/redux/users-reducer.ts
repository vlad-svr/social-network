import {ResultCodesEnum, usersAPI} from '../api/api';
import { UserType } from '../types/types';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const TOGGLE_FOLLOW = 'social-network/users/TOGGLE_FOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const CURRENT_PAGE = 'social-network/users/CURRENT_PAGE'
const TOTAL_USERS = 'social-network/users/TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'



const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}
export type InitialStateType = typeof initialState

function usersReducer(state = initialState, action: ActionsTypes): InitialStateType {
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


type ActionsTypes = ToggleFollowSuccessType | SetUsersType | SetCurrentPageType | TotalUsersCountType |
    ToggleIsFetchingType | ToggleFollowingInProgressType

type ToggleFollowSuccessType = {
    type: typeof TOGGLE_FOLLOW,
    userId: number
}
type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
type SetCurrentPageType = {
    type: typeof CURRENT_PAGE,
    payload: {currentPage: number}
}
type TotalUsersCountType = {
    type: typeof TOTAL_USERS,
    payload: {totalUsersCount: number}
}
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    payload: {isFetching: boolean}
}
type ToggleFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

const toggleFollowSuccess = (userId: number): ToggleFollowSuccessType => ({type: TOGGLE_FOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: CURRENT_PAGE, payload: {currentPage}})
export const setTotalUsersCount = (totalUsersCount: number): TotalUsersCountType => ({type: TOTAL_USERS, payload: {totalUsersCount}})
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export function requestUsers(page: number, pageSize: number): ThunkType {
    return async (dispatch) => {
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

export function toggleFollow(userId: number): ThunkType {
    return async (dispatch) => {
        try {
            dispatch(toggleFollowingInProgress(true, userId))
            const isFollowed = await usersAPI.checkFollower(userId)
            const data = isFollowed
                ? await usersAPI.unfollow(userId)
                : await usersAPI.follow(userId)

            data.resultCode === ResultCodesEnum.Success && dispatch(toggleFollowSuccess(userId))
            dispatch(toggleFollowingInProgress(false, userId))
        } catch (e) {
            dispatch(toggleFollowingInProgress(false, userId))
            throw e
        }
    }
}

export default usersReducer
