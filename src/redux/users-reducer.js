import {
    CURRENT_PAGE,
    FOLLOW,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOTAL_USERS,
    UNFOLLOW,
} from './types';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

        default:
            return state
    }
}

export default usersReducer
