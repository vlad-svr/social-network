import {ResultCodesEnum} from '../api/api';
import { UserType } from '../types/types';
import {BaseThunkType, InfernActionsTypes} from "./redux-store";
import {usersAPI} from "../api/users-api";


const TOGGLE_FOLLOW = 'SN/USERS/TOGGLE_FOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const CURRENT_PAGE = 'SN/USERS/CURRENT_PAGE'
const TOTAL_USERS = 'SN/USERS/TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS'


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}


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


export const actions = {
    toggleFollowSuccess: (userId: number) => ({type: TOGGLE_FOLLOW, userId} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({type: CURRENT_PAGE, payload: {currentPage}} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: TOTAL_USERS, payload: {totalUsersCount}} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const),
}


export function requestUsers(page: number, pageSize: number): ThunkType {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleIsFetching(true))
            dispatch(actions.setCurrentPage(page))
            const data = await usersAPI.getUsers(page, pageSize)
            dispatch(actions.toggleIsFetching(false))
            dispatch(actions.setUsers(data.items))
            dispatch(actions.setTotalUsersCount(data.totalCount))
        } catch (e) {
            throw e
        }
    }
}

export function toggleFollow(userId: number): ThunkType {
    return async (dispatch) => {
        try {
            dispatch(actions.toggleFollowingInProgress(true, userId))
            const isFollowed = await usersAPI.checkFollower(userId)
            const data = isFollowed
                ? await usersAPI.unfollow(userId)
                : await usersAPI.follow(userId)
            data.resultCode === ResultCodesEnum.Success && dispatch(actions.toggleFollowSuccess(userId))
            dispatch(actions.toggleFollowingInProgress(false, userId))
        } catch (e) {
            dispatch(actions.toggleFollowingInProgress(false, userId))
            throw e
        }
    }
}


export default usersReducer


export type InitialStateType = typeof initialState
type ActionsTypes = InfernActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>



