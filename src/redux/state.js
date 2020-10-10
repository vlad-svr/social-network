const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE_NEW_POST_CHANGE';
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE_NEW_MESSAGE_CHANGE';



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
        switch (action.type) {
            case ADD_POST:
                const posts = this._state.profilePage.posts
                const newPost = {
                    id: posts.length + 1,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._subscriber(this._state)
                break;

            case UPDATE_NEW_POST_CHANGE:
                this._state.profilePage.newPostText = action.data
                this._subscriber(this._state)
                break;

            case SEND_MESSAGE:
                const messages = this._state.dialogsPage.messages
                const newMessage = {
                    id: messages.length + 1,
                    message: this._state.dialogsPage.newMessageText,
                    myMessage: true
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._subscriber(this._state)
                break;

            case UPDATE_NEW_MESSAGE_CHANGE:
                this._state.dialogsPage.newMessageText = action.data
                this._subscriber(this._state)
                break;

            default:
                console.log('No method action')
        }
    },

    getState() {
        return this._state
    },
}

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



export default store
