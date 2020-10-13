import {
    ADD_POST, FOLLOW,
    SEND_MESSAGE, SET_USERS, UNFOLLOW,
    UPDATE_NEW_MESSAGE_CHANGE,
    UPDATE_NEW_POST_CHANGE
} from './types';

export const addPostCreater = () => ({type: ADD_POST})
export const updateNewPostChangeCreater = (data) => ({
    type: UPDATE_NEW_POST_CHANGE,
    data
})

export const sendMessageCreater = () => ({type: SEND_MESSAGE})
export const updateNewMessageChangeCreater = (data) => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    data
})

export const followAC = (data) => ({
    type: FOLLOW,
    userId: data
})

export const unfollowAC = (data) => ({
    type: UNFOLLOW,
    userId: data
})

export const setUsersAC = (data) => ({
    type: SET_USERS,
    users: data
})
