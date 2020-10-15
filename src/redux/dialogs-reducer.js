import {
    SEND_MESSAGE,
    UPDATE_NEW_MESSAGE_CHANGE
} from './types';

const initialState = {
    messages: [
        {id: 1, message: 'Привет, хорошо', myMessage: false},
        {id: 2, message: 'Привет, как дела?', myMessage: true},
        {id: 3, message: 'Чем занимаешься?', myMessage: false},
        {id: 4, message: 'Ура!', myMessage: true},
        {id: 5, message: 'Хорошо!', myMessage: false},
        {id: 6, message: 'Привет, хорошо', myMessage: false},
        {id: 7, message: 'Привет, как дела?', myMessage: true},
        {id: 8, message: 'Чем занимаешься?', myMessage: false},
        {id: 9, message: 'Ура!', myMessage: true},
        {id: 10, message: 'Хорошо!', myMessage: false},
    ],
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Vladislav'},
        {id: 3, name: 'Yana'},
        {id: 4, name: 'Ira'},
        {id: 5, name: 'Alena'},
    ]
}

function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
                myMessage: true
            }

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }

        case UPDATE_NEW_MESSAGE_CHANGE:
            return {
                ...state,
                newMessageText: action.data
            }

        default:
            return state
    }
}

export default dialogsReducer
