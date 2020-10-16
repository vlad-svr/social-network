import {
    ADD_POST, CURRENT_PAGE, FOLLOW,
    SEND_MESSAGE, SET_USER_PROFILE,
    SET_USERS, TOGGLE_IS_FETCHING,
    TOTAL_USERS, UNFOLLOW,
    UPDATE_NEW_MESSAGE_CHANGE,
    UPDATE_NEW_POST_CHANGE,
} from './types';

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = data => ({
    type: UPDATE_NEW_POST_CHANGE,
    data
})

export const sendMessage = () => ({type: SEND_MESSAGE})
export const changeMessageText = data => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    data
})

export const follow = data => ({
    type: FOLLOW,
    userId: data
})

export const unfollow = data => ({
    type: UNFOLLOW,
    userId: data
})

export const setUsers = data => ({
    type: SET_USERS,
    users: data
})

export const setCurrentPage = data => ({
    type: CURRENT_PAGE,
    page: data
})

export const setTotalUsersCount = data => ({
    type: TOTAL_USERS,
    totalCount: data
})

export const toggleIsFetching = data => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: data
})

export const setUserProfile = data => ({
    type: SET_USER_PROFILE,
    profile: data
})
