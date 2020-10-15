import {
    ADD_POST,
    UPDATE_NEW_POST_CHANGE
} from './types';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how  are you?', likesCount: 123},
        {id: 2, message: 'Hi, i\'m good!', likesCount: 27},
        {id: 3, message: 'Чем занимаешься?', likesCount: 2},
    ],
    newPostText: ''
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_CHANGE:
            return {
                ...state,
                newPostText: action.data
            }

        default:
            return state
    }
}

export default profileReducer
