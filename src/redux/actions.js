import {
    ADD_POST,
    SEND_MESSAGE,
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
