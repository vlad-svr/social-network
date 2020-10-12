import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';


const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how  are you?', likesCount: 123},
                {id: 2, message: 'Hi, i\'m good!', likesCount: 27},
                {id: 3, message: 'Чем занимаешься?', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },

    _subscriber() {
        console.log('Not methods implemented')
    },

    subscribe(fn) {
        this._subscriber = fn
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._subscriber(this._state)
    },

    getState() {
        return this._state
    },
}


export default store
